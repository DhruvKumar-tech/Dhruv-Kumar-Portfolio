"use client";

import { motion } from "framer-motion";

export default function Kaggle() {
  return (
    <section className="bg-zinc-900/40 px-6 py-24">

      <div className="mx-auto max-w-5xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-zinc-800 bg-zinc-950 p-10"
        >

          <h2 className="text-5xl font-bold">
            Kaggle & Analytics Profile
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            Ranked 7957 out of 12,700+ participants in the Titanic
            Machine Learning competition with a score of 0.77672.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl bg-zinc-900 p-6">
              <h3 className="text-4xl font-bold">
                7957
              </h3>

              <p className="mt-3 text-zinc-400">
                Global Rank
              </p>
            </div>

            <div className="rounded-2xl bg-zinc-900 p-6">
              <h3 className="text-4xl font-bold">
                12.7K+
              </h3>

              <p className="mt-3 text-zinc-400">
                Participants
              </p>
            </div>

            <div className="rounded-2xl bg-zinc-900 p-6">
              <h3 className="text-4xl font-bold">
                0.77672
              </h3>

              <p className="mt-3 text-zinc-400">
                Accuracy Score
              </p>
            </div>
          </div>

          <a
            href="https://www.kaggle.com/dhruvkumar01"
            target="_blank"
            className="mt-10 inline-block rounded-2xl bg-white px-6 py-4 font-semibold text-black transition hover:scale-105"
          >
            View Kaggle Profile
          </a>

        </motion.div>
      </div>
    </section>
  );
}