import { FastifyInstance } from "fastify";
import { ZodError } from "zod";
import { ClientError } from "@/errors/client-error";
import { ResourceNotFoundError } from "@/errors/resource-not-found-error";

type FastifyErrorHandler = FastifyInstance["errorHandler"];

export const errorHandler: FastifyErrorHandler = (error, request, reply) => {
  console.error("Erro capturado:", error);
  if (error instanceof ZodError) {
    return reply.status(400).send({
      message: "Invalid Input",
      errors: error.flatten().fieldErrors,
    });
  }

  if (error instanceof ClientError) {
    return reply.status(400).send({
      message: error.message,
    });
  }

  if (error instanceof ResourceNotFoundError) {
    return reply.status(404).send({
      message: error.message,
    });
  }

  return reply.status(500).send({
    message: "Internal Server Error",
    error: {
      message: error.message,
      stack: error.stack,
    },
  });
};
