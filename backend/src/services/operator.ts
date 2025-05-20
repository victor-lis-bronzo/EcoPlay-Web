import type { Prisma } from "../../prisma/generated/client";
import prisma from "../db";
import { ResourceNotFoundError } from "../errors/resource-not-found-error";
import bcrypt from "bcrypt";

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export class OperatorService {
  public static async getAllOperators() {
    return await prisma.operator.findMany({
      orderBy: [{ status: "asc" }, { type: "desc" }, { name: "asc" }],
    });
  }

  public static async getOperatorById(id: number) {
    const operator = await prisma.operator.findUnique({
      where: { operatorId: id },
    });

    if (!operator) {
      throw new ResourceNotFoundError();
    }

    return operator;
  }

  public static async createOperator(
    data: Prisma.OperatorUncheckedCreateInput
  ) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const operator = await prisma.operator.create({
      data: { ...data, password: hashedPassword },
    });

    return operator;
  }

  public static async updateOperator(
    id: number,
    data: Prisma.OperatorUncheckedUpdateInput
  ) {
    let hashedPassword: string | undefined;
    if (data.password) {
      hashedPassword = await bcrypt.hash(data.password as string, 10);
    }

    const operator = await prisma.operator.findUnique({
      where: { operatorId: id },
    });

    if (!operator) {
      throw new ResourceNotFoundError();
    }

    const newOperator = await prisma.operator.update({
      where: { operatorId: id },
      data: { ...data, password: hashedPassword || operator.password },
    });

    return newOperator;
  }

  public static async deleteOperator(id: number) {
    const operator = await prisma.operator.findUnique({
      where: { operatorId: id },
    });

    if (!operator) {
      throw new ResourceNotFoundError();
    }

    return await prisma.operator.delete({
      where: { operatorId: id },
    });
  }
}
