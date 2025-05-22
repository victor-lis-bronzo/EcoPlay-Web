import { z } from "zod";

export const CreateControllerSchema = z.object({
  name: z.string(),
  institutionId: z.number().int(),
});

export type CreateControllerType = z.infer<typeof CreateControllerSchema>;
