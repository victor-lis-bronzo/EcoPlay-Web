import type { FastifyTypedInstance } from "@/@types/fastify";
import { getAllOperators } from "./get-all";
import { getOperatorById } from "./get";
import { createOperator } from "./create";
import { updateOperator } from "./update";
import { deleteOperator } from "./delete";

export async function OperatorRoutes(app: FastifyTypedInstance) {
  app.register(getAllOperators);
  app.register(getOperatorById);
  app.register(createOperator);
  app.register(updateOperator);
  app.register(deleteOperator);
}
