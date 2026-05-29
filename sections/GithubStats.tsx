"use client";

import { motion } from "framer-motion";

export default function GithubStats() {

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

        {/* STATS GRID */}
        <div className="grid gap-8 lg:grid-cols-2">

          {/* PROFILE STATS */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 shadow-2xl backdrop-blur"
          >

            <img
              src="https://github-readme-stats.vercel.app/api?username=DhruvKumar-tech&show_icons=true&theme=tokyonight&hide_border=true&bg_color=00000000"
              alt="GitHub Stats"
              className="w-full rounded-2xl"
            />

          </motion.div>

          {/* STREAK */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 shadow-2xl backdrop-blur"
          >

            <img
              src="https://streak-stats.demolab.com?user=DhruvKumar-tech&theme=tokyonight&hide_border=true&background=00000000"
              alt="GitHub Streak"
              className="w-full rounded-2xl"
            />

          </motion.div>

        </div>

        {/* LANGUAGES */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 shadow-2xl backdrop-blur"
        >

          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=DhruvKumar-tech&layout=compact&theme=tokyonight&hide_border=true&bg_color=00000000"
            alt="Top Languages"
            className="mx-auto"
          />

        </motion.div>

      </div>
    </section>
  );
}