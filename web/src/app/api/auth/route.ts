// pages/api/auth/status.ts
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  // Acessa o cookie
  const cookieStore = await cookies();
  const token = cookieStore.get("auth-token");

  // Verifica se o cookie existe
  if (token) {
    return NextResponse.json({ isAuthenticated: true }, { status: 200 });
  } else {
    return NextResponse.json({ isAuthenticated: false }, { status: 401 });
  }
}
