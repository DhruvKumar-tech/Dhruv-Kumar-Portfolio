"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";


export default function GithubStats() {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    fetch("/api/github")
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);
  return (

    <section className="px-6 py-28">

      <div className="mx-auto max-w-7xl">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >

          <h2 className="text-5xl font-black tracking-tight">
            GitHub Analytics
          </h2>

          <p className="mt-6 text-lg text-zinc-400">
            Live development activity, repositories, and technical contributions.
          </p>

        </motion.div>
        <div className="mb-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 text-center">
            <h3 className="text-sm text-zinc-400">
              Portfolio Focus
            </h3>
            <p className="mt-2 text-3xl font-black">
              Data Analytics
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 text-center">
            <h3 className="text-sm text-zinc-400">
              Core Stack
            </h3>
            <p className="mt-2 text-3xl font-black">
              Python
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 text-center">
            <h3 className="text-sm text-zinc-400">
              BI Tool
            </h3>
            <p className="mt-2 text-3xl font-black">
              Power BI
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 text-center">
            <h3 className="text-sm text-zinc-400">
              ML Focus
            </h3>
            <p className="mt-2 text-3xl font-black">
              NLP
            </p>
          </div>

        </div>


        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            mt-10
            rounded-3xl
            border
            border-zinc-800
            bg-zinc-900/70
            p-8
            shadow-2xl
            backdrop-blur
          "
        >

          <h3 className="mb-8 text-center text-3xl font-bold">
            Contribution Analytics
          </h3>

          <div className="grid lg:grid-cols-2 gap-8 items-center">

            {/* Activity Graph */}

            <div>

              <h4 className="mb-4 text-center text-lg font-semibold">
                Activity Graph
              </h4>

              <img
                src="https://github-readme-activity-graph.vercel.app/graph?username=DhruvKumar-tech&theme=tokyo-night&hide_border=true&bg_color=00000000"
                alt="Activity Graph"
                className="w-full rounded-xl"
              />

            </div>

            {/* Contribution Calendar */}

            <div>

              <h4 className="mb-4 text-center text-lg font-semibold">
                Contribution Calendar
              </h4>

              <img
                src="https://ghchart.rshah.org/DhruvKumar-tech"
                alt="Contribution Calendar"
                className="w-full rounded-xl bg-white p-2"
              />

            </div>

          </div>

        </motion.div>
          {/* LATEST REPOSITORIES */}
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
           viewport={{ once: true }}
          className="mt-10"
          >
            <h3 className="mb-8 text-center text-3xl font-bold">
              Repository Explorer
            </h3>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 shadow-2xl backdrop-blur"
            >
              <div className="h-[500px] overflow-y-auto space-y-4 scrollbar-hide">
                <div className="grid md:grid-cols-2 gap-4">
                  {repos.map((repo:any) => (

                    <a
                      key={repo.id}
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-2xl border border-zinc-800 bg-zinc-950/50 p-5 transition hover:border-cyan-500"
                    >

                      <div className="flex items-center justify-between">

                        <h4 className="font-bold text-lg">
                          {repo.name}
                        </h4>

                        <span className="text-xs text-zinc-500">
                          {new Date(repo.updated_at).toLocaleDateString()}
                        </span>

                      </div>

                      <p className="mt-2 text-sm text-zinc-400">
                        {repo.description || "No description"}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">

                        <span className="rounded-lg border border-zinc-700 px-2 py-1 text-xs">
                          {repo.language || "N/A"}
                        </span>

                        <span className="rounded-lg border border-zinc-700 px-2 py-1 text-xs">
                          ⭐ {repo.stargazers_count}
                        </span>

                        <span className="rounded-lg border border-zinc-700 px-2 py-1 text-xs">
                          🍴 {repo.forks_count}
                        </span>

                      </div>

                    </a>

                  ))}

                </div>
              </div>
            </motion.div>
          </motion.div>
      </div>
    </section>
  );
}