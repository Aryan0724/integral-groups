import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const ADMIN_SECRET = process.env.ADMIN_SECRET || "integral_admin_2024";
const AUTH_COOKIE = "integral_admin_auth";

/**
 * Next.js 16 Proxy (replaces middleware.ts)
 * Protects all /admin routes, redirecting unauthenticated users to /admin/login.
 * The /admin/login page and all /api/* routes are explicitly excluded.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow API routes through — never block them
  if (pathname.startsWith("/api/")) {
    return NextResponse.next();
  }

  // Protect all /admin routes except /admin/login
  if (pathname.startsWith("/admin") && !pathname.startsWith("/admin/login")) {
    const authCookie = request.cookies.get(AUTH_COOKIE);

    if (!authCookie || authCookie.value !== ADMIN_SECRET) {
      const loginUrl = new URL("/admin/login", request.url);
      loginUrl.searchParams.set("from", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  // Match /admin and /admin/* but explicitly NOT /api/* (handled above for safety)
  matcher: ["/admin", "/admin/:path*"],
};
