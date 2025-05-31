import { AuthSchema } from "@/schemas/auth";
import { AuthService } from "@/services/auth";

import { FastifyTypedInstance } from "@/types/fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";

export function signIn(app: FastifyTypedInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    "/sign-in",
    {
      schema: {
        summary: "Sign in an operator",
        tags: ["Auth"],
        body: AuthSchema,
        response: {
          200: z.object({
            message: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { credential, password } = request.body;

      const operator = await AuthService.verifyUser(credential, password);
      const token = await AuthService.login(operator);

      reply.setCookie("auth-token", token).send({
        message: "Operator signed in successfully",
      });
    }
  );
}
