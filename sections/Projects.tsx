"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Movie Recommendation System",
    description:
      "AI-powered recommendation engine using NLP, Word2Vec embeddings, semantic filtering, and REST APIs.",
    tech: ["Python", "NLP", "Word2Vec", "Streamlit"],
    status: "Live AI Model",
    github: "https://github.com/DhruvKumar-tech/Movie-Recommendation-System",
    live: "https://find-your-next-movie-kgdljnue7avhdmacwlirbs.streamlit.app/",
    image: "/screenshots/movie.png",
    videoSrc: "/videos/movie.mp4", // Path to your movie clip
    isStreamlit: true
  },
  {
    title: "Emotion Classification System",
    description:
      "Multi-class emotion detection platform using TF-IDF, BERT, XGBoost, and NLP pipelines.",
    tech: ["BERT", "XGBoost", "NLP", "Streamlit"],
    status: "Live AI Model",
    github: "https://github.com/DhruvKumar-tech/Emotion-Classification",
    live: "https://emotion-classification-zxymqlfgimh4p7jq2uinja.streamlit.app/",
    image: "/screenshots/emotion.png",
    videoSrc: "", // Add path here later if needed
    isStreamlit: true
  },
  {
    title: "Emergency Triage Predictor",
    description:
      "Healthcare AI system designed to predict patient urgency levels and assist emergency workflows.",
    tech: ["LightGBM", "Healthcare AI", "Streamlit"],
    status: "Production Ready",
    github: "https://github.com/DhruvKumar-tech", 
    live: "", 
    image: "/screenshots/triage.png",
    videoSrc: "", // Add path here later if needed
    isStreamlit: true
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

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 shadow-2xl backdrop-blur transition duration-500 hover:-translate-y-2 hover:border-zinc-600 flex flex-col justify-between"
            >
              <div>
                {/* Media Wrapper: Renders video if videoSrc exists, otherwise falls back to static image */}
                <div className="relative h-48 w-full overflow-hidden bg-zinc-950/40 border border-zinc-800/80 rounded-2xl mb-6 flex items-center justify-center px-8 py-4">
                  {project.videoSrc ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      className="h-full w-full object-contain rounded-xl shadow-lg"
                    >
                      <source src={project.videoSrc} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover rounded-xl transition duration-500 hover:scale-105"
                    />
                  )}
                  
                  {project.videoSrc && (
                    <span className="absolute top-2 left-2 text-[8px] font-bold tracking-wider text-emerald-400 uppercase bg-zinc-950/90 border border-emerald-500/20 px-1.5 py-0.5 rounded backdrop-blur">
                      ● Preview
                    </span>
                  )}
                </div>

                <div className="mb-4 inline-flex rounded-full bg-zinc-800 px-4 py-1 text-xs font-medium text-zinc-300">
                  {project.status}
                </div>

                <h3 className="text-2xl font-bold text-zinc-100">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="rounded-xl border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-xs text-zinc-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                {/* Conditional Free-Tier Wake-Up Alert */}
                {project.isStreamlit && project.live && (
                  <p className="mt-6 text-[11px] text-amber-500/90 leading-tight bg-amber-500/5 border border-amber-500/10 p-2.5 rounded-xl">
                    ⚠️ App sleeps when inactive. May take up to 60 seconds to initialize on first load.
                  </p>
                )}

                {/* Direct Navigation Links */}
                <div className="mt-6 flex gap-3">
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 rounded-xl bg-white py-2.5 text-center text-sm font-semibold text-black transition hover:bg-zinc-200"
                    >
                      Live Demo
                    </a>
                  ) : (
                    <button
                      disabled
                      className="flex-1 rounded-xl bg-zinc-800/40 py-2.5 text-center text-sm font-semibold text-zinc-600 cursor-not-allowed"
                    >
                      Local Run Only
                    </button>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 rounded-xl border border-zinc-700 bg-zinc-900 py-2.5 text-center text-sm font-semibold text-zinc-300 transition hover:bg-zinc-800"
                    >
                      GitHub Source
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
