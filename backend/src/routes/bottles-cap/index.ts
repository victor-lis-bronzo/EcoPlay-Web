import type { FastifyTypedInstance } from "@/@types/fastify";
import { getBottleCapCountByInstitutionId } from "./get-bottle-cap-count-by-institution-id";
import { sendBottleCapCountByControllerCode } from "./send-bottle-cap-count-by-controller-code";

import { createBottleCap } from "./create";
import { getBottleCapCountByControllerCode } from "./get-bottle-cap-count-by-controller-code";

export async function BottleCapRoutes(app: FastifyTypedInstance) {
  app.register(getBottleCapCountByInstitutionId);
  app.register(getBottleCapCountByControllerCode);
  app.register(sendBottleCapCountByControllerCode);
  app.register(createBottleCap);
}
