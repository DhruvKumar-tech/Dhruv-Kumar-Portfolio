"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* Full Screen Animated Gradient */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          background:
            "linear-gradient(270deg, #3b82f6, #6366f1, #a855f7, #f97316)",
          backgroundSize: "400% 400%",
        }}
        className="absolute inset-0 opacity-60"
      />

      {/* Optional Dark Overlay */}
      <div className="absolute inset-0 bg-[#050816]/30" />

    </div>
  );
}