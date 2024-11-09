import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define routes that require authentication
const protectedRoutes = ["/profile", "/level","/learning"];
export function middleware(request: NextRequest) {
  const token = request.cookies.get("jwtToken");

  // If the request is for a protected route and there is no token, redirect to the login page
  if (
    protectedRoutes.some((route) =>
      request.nextUrl.pathname.startsWith(route)
    ) &&
    !token
  ) {
    const loginUrl = new URL("/signin", request.url);
    return NextResponse.redirect(loginUrl);
  }

  // Allow the request if it has a token or is not a protected route
  return NextResponse.next();
}

// Specify routes this middleware should apply to
export const config = {
  matcher: ["/((?!signin|signup|public).*)"],
};
