import type { Institution } from "./institution";

export interface Controller {
  controllerId: number;
  name: string;
  code: string;
  status: boolean;
  createdAt: Date;
  institutionId: number;
  Institution: Institution;
}

export interface ControllerCreateInput {
  name: string;
  institutionId: number;
}
