import { z } from "zod";

export const CreateOperatorSchema = z.object({
  name: z.string(),
  username: z.string(),
  password: z.string(),
  type: z.enum(["USER", "ADMIN"]),
});

export type CreateOperatorType = z.infer<typeof CreateOperatorSchema>;
