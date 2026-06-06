import { redis } from "@/lib/redis";
import { NextResponse } from 'next/server';

// CRITICAL: Tells Next.js App Router to never cache this route statically
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    // 1. Write: Increment main visitor counter atomically on every hit
    const visitors =  Number(await redis.get("analytics:visitors")) || 0;

    // 2. Read: Fetch concurrent tracking keys in parallel
    // If keys don't exist yet, we coalesce them cleanly back to 0
    const projectClicks = Number(await redis.get('analytics:project_clicks')) || 0;
    const resumeViews = Number(await redis.get('analytics:resume_views')) || 0;
    const liveApps = Number(await redis.get('analytics:live_apps')) || 0; 

    return NextResponse.json({
      visitors,
      projectClicks,
      resumeViews,
      liveApps,
    });
  } catch (error) {
    console.error("VISITOR API ERROR:", error);

    return NextResponse.json(
      {
        visitors: "--",
        projectClicks: 0,
        resumeViews: 0,
        liveApps: 2,
        error:
          error instanceof Error
            ? error.message
            : String(error),
      },
      { status: 500 }
    );
  }
}
