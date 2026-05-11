import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const { password } = body;
  const ADMIN_SECRET = process.env.ADMIN_SECRET || "integral_admin_2024";

  if (!password || typeof password !== "string") {
    return NextResponse.json({ success: false, error: "MISSING_CREDENTIALS" }, { status: 400 });
  }

  if (password === ADMIN_SECRET) {
    const response = NextResponse.json({ success: true });
    response.cookies.set("integral_admin_auth", ADMIN_SECRET, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });
    return response;
  }

  return NextResponse.json({ success: false, error: "ACCESS_DENIED" }, { status: 401 });
}
