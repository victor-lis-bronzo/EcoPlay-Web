import { z } from "zod";

export const CreateInstitutionSchema = z.object({
  name: z.string(),
});

export type CreateInstitutionType = z.infer<typeof CreateInstitutionSchema>;
