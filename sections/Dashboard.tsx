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

        <div className="flex gap-8 overflow-x-auto pb-6 scrollbar-hide">

          {/* Dashboard Card 1 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="min-w-[420px] overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900"
          >

            <div className="flex h-72 items-center justify-center bg-gradient-to-br from-zinc-800 to-black text-zinc-500">
              Sales Dashboard Preview
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-bold">
                Sales Analytics Dashboard
              </h3>

              <p className="mt-5 leading-relaxed text-zinc-400">
                Interactive business intelligence dashboard for tracking
                revenue, KPIs, operational metrics, and performance trends.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-xl border border-zinc-700 px-3 py-1 text-sm">
                  Power BI
                </span>

                <span className="rounded-xl border border-zinc-700 px-3 py-1 text-sm">
                  KPI Tracking
                </span>

                <span className="rounded-xl border border-zinc-700 px-3 py-1 text-sm">
                  Business Intelligence
                </span>
              </div>
            </div>
          </motion.div>

          {/* Dashboard Card 2 */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900"
          >

            <div className="flex h-72 items-center justify-center bg-gradient-to-br from-zinc-800 to-black text-zinc-500">
              Operations Dashboard Preview
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-bold">
                Operations Reporting Dashboard
              </h3>

              <p className="mt-5 leading-relaxed text-zinc-400">
                Workforce monitoring and operational analytics dashboard
                for performance optimization and reporting automation.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-xl border border-zinc-700 px-3 py-1 text-sm">
                  Excel
                </span>

                <span className="rounded-xl border border-zinc-700 px-3 py-1 text-sm">
                  Reporting
                </span>

                <span className="rounded-xl border border-zinc-700 px-3 py-1 text-sm">
                  Analytics
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}