import { ControllerSchema } from "@/schemas/controller";

import { ControllerService } from "@/services/controller";
import type { FastifyTypedInstance } from "@/@types/fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";

export function getControllerById(app: FastifyTypedInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    "/:code",
    {
      schema: {
        summary: "Retrieve a controller",
        tags: ["Controller"],
        params: z.object({
          code: z.string(),
        }),
        response: {
          200: ControllerSchema,
        },
      },
    },
    async (request, reply) => {
      const { code } = request.params;
      const controller = await ControllerService.getControllerById(code);
      reply.status(200).send(controller);
    }
  );
}
