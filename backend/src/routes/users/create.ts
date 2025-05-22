import { CreateOperatorSchema } from "@/schemas/operator/create";

import { OperatorService } from "@/services/operator";
import type { FastifyTypedInstance } from "@/@types/fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";

export function createOperator(app: FastifyTypedInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    "/",
    {
      schema: {
        summary: "Create a new operator ",
        tags: ["Operator"],
        body: CreateOperatorSchema,
        response: {
          201: z.object({
            message: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      await OperatorService.createOperator({
        ...request.body,
      });
      reply.status(201).send({
        message: "Operator created successfully",
      });
    }
  );
}
