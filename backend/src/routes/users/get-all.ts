import { OperatorSchema } from "@/schemas/operator";

import { OperatorService } from "@/services/operator";
import type { FastifyTypedInstance } from "@/@types/fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";

export function getAllOperators(app: FastifyTypedInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    "/",
    {
      schema: {
        summary: "Retrieve all operators",
        tags: ["Operator"],
        response: {
          200: OperatorSchema.array(),
        },
      },
    },
    async (request, reply) => {
      const operators = await OperatorService.getAllOperators();
      reply.status(200).send(operators);
    }
  );
}
