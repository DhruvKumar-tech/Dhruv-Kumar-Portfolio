import { kv } from '@vercel/kv';
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Check payload attributes dynamically
    if (body.event === "Resume Opened") {
      await kv.incr("analytics:resume_views");
    } else if (body.event === "Project Clicked") {
      await kv.incr("analytics:project_clicks");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("KV Event Logging Transaction Failed:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
