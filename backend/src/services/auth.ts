import { env } from "@/config/env";
import prisma from "@/config/prisma";
import { InvalidCredentials } from "@/errors/invalid-credentials";
import { OperatorType } from "@/schemas/operator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class AuthService {
  static async hashPassword(password: string) {
    return await bcrypt.hash(password, 10);
  }

  static async verifyUser(credential: string, password: string) {
    const operator = await prisma.operator.findFirst({
      where: {
        OR: [{ username: credential }],
      },
    });

    if (operator && (await bcrypt.compare(password, operator.password))) {
      const { password, ...result } = operator;
      return result;
    }

    throw new InvalidCredentials();
  }

  static async login(data: Omit<OperatorType, "password">) {
    const payload = {
      sub: data.operatorId,
      username: data.username,
      name: data.name,
    };

    return jwt.sign(payload, env.JWT_SECRET_KEY, {
      expiresIn: "12h",
    });
  }
}
