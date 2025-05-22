import prisma from "../db";
import { ResourceNotFoundError } from "../errors/resource-not-found-error";
import type { CreateBottleCapType } from "@/schemas/bottle-cap/create";

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export class BottleCapService {
  public static async getBottleCapCountByInstitutionId(id: number) {
    const institution = await prisma.institution.findUnique({
      where: { institutionId: id },
      include: {
        controllers: {
          include: {
            bottles_cap: true,
          },
        },
      },
    });

    if (!institution) {
      throw new ResourceNotFoundError();
    }

    const bottleCapCount = institution.controllers.reduce(
      (acc, controller) => acc + controller.bottles_cap.length,
      0
    );

    return bottleCapCount;
  }

  public static async createBottleCap(data: CreateBottleCapType) {
    const { controllerCode } = data;

    const bottleCap = await prisma.controller.findUnique({
      where: {
        code: controllerCode,
      },
    });

    return bottleCap;
  }
}
