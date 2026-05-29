"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-4xl text-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <h2 className="text-5xl font-bold">
            Let’s Connect
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            Open to Data Analyst, Business Intelligence,
            MIS Executive, Analytics, and AI-focused opportunities.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-5">

            <a
              href="mailto:dhruvkumar010200@gmail.com"
              className="rounded-2xl bg-white px-6 py-4 font-semibold text-black transition hover:scale-105"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/dhruv-kumar-ds048341/"
              target="_blank"
              className="rounded-2xl border border-zinc-700 px-6 py-4 font-semibold transition hover:bg-zinc-900"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/DhruvKumar-tech"
              target="_blank"
              className="rounded-2xl border border-zinc-700 px-6 py-4 font-semibold transition hover:bg-zinc-900"
            >
              GitHub
            </a>

            <a
              href="https://www.kaggle.com/dhruvkumar01"
              target="_blank"
              className="rounded-2xl border border-zinc-700 px-6 py-4 font-semibold transition hover:bg-zinc-900"
            >
              Kaggle
            </a>

          </div>
        </motion.div>
      </div>
    </section>
  );
}