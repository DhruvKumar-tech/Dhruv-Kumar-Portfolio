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
      999
    );

  const recentVisitors =
    await Promise.all(
      history.map(async (item) => {
        const visitor =
          JSON.parse(item);

        const feedback =
          await redis.get(
            `feedback:${visitor.visitorId}`
          );

        return {
          ...visitor,
          feedback: feedback
            ? JSON.parse(
                feedback as string
              )
            : null,
        };
      })
    );

  return NextResponse.json({
    uniqueVisitors,
    visitors,
    recentVisitors,
  });
}