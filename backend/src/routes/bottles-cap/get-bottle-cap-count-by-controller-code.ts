import { BottleCapService } from "@/services/bottle-cap";
import type { FastifyTypedInstance } from "@/@types/fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";

export function getBottleCapCountByControllerCode(app: FastifyTypedInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    "/controller-count/:code",
    {
      schema: {
        summary: "Retrieve a bottlecaps by bottlecap",
        tags: ["BottleCap"],
        params: z.object({
          code: z.string().min(6, "Controller code is required"),
        }),
        response: {
          200: z.number(),
        },
      },
    },
    async (request, reply) => {
      const { code } = request.params;
      const count = await BottleCapService.getBottleCapCountByControllerCode(
        code
      );
      reply.status(200).send(count);
    }
  );
}
