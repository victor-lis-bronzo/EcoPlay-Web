import { ControllerSchema } from "@/schemas/controller";

import { ControllerService } from "@/services/controller";
import type { FastifyTypedInstance } from "@/@types/fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";

export function getControllersByInstitutionId(app: FastifyTypedInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    "/institution/:id",
    {
      schema: {
        summary: "Retrieve a controllers by institution",
        tags: ["Controller"],
        params: z.object({
          id: z.coerce.number().int(),
        }),
        response: {
          200: ControllerSchema.array(),
        },
      },
    },
    async (request, reply) => {
      const { id } = request.params;
      const controller = await ControllerService.getControllerByInstitutionId(
        id
      );
      reply.status(200).send(controller);
    }
  );
}
