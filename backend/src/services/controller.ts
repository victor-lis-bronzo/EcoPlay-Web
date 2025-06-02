import prisma from "../config/db";

import { ResourceNotFoundError } from "../errors/resource-not-found-error";
import type { CreateControllerType } from "@/schemas/controller/create";
import type { UpdateControllerType } from "@/schemas/controller/update";

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export class ControllerService {
  private static generateControllerCode() {
    const hexCode = Math.floor(Math.random() * 16777215).toString(16);
    const paddedCode = hexCode.padStart(6, "0");
    return `${paddedCode}`.toUpperCase();
  }

  public static async getAllControllers() {
    return await prisma.controller.findMany({
      include: {
        Institution: true,
      },
    });
  }

  public static async getControllerByInstitutionId(institutionId: number) {
    const controller = await prisma.controller.findMany({
      where: { institutionId },
      include: {
        Institution: true,
      },
    });
    if (!controller) {
      throw new ResourceNotFoundError();
    }
    return controller;
  }

  public static async getControllerById(code: string) {
    const controller = await prisma.controller.findUnique({
      where: {
        code,
      },
      include: {
        Institution: true,
      },
    });

    if (!controller) {
      throw new ResourceNotFoundError();
    }

    return controller;
  }

  public static async createController(data: CreateControllerType) {
    const controller = await prisma.controller.create({
      data: {
        ...data,
        status: true,
        code: ControllerService.generateControllerCode(),
      },
    });
    return controller;
  }

  public static async updateController(
    code: string,
    data: UpdateControllerType
  ) {
    const controller = await prisma.controller.findUnique({
      where: { code },
    });

    if (!controller) {
      throw new ResourceNotFoundError();
    }

    const updatedController = await prisma.controller.update({
      where: { code },
      data: {
        ...data,
      },
    });

    return updatedController;
  }

  public static async deleteController(code: string) {
    const controller = await prisma.controller.findUnique({
      where: { code },
    });

    if (!controller) {
      throw new ResourceNotFoundError();
    }

    const deletedController = await prisma.controller.delete({
      where: { code },
    });

    return deletedController;
  }
}
