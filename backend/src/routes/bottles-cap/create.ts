import { CreateBottleCapSchema } from "@/schemas/bottle-cap/create";

import { BottleCapService } from "@/services/bottle-cap";
import type { FastifyTypedInstance } from "@/@types/fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";

export function createBottleCap(app: FastifyTypedInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    "/",
    {
      schema: {
        summary: "Create a new bottle cap",
        tags: ["BottleCap"],
        body: CreateBottleCapSchema,
        response: {
          201: z.object({
            message: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      await BottleCapService.createBottleCap(request.body);
      reply.status(201).send({
        message: "BottleCaps created successfully",
      });
    }
  );
}
