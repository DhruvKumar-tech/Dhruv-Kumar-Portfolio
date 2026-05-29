"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Movie Recommendation System",
    description:
      "AI-powered recommendation engine using NLP, Word2Vec embeddings, semantic filtering, and REST APIs.",
    tech: ["Python", "NLP", "Word2Vec", "Streamlit"],
    github: "https://github.com/DhruvKumar-tech/Movie-Recommendation-System",
    live: "https://find-your-next-movie-kgdljnue7avhdmacwlirbs.streamlit.app/",
    image: "/screenshots/movie.png",
  },

  {
    title: "Emotion Classification System",
    description:
      "Multi-class emotion detection platform using TF-IDF, BERT, XGBoost, and NLP pipelines.",
    tech: ["BERT", "XGBoost", "NLP"],
    status: "Live AI Model",
    github: "https://github.com/DhruvKumar-tech/Emotion-Classification",
    live: "https://emotion-classification-zxymqlfgimh4p7jq2uinja.streamlit.app/",
    image: "/screenshots/emotion.png",
  },

  {
    title: "Emergency Triage Predictor",
    description:
      "Healthcare AI system designed to predict patient urgency levels and assist emergency workflows.",
    tech: ["LightGBM", "Healthcare AI", "Streamlit"],
    status: "Dashboard Ready",
    image: "/screenshots/triage.png",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-zinc-900/40 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl font-bold">
            Featured Projects
          </h2>

          <p className="mt-5 text-lg text-zinc-400">
            Real-world analytics and AI applications.
          </p>
        </motion.div>

        <div className="flex gap-8 overflow-x-auto pb-6 scrollbar-hide">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="min-w-[420px] rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 shadow-2xl backdrop-blur transition duration-500 hover:-translate-y-3 hover:border-zinc-600"
            >
              <div className="overflow-hidden rounded-3xl">

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-60 w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="mb-4 inline-flex rounded-full bg-zinc-800 px-4 py-1 text-sm text-zinc-300">
                {project.status}
              </div>

              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>

              <p className="mt-5 leading-relaxed text-zinc-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="rounded-xl border border-zinc-700 px-3 py-1 text-sm text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex gap-4">
                <button className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black transition hover:scale-105">
                  Live Demo
                </button>

                <button className="rounded-xl border border-zinc-700 px-4 py-2 text-sm font-semibold transition hover:bg-zinc-900">
                  GitHub
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}