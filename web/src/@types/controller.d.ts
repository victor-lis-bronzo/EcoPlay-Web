import type { Institution } from "./institution";

export type Controller = {
  name: string;
  code: string;
  status: boolean;
  createdAt: Date;
  institutionId: number;
  Institution: Institution;
};

export type ControllerCreateInput = {
  name: string;
  institutionId: number;
};
