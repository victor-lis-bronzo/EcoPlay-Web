import { z } from "zod";
import { OperatorSchema } from "../operator";

export const InstitutionSchema = z.object({
  institutionId: z.number().int(),
  name: z.string(),
  status: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  operators: z.array(OperatorSchema).optional(),
});

export type InstitutionType = z.infer<typeof InstitutionSchema>;
