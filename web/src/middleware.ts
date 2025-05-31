import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

export const config = {
  matcher: "/((?!.*\\.|_next/static|_next/image|favicon.ico|api).*)",
};

export const publicRoutes = ["/", "/login"];
const adminRoutes = ["/operators"];

const secretKey = new TextEncoder().encode(process.env.SECRET_JWT_KEY!);

async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, secretKey);
    return payload;
  } catch (error) {
    return null;
  }
}

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  const token = req.cookies.get("auth-token")?.value;
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.nextUrl.origin));
  }

  const user = await verifyToken(token);
  if (!user) {
    return NextResponse.redirect(new URL("/login", req.nextUrl.origin));
  }

  if (
    adminRoutes.some((route) => pathname.startsWith(route)) &&
    user.type !== "ADMIN"
  ) {
    return NextResponse.redirect(new URL("/", req.nextUrl.origin));
  }

  return NextResponse.next();
}
