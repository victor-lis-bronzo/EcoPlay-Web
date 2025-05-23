import prisma from "../db";
import { ResourceNotFoundError } from "../errors/resource-not-found-error";
import type { CreateBottleCapType } from "@/schemas/bottle-cap/create";

import { client } from "@/mqtt/mqtt";

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

  public static async getBottleCapCountByControllerCode(id: string) {
    const bottleCapCount = await prisma.bottleCap.count({
      where: { controllerCode: id },
    });

    return bottleCapCount;
  }

  public static async createBottleCap(data: CreateBottleCapType) {
    const { controllerCode } = data;
    console.log("Salvando tampinha no controllerCode:", controllerCode);

    // Verifica se o controller existe
    const controller = await prisma.controller.findUnique({
      where: { code: controllerCode },
    });

    if (!controller) {
      console.error("Controller não encontrado:", controllerCode);
      return;
    }

    try {
      const bottleCap = await prisma.bottleCap.create({
        data: {
          controllerCode: controllerCode,
        },
      });

      return bottleCap;
    } catch (error) {
      console.error("Error creating bottle cap:", error);
      return;
    }
  }

  public static async sendBottleCapCountByControllerCode(id: string) {
    const count = await BottleCapService.getBottleCapCountByControllerCode(id);
    const topic = `controller/${id}/count`;
    const message = `${count}`;
    console.log(
      `Enviando contagem de tampinhas para o tópico ${topic}:`,
      message
    );
    client.publish(topic, message, { qos: 1 }, (error) => {
      if (error) {
        console.error("Erro ao publicar mensagem:", error);
      } else {
        console.log("Mensagem publicada com sucesso");
      }
    });
  }
}
