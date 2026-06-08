import { redis } from "@/lib/redis";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Visitor Data:", body);

    console.log("Processing Live Tracking Event:", body.event);

    if (body.event === "Visitor") {
      await redis.incr("analytics:visitors");
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
