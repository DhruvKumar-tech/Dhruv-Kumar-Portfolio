import { redis } from "@/lib/redis";
import { NextResponse } from "next/server";

export async function GET() {
  const data =
    await redis.lrange(
      "analytics:visitor_history",
      0,
      9
    );

  return NextResponse.json(data);
}