import { z } from "zod";
import { config } from "dotenv";

if (process.env.NODE_ENV === "test") {
  config({ path: ".env.test", override: true });
} else {
  config();
}

export const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
  DATABASE_URL: z.string().url().min(1),
  PORT: z.coerce.number().default(3344),
  JWT_SECRET_KEY: z.string(),
  COOKIE_DOMAIN: z.string().default("localhost"),
  MQTT_BROKER: z.string().url(),
  MQTT_USERNAME: z.string(),
  MQTT_PASSWORD: z.string(),
  ADMIN_USERNAME: z.string().min(1, "Admin username is required"),
  ADMIN_PASSWORD: z.string().min(1, "Admin password is required"),
});

export const env = envSchema.parse(process.env);
