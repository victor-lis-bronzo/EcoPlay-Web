import { z } from "zod";
import { InstitutionSchema } from "../institution";

export const ControllerSchema = z.object({
  controllerId: z.number().int(),
  name: z.string(),
  code: z.string(),
  status: z.boolean(),
  createdAt: z.date(),
  institutionId: z.number().int(),
  Institution: InstitutionSchema.optional(),
});

export type ControllerType = z.infer<typeof ControllerSchema>;
