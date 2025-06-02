import { env } from "@/config/env";
import { FastifyReply, FastifyRequest } from "fastify";
import jwt from "jsonwebtoken";

export async function authenticate(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const token = request.headers.authorization?.split(" ")[1];
  // console.log("Token recebido:", token);

  if (!token) {
    return reply.status(401).send({ error: "Token ausente" });
  }

  try {
    const decoded = jwt.verify(token, env.JWT_SECRET_KEY) as jwt.JwtPayload;
    request.user = decoded;
  } catch (err) {
    return reply.status(401).send({ error: "Token inválido ou expirado" });
  }
}
