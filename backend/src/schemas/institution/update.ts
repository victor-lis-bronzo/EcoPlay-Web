import { z } from "zod";

export const UpdateInstitutionSchema = z.object({
  institutionId: z.number().int().optional(),
  name: z.string().optional(),
  status: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export type UpdateInstitutionType = z.infer<typeof UpdateInstitutionSchema>;
