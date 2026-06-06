import { redis } from "@/lib/redis";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const feedbacks =
      await redis.lrange(
        "portfolio:feedback",
        0,
        9
      );

    const parsed = feedbacks.map((item) =>
      JSON.parse(item)
    );

    return NextResponse.json(parsed);
  } catch (error) {
    console.error(error);

    return NextResponse.json([]);
  }
}