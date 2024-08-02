import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { decrypt, verifySession } from "./lib/session";

export async function middleware(req) {
  //1. Check if it is protected route
  const protectedRoutes = ["/protected"];
  const currentRoute = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(currentRoute);
  if (!isProtectedRoute) {
    return NextResponse.next();
  }

  //2. Check if user is authenticated
  const cookie = cookies().get("session")?.value;
  const user = await decrypt(cookie);

  //3. Redirect unAuth
  if (!user?.id) return NextResponse.redirect(new URL("/signup", req.nextUrl));

  //4. Contiue the flow(next)
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
