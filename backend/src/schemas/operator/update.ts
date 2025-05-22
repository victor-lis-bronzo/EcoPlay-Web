import { z } from "zod";

export const UpdateOperatorSchema = z.object({
  username: z.string().optional(),
  name: z.string().optional(),
  password: z.string().optional(),
  type: z.enum(["USER", "ADMIN"]).optional(),
  status: z.boolean().optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  institutionId: z.number().int().nullable().optional(),
});

export type UpdateOperatorType = z.infer<typeof UpdateOperatorSchema>;
