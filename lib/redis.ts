import Redis from "ioredis";

export const redis = new Redis(process.env.REDIS_URL!, {
  maxRetriesPerRequest: 1,
  connectTimeout: 5000,
});

redis.on("connect", () => {
  console.log("✅ Redis Connected");
});

redis.on("error", (err) => {
  console.error("❌ Redis Error:", err);
});