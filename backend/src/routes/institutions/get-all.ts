import { InstitutionSchema } from "@/schemas/institution";

import { InstitutionService } from "@/services/institution";
import type { FastifyTypedInstance } from "@/@types/fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";

export function getAllInstitutions(app: FastifyTypedInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    "/",
    {
      schema: {
        summary: "Retrieve all institutions",
        tags: ["Institution"],
        response: {
          200: InstitutionSchema.array(),
        },
      },
    },
    async (request, reply) => {
      const institutions = await InstitutionService.getAllInstitutions();
      reply.status(200).send(institutions);
    }
  );
}
