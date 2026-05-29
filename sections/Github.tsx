"use client";

import { motion } from "framer-motion";

const repos = [
  {
    name: "Movie Recommendation System",
    description:
      "AI-powered recommendation system using NLP and Word2Vec.",
    tech: "Python • NLP • Streamlit",
  },

  {
    name: "Emotion Classification",
    description:
      "Emotion prediction platform using machine learning and NLP.",
    tech: "BERT • XGBoost • NLP",
  },

  {
    name: "Emergency Triage AI",
    description:
      "Healthcare AI urgency prediction system.",
    tech: "LightGBM • Healthcare",
  },
];

export default function Github() {
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
            GitHub Projects
          </h2>

          <p className="mt-5 text-lg text-zinc-400">
            Live development portfolio and AI analytics projects.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {repos.map((repo, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-zinc-800 bg-zinc-900 p-7 transition hover:-translate-y-2 hover:border-zinc-600"
            >

              <h3 className="text-2xl font-bold">
                {repo.name}
              </h3>

              <p className="mt-5 leading-relaxed text-zinc-400">
                {repo.description}
              </p>

              <div className="mt-6 text-sm text-zinc-500">
                {repo.tech}
              </div>

              <a
                href="https://github.com/DhruvKumar-tech"
                target="_blank"
                className="mt-8 inline-block rounded-2xl bg-white px-5 py-3 font-semibold text-black transition hover:scale-105"
              >
                View Repository
              </a>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}