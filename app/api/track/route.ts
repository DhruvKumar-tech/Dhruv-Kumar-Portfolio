import { redis } from "@/lib/redis";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const country =
      req.headers.get("x-vercel-ip-country") ||
      "Unknown";

    const city =
      req.headers.get("x-vercel-ip-city") ||
      "Unknown";

    const visitedAt =
      new Date().toISOString();
    console.log("Visitor Data:", body);

    console.log("Processing Live Tracking Event:", body.event);

    if (body.event === "Visitor") {

      const visitorKey =
        `visitor:${body.visitorId}`;

      const existing =
        await redis.get(visitorKey);

      if (!existing) {

        await redis.incr(
          "analytics:unique_visitors"
        );

        await redis.set(
          visitorKey,
          JSON.stringify({
            visitorId: body.visitorId,
            country,
            city,
            firstSeen: visitedAt,
            lastSeen: visitedAt,
            visitCount: 1,
          })
        );
        await redis.lpush(
          "analytics:visitor_history",
          JSON.stringify({
            visitorId: body.visitorId,
            country,
            city,
            visitedAt,
          })
        );

        await redis.ltrim(
          "analytics:visitor_history",
          0,
          499
        );

      } else {

        const data =
          JSON.parse(existing as string);

        data.lastSeen = visitedAt;
        data.country = country;
        data.city = city;
        data.visitCount += 1;

        await redis.lpush(
          "analytics:visitor_history",
          JSON.stringify({
            visitorId: body.visitorId,
            country,
            city,
            visitedAt,
          })
        );

        await redis.ltrim(
          "analytics:visitor_history",
          0,
          499
        );

        await redis.set(
          visitorKey,
          JSON.stringify(data)
        );
      }
    }
    else if (body.event === "Resume Opened") {
      await redis.incr("analytics:resume_views");
    }
    else if (body.event === "Project Clicked") {
      await redis.incr("analytics:project_clicks");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("KV Event Logging Transaction Failed:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
