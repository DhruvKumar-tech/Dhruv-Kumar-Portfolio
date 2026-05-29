"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ResumeModal from "@/components/ResumeModal";
import {
  Database,
  Brain,
  BarChart3,
  Sparkles,
} from "lucide-react";

export default function Hero() {

  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const stats = [
    {
      icon: <Database size={28} />,
      value: "12+",
      label: "Analytics Projects",
    },

    {
      icon: <Brain size={28} />,
      value: "5+",
      label: "AI Applications",
    },

    {
      icon: <BarChart3 size={28} />,
      value: "7957",
      label: "Kaggle Rank",
    },
  ];

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-zinc-700/20 blur-3xl" />

        <div className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-white/5 blur-3xl" />

      </div>

      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">

        {/* LEFT CONTENT */}
        <div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-zinc-700 bg-zinc-900 px-5 py-2 text-sm text-zinc-300"
          >

            <Sparkles size={16} />

            Building Intelligent Analytics Systems

          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl"
          >

            Dhruv Kumar

          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl"
          >

            Data Analyst focused on AI systems, Machine Learning,
            NLP applications, dashboards, and business analytics solutions.

          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-10 flex flex-wrap gap-4"
          >

            <a
              href="#projects"
              className="rounded-2xl bg-white px-7 py-4 font-semibold text-black transition hover:scale-105"
            >
              View Projects
            </a>

            <button
              onClick={() => setIsResumeOpen(true)}
              className="rounded-2xl border border-zinc-700 px-7 py-4 font-semibold transition hover:bg-zinc-900"
            >
              Preview Resume
            </button>

          </motion.div>

          {/* KPI CARDS */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-16 grid gap-5 sm:grid-cols-3"
          >

            {stats.map((item, index) => (

              <div
                key={index}
                className="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-6 backdrop-blur"
              >

                <div className="mb-5 text-zinc-300">
                  {item.icon}
                </div>

                <h3 className="text-3xl font-black">
                  {item.value}
                </h3>

                <p className="mt-2 text-sm text-zinc-400">
                  {item.label}
                </p>

              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex items-center justify-center"
        >

          {/* MAIN CARD */}
          <div className="relative h-[500px] w-[500px] rounded-[40px] border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-8 shadow-2xl">

            {/* TOP BAR */}
            <div className="mb-10 flex items-center justify-between">

              <div>
                <p className="text-sm text-zinc-500">
                  AI Analytics System
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  Live Intelligence Dashboard
                </h3>
              </div>

              <div className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-black">
                ACTIVE
              </div>
            </div>

            {/* ANALYTICS BLOCKS */}
            <div className="space-y-6">

              <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-sm text-zinc-500">
                      ML Systems
                    </p>

                    <h4 className="mt-2 text-3xl font-black">
                      5+
                    </h4>
                  </div>

                  <div className="h-16 w-16 rounded-2xl bg-zinc-800" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">

                <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
                  <p className="text-sm text-zinc-500">
                    Kaggle
                  </p>

                  <h4 className="mt-2 text-3xl font-black">
                    7957
                  </h4>
                </div>

                <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
                  <p className="text-sm text-zinc-500">
                    SQL + NLP
                  </p>

                  <h4 className="mt-2 text-3xl font-black">
                    Advanced
                  </h4>
                </div>

              </div>

              <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">

                <p className="text-sm text-zinc-500">
                  Current Focus
                </p>

                <h4 className="mt-4 text-xl font-bold leading-relaxed">
                  Building production-grade AI analytics systems and interactive business intelligence applications.
                </h4>

              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

    </section>
  );
}