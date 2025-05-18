import type { FastifyInstance } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { OperatorService } from "../../services/operator";

const { createOperator } = new OperatorService();

export async function createUser(app: FastifyInstance) {
	app.withTypeProvider<ZodTypeProvider>().post(
		"/users",
		{
			schema: {
				summary: "Create user",
				tags: ["users", "manager"],
				body: z.object({
					name: z.string(),
					username: z.string().min(4),
					password: z.string().min(8).max(32),
					type: z.enum(["USER", "ADMIN"]).default("USER"),
				}),
			},
		},
		async (request, reply) => {
			const response = await createOperator({ ...request.body, status: true });

			return reply.status(201).send({ id: response });
		},
	);
}
