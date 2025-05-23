import { BottleCapService } from "@/services/bottle-cap";
import type { FastifyTypedInstance } from "@/@types/fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";

export function sendBottleCapCountByControllerCode(app: FastifyTypedInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    "/controller-send-count/:id",
    {
      schema: {
        summary: "Retrieve a bottlecaps by bottlecap",
        tags: ["BottleCap"],
        params: z.object({
          id: z.string(),
        }),
        response: {
          200: z.null(),
        },
      },
    },
    async (request, reply) => {
      const { id } = request.params;
      await BottleCapService.sendBottleCapCountByControllerCode(id);
      reply.status(200).send();
    }
  );
}
