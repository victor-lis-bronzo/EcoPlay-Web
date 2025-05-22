import type { FastifyTypedInstance } from "@/@types/fastify";
import { getControllersByInstitutionId } from "./get-controllers-by-institution-id";
import { getAllControllers } from "./get-all";
import { getControllerById } from "./get";
import { createController } from "./create";
import { updateController } from "./update";
import { deleteController } from "./delete";

export async function ControllerRoutes(app: FastifyTypedInstance) {
  app.register(getControllersByInstitutionId);
  app.register(getAllControllers);
  app.register(getControllerById);
  app.register(createController);
  app.register(updateController);
  app.register(deleteController);
}
