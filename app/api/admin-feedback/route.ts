import { redis } from "@/lib/redis";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const auth =
    req.headers.get("authorization");

  if (
    auth !== `Bearer ${process.env.ADMIN_TOKEN}`
  ) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const feedback =
    await redis.lrange(
      "portfolio:feedback",
      0,
      49
    );

  return NextResponse.json({
    feedback: feedback.map((x) =>
      JSON.parse(x)
    ),
  });
}