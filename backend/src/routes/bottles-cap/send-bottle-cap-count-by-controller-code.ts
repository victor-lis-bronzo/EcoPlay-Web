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
        querystring: z.object({
          reset: z.coerce.boolean().optional().default(false),
        }),
        response: {
          200: z.null(),
        },
      },
    },
    async (request, reply) => {
      const { id } = request.params;
      const { reset } = request.query;
      if (reset) {
        // Reset the bottle cap count for the controller
        await BottleCapService.resetBottleCapCountByControllerCode(id);
        reply.status(204).send();
        return;
      }
      await BottleCapService.sendBottleCapCountByControllerCode(id);
      reply.status(200).send();
    }
  );
}
