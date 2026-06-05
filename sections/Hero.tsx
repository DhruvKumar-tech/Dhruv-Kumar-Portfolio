"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ResumeModal from "@/components/ResumeModal";
import { Sparkles } from "lucide-react";
import { trackEvent } from "@/lib/track";

export default function Hero() {
  const [analytics, setAnalytics] = useState({
    visitors: 0,
    projectClicks: 0,
    resumeViews: 0,
    liveApps: 2, // Non-zero configuration fallback asset
  });

  const [githubStats, setGithubStats] = useState({
    repos: 0,
    followers: 0,
    following: 0,
    years: 0,
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Core write handler for telemetry data
  const logLiveEvent = async (eventName: string) => {
    trackEvent(eventName); // Local execution tracker callback
    try {
      await fetch("/api/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ event: eventName }),
      });
      
      // Update UI state locally for instant visual feedback
      setAnalytics((prev) => ({
        ...prev,
        resumeViews: eventName === "Resume Opened" ? prev.resumeViews + 1 : prev.resumeViews,
        projectClicks: eventName === "Project Clicked" ? prev.projectClicks + 1 : prev.projectClicks,
      }));
    } catch (err) {
      console.error("Event write logging interrupted:", err);
    }
  };

  useEffect(() => {
    // 1. DYNAMIC DATA FETCH: VERCEL KV TELEMETRY
    fetch("/api/visitors", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        setAnalytics({
          visitors: Number(data.visitors) || 0,
          projectClicks: Number(data.projectClicks) || 0,
          resumeViews: Number(data.resumeViews) || 0,
          liveApps: Number(data.liveApps) || 2,
        });
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Analytics fetch loop crashed:", err);
        setIsLoading(false);
      });

    // 2. DYNAMIC DATA FETCH: GITHUB PROFILE METRICS
    fetch("/api/github-profile")
      .then((res) => res.json())
      .then((data) => {
        const accountYears =
          new Date().getFullYear() - new Date(data.createdAt).getFullYear();

        setGithubStats({
          repos: data.repos || 0,
          followers: data.followers || 0,
          following: data.following || 0,
          years: accountYears,
        });
      })
      .catch((err) => console.error("GitHub data syncing failed:", err));
  }, []);

  // Safe arithmetic evaluation mapping
  const interactionRate = analytics.visitors > 0
    ? Math.round((analytics.projectClicks / analytics.visitors) * 100)
    : 0;

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28">
      {/* Background Visual Enhancements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-zinc-700/15 blur-3xl" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
        {/* Left Informational Content Layout Block */}
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
          >
            Turning Data Into
            <span className="block text-white">Business Decisions</span>
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
            Building end-to-end analytics solutions using Power BI, Python, SQL, Machine Learning, and NLP.
            Specialized in transforming raw data into actionable business insights, executive dashboards, and intelligent applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <button
              onClick={() => {
                logLiveEvent("Resume Opened");
                setIsResumeOpen(true);
              }}
              className="rounded-2xl border border-zinc-700 px-7 py-4 font-semibold transition hover:bg-zinc-900 shadow-lg hover:shadow-zinc-800/20"
            >
              Preview Resume
            </button>
          </motion.div>
        </div>

        {/* Right Graphical Metrics Infrastructure Visualizer Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex items-center justify-center"
        >
          <div className="relative h-auto w-[500px] rounded-[40px] border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-8 shadow-2xl">
            <div className="mb-10 flex items-center justify-between">
              <div>
                <p className="text-sm text-zinc-500">Portfolio Intelligence</p>
                <h3 className="mt-2 text-2xl font-bold flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                  </span>
                  Live Portfolio Analytics
                </h3>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-5">
                {/* Metric Card 1: Visitors Total views */}
                <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-inner">
                  <p className="text-sm text-zinc-500">Total Visitors</p>
                  <h4 className="mt-2 text-4xl font-black text-indigo-400 tabular-nums">
                    {isLoading ? "..." : analytics.visitors}
                  </h4>
                  <p className="text-emerald-400 text-sm mt-1">● Live Database Stream Connected</p>
                </div>

                {/* Metric Row Grid Layout Block 1 */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-5">
                    <p className="text-sm text-zinc-500">Project Clicks</p>
                    <h4 className="mt-2 text-3xl font-black text-zinc-100 tabular-nums">
                      {isLoading ? "..." : analytics.projectClicks}
                    </h4>
                  </div>
                  <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-5">
                    <p className="text-sm text-zinc-500">Resume Views</p>
                    <h4 className="mt-2 text-3xl font-black text-zinc-100 tabular-nums">
                      {isLoading ? "..." : analytics.resumeViews}
                    </h4>
                  </div>
                </div>

                {/* Metric Row Grid Layout Block 2 */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-5">
                    <p className="text-sm text-zinc-500">Live Apps</p>
                    <h4 className="mt-2 text-3xl font-black text-zinc-100 tabular-nums">
                      {isLoading ? "..." : analytics.liveApps}
                    </h4>
                  </div>
                  <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-5">
                    <p className="text-sm text-zinc-500">GitHub Repos</p>
                    <h4 className="mt-2 text-3xl font-black text-zinc-100 tabular-nums">
                      {githubStats.repos}
                    </h4>
                  </div>
                </div>

                {/* Metric Card 4: Dynamic Conversion Rate Visualizer */}
                <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-5">
                  <p className="text-sm text-zinc-500">Most Engaged Section</p>
                  <h4 className="mt-3 text-2xl font-black text-zinc-100">Projects</h4>
                  <p className="mt-2 text-emerald-400 font-medium tabular-nums">
                    {isLoading ? "0" : interactionRate}% Visitor Interaction Rate
                  </p>
                </div>
              </div>  
            </div>
          </div>
        </motion.div>
      </div>

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
}
