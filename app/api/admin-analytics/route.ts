import { redis } from "@/lib/redis";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const token = searchParams.get("token");

  if (
    token !== process.env.ADMIN_TOKEN
  ) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const uniqueVisitors =
    Number(
      await redis.get(
        "analytics:unique_visitors"
      )
    ) || 0;

  const visitors =
    Number(
      await redis.get(
        "analytics:visitors"
      )
    ) || 0;

  const history =
    await redis.lrange(
      "analytics:visitor_history",
      0,
      19
    );

  return NextResponse.json({
    uniqueVisitors,
    visitors,
    recentVisitors: history.map(
      (x) => JSON.parse(x)
    ),
  });
}