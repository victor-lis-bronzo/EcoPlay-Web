import { z } from "zod";

export const AuthSchema = z.object({
  credential: z.string().email().or(z.string().min(1)),
  password: z.string(),
});

export type AuthType = z.infer<typeof AuthSchema>;
