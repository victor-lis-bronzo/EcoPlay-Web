import type { FastifyRequest, FastifyReply } from "fastify";
import jwt, { type JwtPayload } from "jsonwebtoken";
import { env } from "../../src/env";

declare module "fastify" {
  interface FastifyRequest {
    user?: JwtPayload & {
      sub: string;
      name: string;
      username: string;
      type: string;
      iat: number;
      exp: number;
    };
  }
}

const secretKey = env.SECRET_JWT_KEY;

export const verifyToken = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const authorizationHeader = request.headers.authorization;
    if (!authorizationHeader) {
      return reply.status(401).send({ error: "Token não fornecido" });
    }

    const token = authorizationHeader.split(" ")[1];
    const decoded = jwt.verify(token, secretKey);

    if (typeof decoded === "string") {
      return reply.status(401).send({ error: "Token inválido" });
    }

    request.user = decoded as JwtPayload & {
      sub: string;
      name: string;
      username: string;
      type: string;
      iat: number;
      exp: number;
    };
  } catch (err: any) {
    console.error("Erro na verificação do token:", err.message);
    return reply.status(401).send({ error: "Token inválido" });
  }
};
