import { z } from "zod";

export const CreateBottleCapSchema = z.object({
  controllerCode: z.string(),
});

export type CreateBottleCapType = z.infer<typeof CreateBottleCapSchema>;
