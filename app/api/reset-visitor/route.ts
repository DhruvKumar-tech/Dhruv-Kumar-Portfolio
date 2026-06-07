import { redis } from "@/lib/redis";
import { NextResponse } from "next/server";

export async function GET() {
  await redis.set("analytics:visitors", 2);

  return NextResponse.json({
    success: true,
    visitors: 2,
  });
}