import type { FastifyRequest, FastifyReply } from "fastify";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import prisma from "../db";

dotenv.config();

export const authenticateOperator = async (
  req: FastifyRequest,
  res: FastifyReply,
): Promise<void> => {
  const { username, password } = req.body as {
    username: string;
    password: string;
  };

  if (!username || !password) {
    res.status(400).send({ error: "Nome de usuário e senha são obrigatórios" });
    return;
  }

  try {
    const operator = await prisma.operator.findUnique({
      where: {
        username: username,
        status: true,
      },
    });

    if (!operator) {
      res.status(401).send({ error: "Nome de usuário não encontrado" });
      return;
    }
    const passwordMatch = await bcrypt.compare(password, operator.password);

    if (!passwordMatch) {
      res.status(401).send({ error: "Senha incorreta" });
      return;
    }

    if (!process.env.SECRET_KEY) {
      throw new Error("SECRET_KEY não definida. Configure-a no arquivo .env");
    }

    const secretKey = process.env.SECRET_KEY;
    const sessionVersion =
      operator.sessionVersion?.toISOString() || new Date().toISOString();

    const token = jwt.sign(
      {
        user: {
          id: operator.operatorId,
          name: operator.name,
          username: operator.username,
          institutionId: operator.institutionId,
          type: operator.type,
          sessionVersion: sessionVersion,
        },
      },
      secretKey,
      {
        expiresIn: "24h",
      },
    );

    res.status(200).send({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Erro ao autenticar o usuário" });
  }
};
