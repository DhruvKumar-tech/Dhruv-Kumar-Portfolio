"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ResumeModal from "@/components/ResumeModal";
import {
  Database,
  Brain,
  BarChart3,
  Sparkles,
} from "lucide-react";
import { trackEvent } from "@/lib/track";

export default function Hero() 
{
    const [analytics, setAnalytics] = useState({
    visitors: 0,
    projectClicks: 0,
    resumeViews: 0,
    liveApps: 0,
    repos: 0,
    });
    const [githubStats, setGithubStats] = useState({
    repos: 0,
    followers: 0,
    following: 0,
    years: 0,
    });

  useEffect(() => {
    fetch("/api/github-profile")
      .then((res) => res.json())
      .then((data) => {

        const accountYears =
          new Date().getFullYear() -
          new Date(data.createdAt).getFullYear();

        setGithubStats({
          repos: data.repos,
          followers: data.followers,
          following: data.following,
          years: accountYears,
        });
      });
  }, []);
  const [isResumeOpen, setIsResumeOpen] = useState(false);


  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-zinc-700/20 blur-3xl" />

        <div className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-white/5 blur-3xl" />

      </div>

      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">

        {/* LEFT CONTENT */}
        <div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-zinc-700 bg-zinc-900 px-5 py-2 text-sm text-zinc-300"
          >

            <Sparkles size={16} />

            Building Intelligent Analytics Systems

          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl"
          > Turning Data Into
            <span className="block text-white">
              Business Decisions
            </span>
          </motion.h1>
          <h2 className="mt-4 text-2xl font-semibold text-zinc-300">
            Data Analyst · Power BI · Python · SQL
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl"
          >

            Building end-to-end analytics solutions using Power BI,
            Python, SQL, Machine Learning, and NLP.

            Specialized in transforming raw data into actionable
            business insights, executive dashboards, and intelligent applications.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-10 flex flex-wrap gap-4"
          >

            <button
              onClick={() => {
                trackEvent("Resume Opened");
                setIsResumeOpen(true);
              }}
              className="rounded-2xl border border-zinc-700 px-7 py-4 font-semibold transition hover:bg-zinc-900"
            >
              Preview Resume
            </button>

          </motion.div>

          
        </div>
        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex items-center justify-center"
        >

          {/* MAIN CARD */}
          <div className="relative h-auto w-[500px] rounded-[40px] border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-8 shadow-2xl">

            {/* TOP BAR */}
            <div className="mb-10 flex items-center justify-between">

              <div>
                <p className="text-sm text-zinc-500">
                  Portfolio Intelligence
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                    Live Portfolio Analytics
                </h3>
              </div>

            </div>

            {/* ANALYTICS BLOCKS */}
            <div className="space-y-6">
              <div className="space-y-5">
                {/* Visitors */}
                <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
                  <p className="text-sm text-zinc-500">
                    Total Visitors
                  </p>

                  <h4 className="mt-2 text-4xl font-black">
                    {analytics.visitors}
                  </h4>

                  <p className="text-emerald-400 text-sm">
                    Portfolio Reach
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4">

                  <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-5">
                    <p className="text-sm text-zinc-500">
                      Project Clicks
                    </p>

                    <h4 className="mt-2 text-3xl font-black">
                      {analytics.projectClicks}
                    </h4>
                  </div>

                  <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-5">
                    <p className="text-sm text-zinc-500">
                      Resume Views
                    </p>

                    <h4 className="mt-2 text-3xl font-black">
                      {analytics.resumeViews}
                    </h4>
                  </div>

                </div>

                {/* Apps + Repositories */}
                <div className="grid grid-cols-2 gap-4">

                  <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-5">
                    <p className="text-sm text-zinc-500">
                      Live Apps
                    </p>

                    <h4 className="mt-2 text-3xl font-black">
                      {analytics.liveApps}
                    </h4>
                  </div>

                  <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-5">
                    <p className="text-sm text-zinc-500">
                      GitHub Repos
                    </p>

                    <h4 className="mt-2 text-3xl font-black">
                      {githubStats.repos}
                    </h4>
                  </div>

                </div>

                {/* Engagement */}
                <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-5">

                  <p className="text-sm text-zinc-500">
                    Most Engaged Section
                  </p>

                  <h4 className="mt-3 text-2xl font-black">
                    Projects
                  </h4>

                  <p className="mt-2 text-emerald-400">
                    {analytics.projectClicks > 0
                      ? Math.round(
                          (analytics.projectClicks /
                            analytics.visitors) *
                            100
                        )
                      : 0}
                    % Visitor Interaction Rate
                  </p>

                </div>

              </div>  
            </div>
          </div>
        </motion.div>
      </div>

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </section>
  );
}