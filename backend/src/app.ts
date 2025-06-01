import { env } from "@/config/env";

import fastify from "fastify";
import cors from "@fastify/cors";

import fastifySwagger from "@fastify/swagger";

import { SwaggerTheme, SwaggerThemeNameEnum } from "swagger-themes";
import fastifySwaggerUi from "@fastify/swagger-ui";

import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod";

import fastifyCookie from "@fastify/cookie";

import "./mqtt/mqtt"; // Mantém o MQTT ativo
import "./mqtt/client"; // Mantém o MQTT ativo

import { authRoutes } from "@/routes/auth/index";

import { OperatorRoutes } from "@/routes/users/index";
import { InstitutionRoutes } from "@/routes/institutions";
import { ControllerRoutes } from "@/routes/controllers";
import { BottleCapRoutes } from "@/routes/bottles-cap";

import { authenticate } from "@/middlewares/auth";
import { errorHandler } from "@/errors/error-handler";
import { SeedService } from "./services/seed";

const app = fastify();

await app.register(cors, {
  origin: ["http://localhost:3000", "https://eco-play.vercel.app"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
});

app.register(fastifyCookie, {
  secret: env.JWT_SECRET_KEY, // para assinar cookies
  parseOptions: {
    path: "/",
    httpOnly: true,
    secure: env.NODE_ENV === "production",
    maxAge: 60 * 60 * 12,
    domain: env.COOKIE_DOMAIN, // Domínio do cookie, se necessário
  },
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

app.register(authRoutes, { prefix: "/auth" });

app.register((app) => {
  app.addHook("preHandler", authenticate);

  app.register(OperatorRoutes, { prefix: "/users" });
  app.register(InstitutionRoutes, { prefix: "/institutions" });
  app.register(ControllerRoutes, { prefix: "/controllers" });
  app.register(BottleCapRoutes, { prefix: "/bottle-caps" });
});

// Inicializa o servidor
const port = process.env.PORT ? Number(process.env.PORT) : 4000;
app.listen({ port, host: "0.0.0.0" }).then(() => {
  SeedService.createAdmin();
  console.log(`Server running on port ${port}`);
});
