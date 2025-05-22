import { CreateControllerSchema } from "@/schemas/controller/create";

import { ControllerService } from "@/services/controller";
import type { FastifyTypedInstance } from "@/@types/fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";

export function createController(app: FastifyTypedInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    "/",
    {
      schema: {
        summary: "Create a new controllers ",
        tags: ["Controller"],
        body: CreateControllerSchema,
        response: {
          201: z.object({
            message: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      await ControllerService.createController({
        ...request.body,
      });
      reply.status(201).send({
        message: "Controllers created successfully",
      });
    }
  );
}
