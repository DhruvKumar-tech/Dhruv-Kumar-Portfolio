import { NextResponse } from "next/server";

export async function GET() {
  const url = process.env.REDIS_URL || "";

  return NextResponse.json({
    exists: !!url,
    prefix: url.split(":")[0],
    startsWithRedis: url.startsWith("redis://"),
    startsWithRediss: url.startsWith("rediss://"),
    startsWithHttps: url.startsWith("https://"),
  });
}