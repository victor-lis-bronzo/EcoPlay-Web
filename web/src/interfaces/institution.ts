import type { Operator } from "./operator";

export interface Institution {
  institutionId: number;
  name: string;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
  // controllers: Controller[];
  operators: Operator[];
}

export interface InstitutionCreateInput {
  name: string;
}
