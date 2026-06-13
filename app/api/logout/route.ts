import { NextResponse } from "next/server";

export async function GET() {
  const response = NextResponse.redirect(new URL("/", process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"));

  response.cookies.set("admin", "", {
    httpOnly: true,
    expires: new Date(0),
    path: "/",
  });

  return response;
}