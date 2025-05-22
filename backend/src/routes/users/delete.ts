import { OperatorService } from "@/services/operator";
import type { FastifyTypedInstance } from "@/@types/fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";

export function deleteOperator(app: FastifyTypedInstance) {
  app.withTypeProvider<ZodTypeProvider>().delete(
    "/:id",
    {
      schema: {
        summary: "Retrieve a operator",
        tags: ["Operator"],
        params: z.object({
          id: z.coerce.number().int(),
        }),
        response: {
          204: z.object({
            message: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { id } = request.params;
      await OperatorService.deleteOperator(id);
      reply.status(200).send({
        message: "Operator deleted successfully",
      });
    }
  );
}
