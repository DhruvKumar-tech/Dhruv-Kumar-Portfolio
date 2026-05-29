"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "2024",
    title: "Started Data Analytics Journey",
    description:
      "Began working with Python, SQL, Excel, and data visualization tools to build analytical foundations.",
  },

  {
    year: "2025",
    title: "Built Machine Learning Projects",
    description:
      "Developed NLP systems, recommendation engines, predictive analytics applications, and deployed AI projects.",
  },

  {
    year: "2025",
    title: "Deployed Live AI Applications",
    description:
      "Created production-ready Streamlit applications with interactive dashboards and real-time predictions.",
  },

  {
    year: "2026",
    title: "Building Intelligent Analytics Systems",
    description:
      "Focused on scalable AI systems, business intelligence solutions, automation, and recruiter-facing analytics platforms.",
  },
];

export default function Timeline() {

  return (

    <section className="relative px-6 py-28">

      <div className="mx-auto max-w-6xl">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >

          <h2 className="text-5xl font-black tracking-tight">
            Experience Timeline
          </h2>

          <p className="mt-6 text-lg text-zinc-400">
            My journey building analytics, AI systems, and intelligent applications.
          </p>

        </motion.div>

        {/* TIMELINE */}
        <div className="relative">

          {/* CENTER LINE */}
          <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-zinc-800 md:block" />

          <div className="relative overflow-x-auto scrollbar-hide">

  {/* CONNECTING LINE */}
  <div className="absolute left-0 top-1/2 h-[2px] w-[2000px] -translate-y-1/2 bg-zinc-800" />

  <div className="relative flex gap-16 pb-10 pt-10">

    {timeline.map((item, index) => (

      <motion.div
        key={index}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        viewport={{ once: true }}
        className="relative min-w-[350px]"
      >

        {/* DOT */}
        <div className="absolute -top-2 left-1/2 z-20 h-6 w-6 -translate-x-1/2 rounded-full border-4 border-black bg-white shadow-lg shadow-white/30" />

        {/* CARD */}
        <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 shadow-2xl backdrop-blur">

          <span className="inline-block rounded-2xl border border-zinc-700 px-4 py-2 text-sm text-zinc-400">
            {item.year}
          </span>

          <h3 className="mt-6 text-2xl font-bold">
            {item.title}
          </h3>

          <p className="mt-5 leading-relaxed text-zinc-400">
            {item.description}
          </p>

        </div>

      </motion.div>

    ))}

  </div>
</div>
        </div>
      </div>
    </section>
  );
}