import { InstitutionService } from "@/services/institution";
import type { FastifyTypedInstance } from "@/@types/fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";

export function deleteInstitution(app: FastifyTypedInstance) {
  app.withTypeProvider<ZodTypeProvider>().delete(
    "/:id",
    {
      schema: {
        summary: "Retrieve a institution",
        tags: ["Institution"],
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
      await InstitutionService.deleteInstitution(id);
      reply.status(200).send({
        message: "Institution deleted successfully",
      });
    }
  );
}
