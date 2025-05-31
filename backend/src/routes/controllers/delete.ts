import { ControllerService } from "@/services/controller";
import type { FastifyTypedInstance } from "@/@types/fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";

export function deleteController(app: FastifyTypedInstance) {
  app.withTypeProvider<ZodTypeProvider>().delete(
    "/:code",
    {
      schema: {
        summary: "Retrieve a controller",
        tags: ["Controller"],
        params: z.object({
          code: z.string(),
        }),
        response: {
          204: z.object({
            message: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { code } = request.params;
      await ControllerService.deleteController(code);
      reply.status(200).send({
        message: "Controller deleted successfully",
      });
    }
  );
}
