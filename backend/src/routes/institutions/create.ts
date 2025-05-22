import { CreateInstitutionSchema } from "@/schemas/institution/create";

import { InstitutionService } from "@/services/institution";
import type { FastifyTypedInstance } from "@/@types/fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";

export function createInstitution(app: FastifyTypedInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    "/",
    {
      schema: {
        summary: "Create a new institutions ",
        tags: ["Institution"],
        body: CreateInstitutionSchema,
        response: {
          201: z.object({
            message: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      await InstitutionService.createInstitution({
        ...request.body,
      });
      reply.status(201).send({
        message: "Institutions created successfully",
      });
    }
  );
}
