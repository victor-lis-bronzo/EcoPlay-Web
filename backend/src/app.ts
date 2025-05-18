import dotenv from "dotenv";
dotenv.config();

import fastify from "fastify";
import cors from "@fastify/cors";
import {
	serializerCompiler,
	validatorCompiler,
} from "fastify-type-provider-zod";

import "./mqtt/client"; // Mantém o MQTT ativo
import { login } from "./routes/users/login";
import { createUser } from "./routes/users/createUser";

const app = fastify();

app.register(cors, {
	origin: "*",
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(login);
app.register(createUser);

app.get("/", async (request, reply) => {
	return { message: "Olá, Fastify com WebSocket e MQTT!" };
});

// const io = new Server(server, {
// 	cors: {
// 		origin: "*",
// 		methods: ["GET", "POST"],
// 	},
// });

// Exemplo de callback WebSocket
// io.on("connection", (socket) => {
// 	console.log("Novo cliente WebSocket conectado:", socket.id);
// 	socket.on("disconnect", () => {
// 		console.log("Cliente desconectado:", socket.id);
// 	});
// });

// Inicializa o servidor
const port = process.env.PORT ? Number(process.env.PORT) : 4000;
app.listen({ port, host: "0.0.0.0" }).then(() => {
	console.log(`Server running on port ${port}`);
});
