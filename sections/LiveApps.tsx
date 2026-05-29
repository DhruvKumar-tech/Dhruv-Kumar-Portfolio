"use client";

import { motion } from "framer-motion";

const apps = [
  {
    title: "Emotion Classification App",
    description:
      "Real-time NLP application for detecting emotions from text using machine learning models.",

    tech: ["NLP", "Streamlit", "Machine Learning"],

    live: "https://emotion-classification-zxymqlfgimh4p7jq2uinja.streamlit.app/",
  },

  {
    title: "Emergency Triage AI",
    description:
      "AI-powered urgency prediction system for healthcare emergency workflows.",

    tech: ["Healthcare AI", "LightGBM", "Streamlit"],

    live: "https://your-streamlit-app-link.streamlit.app",
  },

  {
    title: "Movie Recommendation System",
    description:
      "Semantic recommendation engine using NLP and similarity-based ranking.",

    tech: ["Recommendation System", "NLP", "Python"],

    live: "https://find-your-next-movie-kgdljnue7avhdmacwlirbs.streamlit.app/",
  },
];

export default function LiveApps() {
  return (
    <section className="px-6 py-24">

      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >

          <h2 className="text-5xl font-bold">
            Live AI Applications
          </h2>

          <p className="mt-5 text-lg text-zinc-400">
            Production-ready AI and analytics systems deployed live.
          </p>
        </motion.div>

        <div className="flex gap-8 overflow-x-auto pb-6 scrollbar-hide">

          {apps.map((app, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="min-w-[420px] rounded-3xl border border-zinc-800 bg-zinc-900 p-7 transition hover:-translate-y-2 hover:border-zinc-600"
            >

              <div className="mb-6 flex h-52 items-center justify-center rounded-2xl bg-gradient-to-br from-zinc-800 to-black text-zinc-500">
                Live Application Preview
              </div>

              <h3 className="text-2xl font-bold">
                {app.title}
              </h3>

              <p className="mt-5 leading-relaxed text-zinc-400">
                {app.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {app.tech.map((item, i) => (
                  <span
                    key={i}
                    className="rounded-xl border border-zinc-700 px-3 py-1 text-sm text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <a
                href={app.live}
                target="_blank"
                className="mt-8 inline-block rounded-2xl bg-white px-5 py-3 font-semibold text-black transition hover:scale-105"
              >
                Launch App
              </a>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}