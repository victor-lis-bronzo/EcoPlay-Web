import { ControllerService } from "@/services/controller";
import type { FastifyTypedInstance } from "@/@types/fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";

export function deleteController(app: FastifyTypedInstance) {
  app.withTypeProvider<ZodTypeProvider>().delete(
    "/:id",
    {
      schema: {
        summary: "Retrieve a controller",
        tags: ["Controller"],
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
      await ControllerService.deleteController(id);
      reply.status(200).send({
        message: "Controller deleted successfully",
      });
    }
  );
}
