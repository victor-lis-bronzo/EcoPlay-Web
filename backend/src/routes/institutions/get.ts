import { InstitutionSchema } from "@/schemas/institution";

import { InstitutionService } from "@/services/institution";
import type { FastifyTypedInstance } from "@/@types/fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";

export function getInstitutionById(app: FastifyTypedInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    "/:id",
    {
      schema: {
        summary: "Retrieve a institution",
        tags: ["Institution"],
        params: z.object({
          id: z.coerce.number().int(),
        }),
        response: {
          200: InstitutionSchema,
        },
      },
    },
    async (request, reply) => {
      const { id } = request.params;
      const institution = await InstitutionService.getInstitutionById(id);
      reply.status(200).send(institution);
    }
  );
}
