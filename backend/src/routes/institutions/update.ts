import { UpdateInstitutionSchema } from "@/schemas/institution/update";

import { InstitutionService } from "@/services/institution";
import type { FastifyTypedInstance } from "@/@types/fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";

export function updateInstitution(app: FastifyTypedInstance) {
  app.withTypeProvider<ZodTypeProvider>().put(
    "/:id",
    {
      schema: {
        summary: "Update a new institution ",
        tags: ["Institution"],
        params: z.object({
          id: z.coerce.number().int(),
        }),
        body: UpdateInstitutionSchema,
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
      await InstitutionService.updateInstitution(id, data);
      reply.status(201).send({
        message: "Institution updated successfully",
      });
    }
  );
}
