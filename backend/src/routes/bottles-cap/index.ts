import type { FastifyTypedInstance } from "@/@types/fastify";
import { getBottleCapCountByBottleCapId } from "./get-bottle-cap-count-by-institution-id";
import { createBottleCap } from "./create";

export async function BottleCapRoutes(app: FastifyTypedInstance) {
  app.register(getBottleCapCountByBottleCapId);
  app.register(createBottleCap);
}
