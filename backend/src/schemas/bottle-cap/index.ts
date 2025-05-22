import { z } from "zod";

export const BottleCapSchema = z.object({
  bottleCapId: z.number().int(),
  createdAt: z.date(),
  controllerId: z.number().int(),
  Controller: z.any(), // Substitua por ControllerSchema se existir
});

export type BottleCapType = z.infer<typeof BottleCapSchema>;
