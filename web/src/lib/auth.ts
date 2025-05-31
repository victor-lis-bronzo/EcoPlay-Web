"use server";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { AuthSession } from "@/@types/auth";
import api from "./axios";

export async function getServerCookie(name: string) {
  "use server";
  const cookieStore = await cookies();
  const cookie = cookieStore.get(name);
  return cookie ? cookie.value : null;
}

// : Promise<AuthSession | null>
export async function getAuthTokenPayload() {
  "use server";
  const cookieStore = await cookies();
  const token = cookieStore.get("auth-token");

  if (!token) return null;

  const secret = new TextEncoder().encode(process.env.SECRET_JWT_KEY);
  const { payload } = await jwtVerify(token.value, secret);

  return payload as AuthSession;
}

export async function getAuthToken() {
  "use server";
  const cookieStore = await cookies();
  const token = cookieStore.get("auth-token");

  if (!token) return null;

  return token.value;
}


export async function signIn(credentials: string, password: string) {
  try {
    const response = await api.post("/auth/sign-in", {
      credential: credentials,
      password: password,
    });
    return response.data;
  } catch (err: any) {
    throw err.response.data;
  }
}
