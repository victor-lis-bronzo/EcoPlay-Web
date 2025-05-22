import type { FastifyTypedInstance } from "@/@types/fastify";
import { getAllInstitutions } from "./get-all";
import { getInstitutionById } from "./get";
import { createInstitution } from "./create";
import { updateInstitution } from "./update";
import { deleteInstitution } from "./delete";

export async function InstitutionRoutes(app: FastifyTypedInstance) {
  app.register(getAllInstitutions);
  app.register(getInstitutionById);
  app.register(createInstitution);
  app.register(updateInstitution);
  app.register(deleteInstitution);
}
