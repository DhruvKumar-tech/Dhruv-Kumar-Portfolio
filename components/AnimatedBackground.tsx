"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 150, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 -top-40 h-[700px] w-[700px]
        rounded-full bg-blue-600/20 blur-[160px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -150, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-0 top-0 h-[700px] w-[700px]
        rounded-full bg-purple-600/20 blur-[160px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          x: [0, 100, 0],
          y: [0, 150, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-1/3 h-[700px] w-[700px]
        rounded-full bg-emerald-500/15 blur-[160px]"
      />

    </div>
  );
}