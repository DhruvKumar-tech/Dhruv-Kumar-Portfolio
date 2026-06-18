import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  if (
    body.token !==
    process.env.ADMIN_TOKEN
  ) {
    return NextResponse.json(
      { success: false },
      { status: 401 }
    );
  }

  const response =
    NextResponse.json({
      success: true,
    });

  response.cookies.set(
    "admin",
    process.env.ADMIN_TOKEN!,
    {
      httpOnly: true,
      secure:
      process.env.NODE_ENV ===
      "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 12, // 12 hours
    }
  );
  
  return response;
}