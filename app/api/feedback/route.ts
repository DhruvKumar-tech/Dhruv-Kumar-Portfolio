import { redis } from "@/lib/redis";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const feedback = {
      name: body.name,
      message: body.message,
      createdAt: new Date().toISOString(),
    };

    await redis.lpush(
      "portfolio:feedback",
      JSON.stringify(feedback)
    );

    await redis.ltrim(
      "portfolio:feedback",
      0,
      49
    );

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Feedback Error:", error);

    return NextResponse.json(
      {
        success: false,
      },
      { status: 500 }
    );
  }
}