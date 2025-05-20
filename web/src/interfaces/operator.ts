export interface Operator {
  operatorId: number;
  username: string;
  name: string;
  password: string;
  type: "USER" | "ADMIN" | string; // Ajuste conforme os valores possíveis de UserType
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
  sessionVersion: Date;
  institutionId?: number;
  // institution?: Institutions;
}

export interface OperatorCreateInput {
  username: string; 
  name: string;
  password: string;
  type: "USER" | "ADMIN" | string; // Ajuste conforme os valores possíveis de UserType
}