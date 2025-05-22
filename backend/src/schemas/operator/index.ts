import { z } from "zod";
import { InstitutionSchema } from "../institution";

export const OperatorSchema = z.object({
  operatorId: z.number().int(),
  username: z.string(),
  name: z.string(),
  password: z.string(),
  type: z.enum(["USER", "ADMIN"]), // ajuste os valores conforme seu enum UserType
  status: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  institutionId: z.number().int().nullable().optional(),
  Institution: z.any().optional(), // substitua por um schema InstitutionsSchema se existir
});

export type OperatorType = z.infer<typeof OperatorSchema>;
