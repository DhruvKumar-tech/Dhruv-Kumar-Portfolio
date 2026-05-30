"use client";

import { motion } from "framer-motion";

export default function Dashboard() {
  return (
    <section
      id="dashboard"
      className="px-6 py-24"
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
            Interactive Analytics Dashboards
          </h2>

          <p className="mt-5 text-lg text-zinc-400">
            KPI monitoring, business reporting, and data visualization systems.
          </p>
        </motion.div>

        {/* Responsive grid wrapper for balanced side-by-side display */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

          {/* Card 1: Enterprise Sales Analytics Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 flex flex-col justify-between shadow-2xl"
          >
            <div>
              {/* Contained Video Preview Window with side spacing */}
              <div className="relative h-56 w-full overflow-hidden bg-zinc-950/40 border-b border-zinc-800/80 flex items-center justify-center px-8 py-4">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="h-full w-full object-contain rounded-xl shadow-lg"
                >
                  <source src="/videos/Sales Analytics Dashboard.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                <span className="absolute top-3 left-3 text-[9px] font-bold tracking-wider text-emerald-400 uppercase bg-zinc-950/90 border border-emerald-500/20 px-2 py-0.5 rounded backdrop-blur">
                  ● Live Preview
                </span>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold text-zinc-100">
                  Sales Analytics Dashboard
                </h3>

                <p className="mt-5 leading-relaxed text-zinc-400 text-sm">
                  An executive-level performance reporting platform tracking operational revenue metrics and product distribution networks. Includes a built-in collapsible scenario tour guide to walk stakeholders through automated strategic analytics.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-400">
                    Python
                  </span>
                  <span className="rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-400">
                    Streamlit
                  </span>
                  <span className="rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-400">
                    Plotly Data Vis
                  </span>
                  <span className="rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-400">
                    Pandas
                  </span>
                </div>

                <p className="mt-6 text-[11px] text-amber-500/90 leading-tight bg-amber-500/5 border border-amber-500/10 p-2.5 rounded-xl">
                  ⚠️ App sleeps when inactive. May take up to 60 seconds to initialize on first load.
                </p>
              </div>
            </div>

            <div className="px-8 pb-8 flex gap-4">
              <a 
                href="https://sales-analytics-dashboard-mck84aurty3x6e73zp9hdp.streamlit.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center rounded-xl bg-white py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
              >
                Launch Live App ↗
              </a>
              
              <a 
                href="https://github.com/DhruvKumar-tech/Sales-Analytics-Dashboard" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900 py-3 text-sm font-semibold text-zinc-300 transition hover:bg-zinc-800"
              >
                GitHub Codebase
              </a>
            </div>
          </motion.div>

          {/* Card 2: Upcoming... */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 flex flex-col justify-between shadow-2xl"
          >
            <div>
              {/* Contained Video Space Placeholder for Emotion App Recording */}
              <div className="relative h-56 w-full overflow-hidden bg-zinc-950/40 border-b border-zinc-800/80 flex items-center justify-center px-8 py-4">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="h-full w-full object-contain rounded-xl shadow-lg"
                >
                  <source src="/videos/emotion-preview.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                <span className="absolute top-3 left-3 text-[9px] font-bold tracking-wider text-indigo-400 uppercase bg-zinc-950/90 border border-indigo-500/20 px-2 py-0.5 rounded backdrop-blur">
                  ● Live Preview
                </span>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold text-zinc-100">
                  Update Soon
                </h3>

                <p className="mt-5 leading-relaxed text-zinc-400 text-sm">
                  \__/
                  (..)
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-400">
                    .
                  </span>
                </div>

                <p className="mt-6 text-[11px] text-amber-500/90 leading-tight bg-amber-500/5 border border-amber-500/10 p-2.5 rounded-xl">
                  ⚠️ App sleeps when inactive. May take up to 60 seconds to initialize on first load.
                </p>
              </div>
            </div>

            <div className="px-8 pb-8 flex gap-4">
              <a 
                href="https://streamlit.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center rounded-xl bg-white py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
              >
                Launch Live App ↗
              </a>
              
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900 py-3 text-sm font-semibold text-zinc-300 transition hover:bg-zinc-800"
              >
                GitHub Codebase
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
