import { UpdateControllerSchema } from "@/schemas/controller/update";

import { ControllerService } from "@/services/controller";
import type { FastifyTypedInstance } from "@/@types/fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";

export function updateController(app: FastifyTypedInstance) {
  app.withTypeProvider<ZodTypeProvider>().put(
    "/:id",
    {
      schema: {
        summary: "Update a new controller ",
        tags: ["Controller"],
        params: z.object({
          id: z.coerce.number().int(),
        }),
        body: UpdateControllerSchema,
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
      await ControllerService.updateController(id, data);
      reply.status(201).send({
        message: "Controller updated successfully",
      });
    }
  );
}
