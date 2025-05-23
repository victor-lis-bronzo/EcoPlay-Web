import dotenv from "dotenv";
dotenv.config();

import fastify from "fastify";
import cors from "@fastify/cors";
import fastifySwagger from "@fastify/swagger";
import { SwaggerTheme, SwaggerThemeNameEnum } from "swagger-themes";
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod";

import { errorHandler } from "@/middlewares/error-handler";

import "./mqtt/mqtt"; // Mantém o MQTT ativo
import "./mqtt/client"; // Mantém o MQTT ativo

import { login } from "@/routes/auth/login";
import { createUser } from "@/routes/auth/createUser";

import { OperatorRoutes } from "@/routes/users/index";
import { InstitutionRoutes } from "@/routes/institutions";
import { ControllerRoutes } from "./routes/controllers";
import { BottleCapRoutes } from "./routes/bottles-cap";

import { verifyToken } from "@/middlewares/verify-token";
import fastifySwaggerUi from "@fastify/swagger-ui";

const app = fastify();

app.register(cors, {
  origin: ["http://localhost:3000", "https://eco-play.vercel.app/"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "X-Requested-With",
    "Accept",
    "Origin",
    "Access-Control-Allow-Origin",
  ],
});

const theme = new SwaggerTheme();
const content = theme.getBuffer(SwaggerThemeNameEnum.DARK); // Dark mode for Swagger UI

app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "Eco-Play API",
      description: "API para a aplicação do Eco-Play",
      version: "1.0.0",
    },
  },
  transform: jsonSchemaTransform,
});

app.register(fastifySwaggerUi, {
  routePrefix: "/docs",
  theme: {
    css: [{ filename: "theme.css", content: content }],
  },
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.setErrorHandler(errorHandler);

app.register(login);
app.register(createUser);

app.register(async (app) => {
  // app.addHook("preHandler", verifyToken);
  app.register(OperatorRoutes, { prefix: "/users" });
  app.register(InstitutionRoutes, { prefix: "/institutions" });
  app.register(ControllerRoutes, { prefix: "/controllers" });
  app.register(BottleCapRoutes, { prefix: "/bottle-caps" });
});

// Inicializa o servidor
const port = process.env.PORT ? Number(process.env.PORT) : 4000;
app.listen({ port, host: "0.0.0.0" }).then(() => {
  console.log(`Server running on port ${port}`);
});
