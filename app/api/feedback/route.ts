import { z } from "zod";
import { redis } from "@/lib/redis";
import { NextResponse } from "next/server";

const FeedbackSchema = z.object({
  name: z.string().min(2).max(50),
  message: z.string().min(5).max(500),
});

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get("x-forwarded-for") ||
      "unknown";

    const rateKey =
      `feedback-rate:${ip}`;

    const current =
      Number(await redis.get(rateKey)) || 0;

    if (current >= 5) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Too many submissions. Try again later.",
        },
        { status: 429 }
      );
    }

    await redis.incr(rateKey);
    await redis.expire(rateKey, 3600);

    const body = await req.json();
    
    const turnstileToken = body.turnstileToken;

    if (process.env.NODE_ENV !== "development") {
      if (!turnstileToken) {
        return NextResponse.json(
          {
            success: false,
            error: "Verification required",
          },
          { status: 400 }
        );
      }

      const verification = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            secret:
              process.env.TURNSTILE_SECRET_KEY!,
            response: turnstileToken,
          }),
        }
      );

      const verificationResult =
        await verification.json();

      if (!verificationResult.success) {
        return NextResponse.json(
          {
            success: false,
            error: "Verification failed",
          },
          { status: 400 }
        );
      }
    } else {
      console.log(
        "Skipping Turnstile verification in development"
      );
    }

    const result =
      FeedbackSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid input",
        },
        { status: 400 }
      );
    }

    const message =
      result.data.message.trim();

    const spamPatterns = [
      "http://",
      "https://",
      "www.",
      ".com",
      ".xyz",
      "free money",
      "buy now",
      "crypto",
      "bitcoin",
    ];

    const isSpam =
      spamPatterns.some((pattern) =>
        message.toLowerCase().includes(pattern)
      );

    if (isSpam) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Message rejected by spam filter",
        },
        { status: 400 }
      );
    }

    const feedback = {
      id: crypto.randomUUID(),
      visitorId: body.visitorId,
      name: result.data.name.trim(),
      message,
      createdAt: new Date().toISOString(),
    };

    await redis.lpush(
      "portfolio:feedback",
      JSON.stringify(feedback)
    );

    await redis.set(
      `feedback:${feedback.visitorId}`,
      JSON.stringify(feedback)
    );

    await redis.ltrim(
      "portfolio:feedback",
      0,
      199
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