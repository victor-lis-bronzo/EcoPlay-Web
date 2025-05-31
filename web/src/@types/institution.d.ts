import type { Operator } from "./operator";

export type Institution = {
  institutionId: number;
  name: string;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
  // controllers: Controller[];
  operators: Operator[];
};

export type InstitutionCreateInput = {
  name: string;
};
