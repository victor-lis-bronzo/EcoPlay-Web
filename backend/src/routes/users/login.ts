import bcrypt from "bcrypt";
import type { FastifyInstance } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import jwt from "jsonwebtoken";
import z from "zod";
import { ClientError } from "../../errors/client-error";
import prisma from "../../db";

export async function login(app: FastifyInstance) {
	app.withTypeProvider<ZodTypeProvider>().post(
		"/users/login",
		{
			schema: {
				summary: "User Login",
				tags: ["users"],
				body: z.object({
					credential: z.string().min(4),
					password: z.string().min(8).max(32),
				}),
			},
		},
		async (request, reply) => {
			const { credential, password } = request.body;

			const operator = await prisma.operator.findFirst({
				where: {
					username: credential,
				},
			});

			console.log("operator", operator);

			if (!operator) throw new ClientError("User does not exist");

			if (!operator.status) throw new ClientError("User isn't active yet");

			const passwordMatch = await bcrypt.compare(password, operator.password);

			if (!passwordMatch) throw new ClientError("Password does not match");

			const secretJwtKey = process.env.SECRET_JWT_KEY as string;

			const expirationTime = "30d";

			const token = jwt.sign(
				{
					sub: operator.operatorId,
					name: operator.name,
					username: operator.username,
					type: operator.type,
				},
				secretJwtKey,
				{ expiresIn: expirationTime },
			);

			console.log("token", token);

			return reply.send({ token });
		},
	);
}
