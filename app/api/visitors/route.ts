import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

// CRITICAL: Tells Next.js App Router to never cache this route statically
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    // 1. Write: Increment main visitor counter atomically on every hit
    const newVisitorCount = await kv.incr('analytics:visitors');

    // 2. Read: Fetch concurrent tracking keys in parallel
    // If keys don't exist yet, we coalesce them cleanly back to 0
    const projectClicks = (await kv.get<number>('analytics:project_clicks')) || 0;
    const resumeViews = (await kv.get<number>('analytics:resume_views')) || 0;
    const liveApps = (await kv.get<number>('analytics:live_apps')) || 2; 

    return NextResponse.json({
      visitors: Number(newVisitorCount),
      projectClicks: Number(projectClicks),
      resumeViews: Number(resumeViews),
      liveApps: Number(liveApps),
    });
  } catch (error) {
    console.error('Vercel KV Live Ingestion Pipeline Failure:', error);
    return NextResponse.json(
      { visitors: '--', projectClicks: 0, resumeViews: 0, liveApps: 2, error: 'Database timeout' },
      { status: 500 }
    );
  }
}
