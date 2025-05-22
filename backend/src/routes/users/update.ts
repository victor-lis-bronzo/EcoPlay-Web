import { UpdateOperatorSchema } from "@/schemas/operator/update";

import { OperatorService } from "@/services/operator";
import type { FastifyTypedInstance } from "@/@types/fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";

export function updateOperator(app: FastifyTypedInstance) {
  app.withTypeProvider<ZodTypeProvider>().put(
    "/:id",
    {
      schema: {
        summary: "Update a new operator ",
        tags: ["Operator"],
        params: z.object({
          id: z.coerce.number().int(),
        }),
        body: UpdateOperatorSchema,
        response: {
          201: z.object({
            message: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { id } = request.params;
      const data = request.body;
      await OperatorService.updateOperator(id, data);
      reply.status(201).send({
        message: "Operator updated successfully",
      });
    }
  );
}
