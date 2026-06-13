import { redis } from "@/lib/redis";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // 👇 Get all visitors (you must store them first if not already)
    const visitors =
      (await redis.lrange("analytics:visitor_list", 0, -1)) || [];

    const feedbacks =
      (await redis.lrange("portfolio:feedback", 0, -1)) || [];

    const parsedVisitors = visitors.map((v) => JSON.parse(v));
    const parsedFeedback = feedbacks.map((f) => JSON.parse(f));

    // 🔗 Merge on visitorId
    const merged = parsedVisitors.map((visitor) => {
      const fb = parsedFeedback.find(
        (f) => f.visitorId === visitor.visitorId
      );

      return {
        visitorId: visitor.visitorId,
        country: visitor.country,
        city: visitor.city,
        visitTime: visitor.visitTime,
        name: fb?.name || "",
        message: fb?.message || "",
        feedbackDate: fb?.createdAt || "",
      };
    });

    return NextResponse.json(merged);
  } catch (err) {
    console.error(err);
    return NextResponse.json([]);
  }
}