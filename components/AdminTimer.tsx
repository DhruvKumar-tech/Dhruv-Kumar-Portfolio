"use client";

import { useEffect, useState } from "react";

export default function AdminTimer() {
  const [timeLeft, setTimeLeft] = useState(1800); // 30 min

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          document.cookie =
            "admin=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
          window.location.reload();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="fixed top-6 right-20 text-sm text-gray-400">
      ⏱ {minutes}:{seconds.toString().padStart(2, "0")}
    </div>
  );
}