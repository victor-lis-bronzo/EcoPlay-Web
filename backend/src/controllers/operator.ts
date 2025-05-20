import type { FastifyRequest, FastifyReply } from "fastify";
import { OperatorService } from "../services/operator";
import { OperatorCreateInputSchema } from "@prisma/generated/zod";
import { z } from "zod";

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export class OperatorController {
  static async getAll(req: FastifyRequest, res: FastifyReply) {
    const operators = await OperatorService.getAllOperators();
    res.send(operators);
  }

  static async getById(req: FastifyRequest, res: FastifyReply) {
    const { id } = z.object({ id: z.number() }).parse(req.params);
    const operator = await OperatorService.getOperatorById(id);
    if (!operator) {
      return res.code(404).send({ message: "Operator not found" });
    }
    res.send(operator);
  }

  static async create(req: FastifyRequest, res: FastifyReply) {
    const data = OperatorCreateInputSchema.parse(req.body);
    const operator = await OperatorService.createOperator(data);
    res.code(201).send(operator);
  }

  static async update(req: FastifyRequest, res: FastifyReply) {
    const { id } = z.object({ id: z.number() }).parse(req.params);
    const data = OperatorCreateInputSchema.parse(req.body);
    const operator = await OperatorService.updateOperator(id, data);
    res.send(operator);
  }

  static async delete(req: FastifyRequest, res: FastifyReply) {
    const { id } = z.object({ id: z.number() }).parse(req.params);
    const operator = await OperatorService.deleteOperator(id);
    if (!operator) {
      return res.code(404).send({ message: "Operator not found" });
    }
    res.send({ message: "Operator deleted successfully" });
  }
}
