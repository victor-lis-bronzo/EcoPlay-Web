import { ControllerSchema } from "@/schemas/controller";

import { ControllerService } from "@/services/controller";
import type { FastifyTypedInstance } from "@/@types/fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";

export function getAllControllers(app: FastifyTypedInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    "/",
    {
      schema: {
        summary: "Retrieve all controllers",
        tags: ["Controller"],
        response: {
          200: ControllerSchema.array(),
        },
      },
    },
    async (request, reply) => {
      const controllers = await ControllerService.getAllControllers();
      reply.status(200).send(controllers);
    }
  );
}
