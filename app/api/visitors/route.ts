import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // 1. Atomically increment the main visitor counter (Write operation)
    const newVisitorCount = await kv.incr('analytics:visitors');

    // 2. Fetch the current live values for the rest of the metrics (Read operations)
    // If a key doesn't exist yet, Redis returns null, so we use a fallback of 0
    const projectClicks = (await kv.get<number>('analytics:project_clicks')) || 0;
    const resumeViews = (await kv.get<number>('analytics:resume_views')) || 0;
    const liveApps = (await kv.get<number>('analytics:live_apps')) || 2; // Default to your 2 live apps

    return NextResponse.json({
      visitors: newVisitorCount,
      projectClicks: projectClicks,
      resumeViews: resumeViews,
      liveApps: liveApps,
    });
  } catch (error) {
    console.error('Vercel KV Multi-Fetch Transaction Error:', error);
    return NextResponse.json(
      { visitors: '--', projectClicks: 0, resumeViews: 0, liveApps: 0, error: 'Database failed' },
      { status: 500 }
    );
  }
}
