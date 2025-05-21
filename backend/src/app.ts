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

import { OperatorRouter } from "./routes/users/operators";

import { verifyToken } from "./middlewares/verify-token";

const app = fastify();

app.register(cors, {
  origin: (origin, cb) => {
    cb(null, true); // Allow all origins
  },
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  credentials: true, // Allow credentials if needed
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(login);
app.register(createUser);

app.register(async (app) => {
  app.addHook("preHandler", verifyToken);
  app.register(OperatorRouter);
});

// Inicializa o servidor
const port = process.env.PORT ? Number(process.env.PORT) : 4000;
app.listen({ port, host: "0.0.0.0" }).then(() => {
  console.log(`Server running on port ${port}`);
});
