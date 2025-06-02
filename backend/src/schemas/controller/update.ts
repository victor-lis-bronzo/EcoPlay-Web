import { z } from "zod";

export const UpdateControllerSchema = z.object({
  name: z.string().optional(),
});

export type UpdateControllerType = z.infer<typeof UpdateControllerSchema>;
