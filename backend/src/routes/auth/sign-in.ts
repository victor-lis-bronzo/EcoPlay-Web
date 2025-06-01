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
            token: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { credential, password } = request.body;

      console.log("Signing in operator with credential:", credential);
      console.log("Signing in operator with password:", password);

      const operator = await AuthService.verifyUser(credential, password);
      const token = await AuthService.login(operator);

      console.log("Operator signed in successfully:", operator);
      console.log("Generated token:", token);

      reply.status(200).send({ token });
      // reply.setCookie("auth-token", token).send({
      //   message: "Operator signed in successfully",
      // });
    }
  );
}
