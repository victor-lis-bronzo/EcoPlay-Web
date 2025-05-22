import { z } from "zod";

export const UpdateControllerSchema = z.object({
  controllerId: z.number().int().optional(),
  name: z.string().optional(),
  code: z.string().optional(),
  status: z.boolean().optional(),
  createdAt: z.date().optional(),
  institutionId: z.number().int().optional(),
});

export type UpdateControllerType = z.infer<typeof UpdateControllerSchema>;
