import type { FastifyInstance } from "fastify";
import { OperatorController } from "../../controllers/operator";

export function OperatorRouter(fastify: FastifyInstance) {
  fastify.get("/users", OperatorController.getAll);
  fastify.get("/users/:id", OperatorController.getById);
  fastify.post("/users", OperatorController.create);
  fastify.put("/users/:id", OperatorController.update);
  fastify.delete("/users/:id", OperatorController.delete);
}
