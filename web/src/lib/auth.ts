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
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/sign-in`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          credential: credentials,
          password: password,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw errorData;
    }

    console.log("Sign-in response:", response);
    const data = await response.json();
    console.log("Sign-in data:", data);
    const cookieStore = await cookies();

    console.log("Setting auth-token cookie with value:", data.token);
    cookieStore.set("auth-token", data.token);

    return data.token;
  } catch (err) {
    throw err;
  }
}
