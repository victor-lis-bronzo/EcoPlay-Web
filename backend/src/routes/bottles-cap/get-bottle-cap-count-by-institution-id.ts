import { BottleCapSchema } from "@/schemas/bottle-cap";

import { BottleCapService } from "@/services/bottle-cap";
import type { FastifyTypedInstance } from "@/@types/fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";

export function getBottleCapCountByBottleCapId(app: FastifyTypedInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    "/institution-count/:id",
    {
      schema: {
        summary: "Retrieve a bottlecaps by bottlecap",
        tags: ["BottleCap"],
        params: z.object({
          id: z.coerce.number().int(),
        }),
        response: {
          200: z.number(),
        },
      },
    },
    async (request, reply) => {
      const { id } = request.params;
      const count = await BottleCapService.getBottleCapCountByInstitutionId(id);
      reply.status(200).send(count);
    }
  );
}
