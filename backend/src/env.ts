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
  SECRET_JWT_KEY: z.string(),
  MQTT_BROKER: z.string().url(),
  MQTT_USERNAME: z.string(),
  MQTT_PASSWORD: z.string(),
});

export const env = envSchema.parse(process.env);
