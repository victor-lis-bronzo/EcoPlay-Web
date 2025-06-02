import { BottleCapService } from "@/services/bottle-cap";
import type { FastifyTypedInstance } from "@/@types/fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";

export function sendBottleCapCountByControllerCode(app: FastifyTypedInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    "/controller-send-count/:code",
    {
      schema: {
        summary: "Retrieve a bottlecaps by bottlecap",
        tags: ["BottleCap"],
        params: z.object({
          code: z.string(),
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
      const { code } = request.params;
      const { reset } = request.query;
      if (reset) {
        // Reset the bottle cap count for the controller
        await BottleCapService.resetBottleCapCountByControllerCode(code);
        reply.status(204).send();
        return;
      }
      await BottleCapService.sendBottleCapCountByControllerCode(code);
      reply.status(200).send();
    }
  );
}
