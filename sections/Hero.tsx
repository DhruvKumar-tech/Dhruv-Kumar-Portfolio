"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ResumeModal from "@/components/ResumeModal";

export default function Hero() {
    const [isResumeOpen, setIsResumeOpen] = useState(false);
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="mb-10 flex h-32 w-32 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-4xl font-bold text-zinc-300 shadow-2xl">
    DK
  </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6 rounded-full border border-zinc-700 bg-zinc-900 px-5 py-2 text-sm text-zinc-300"
      >
        Building Intelligent Analytics Systems
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl text-5xl font-black leading-tight tracking-tight md:text-7xl"
      >
        Dhruv Kumar
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl"
      >
        Aspiring Data Analyst specializing in Machine Learning,
        NLP systems, dashboards, and AI-powered analytics applications.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-10 flex gap-4"
      >
        <button className="rounded-2xl bg-white px-6 py-3 font-semibold text-black transition hover:scale-105">
          View Projects
        </button>

        <button
          onClick={() => setIsResumeOpen(true)}
          className="rounded-2xl border border-zinc-700 px-6 py-3 font-semibold transition hover:bg-zinc-900"
        >
          Preview Resume
        </button>
      </motion.div>
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </section>
  );
}

