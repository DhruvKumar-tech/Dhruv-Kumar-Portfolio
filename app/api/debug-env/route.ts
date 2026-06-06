// app/api/debug-env/route.ts

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    REDIS_URL: !!process.env.REDIS_URL,
    KV_URL: !!process.env.KV_URL,
    KV_REST_API_URL: !!process.env.KV_REST_API_URL,
    KV_REST_API_TOKEN: !!process.env.KV_REST_API_TOKEN,
  });
}