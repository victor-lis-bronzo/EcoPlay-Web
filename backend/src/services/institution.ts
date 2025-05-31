import prisma from "../config/db";
import { ResourceNotFoundError } from "../errors/resource-not-found-error";
import type { CreateInstitutionType } from "@/schemas/institution/create";
import type { UpdateInstitutionType } from "@/schemas/institution/update";

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export class InstitutionService {
  public static async getAllInstitutions() {
    return await prisma.institution.findMany();
  }

  public static async getInstitutionById(id: number) {
    const institution = await prisma.institution.findUnique({
      where: { institutionId: id },
    });

    if (!institution) {
      throw new ResourceNotFoundError();
    }

    return institution;
  }

  public static async createInstitution(data: CreateInstitutionType) {
    const institution = await prisma.institution.create({
      data: {
        ...data,
        status: true,
      },
    });
    return institution;
  }

  public static async updateInstitution(
    id: number,
    data: UpdateInstitutionType
  ) {
    const institution = await prisma.institution.findUnique({
      where: { institutionId: id },
    });

    if (!institution) {
      throw new ResourceNotFoundError();
    }

    const updatedInstitution = await prisma.institution.update({
      where: { institutionId: id },
      data: {
        ...data,
        updatedAt: new Date(),
      },
    });

    return updatedInstitution;
  }

  public static async deleteInstitution(id: number) {
    const institution = await prisma.institution.findUnique({
      where: { institutionId: id },
    });

    if (!institution) {
      throw new ResourceNotFoundError();
    }

    const deletedInstitution = await prisma.institution.delete({
      where: { institutionId: id },
    });

    return deletedInstitution;
  }
}
