"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Chatbot() {

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi, I’m Dhruv’s AI Recruiter Assistant. Ask me about projects, skills, dashboards, or experience.",
    },
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {

    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      content: input,
    };

    let assistantReply =
      "Dhruv specializes in Data Analytics, Machine Learning, NLP systems, dashboards, and AI-powered applications.";

    if (input.toLowerCase().includes("project")) {
      assistantReply =
        "Dhruv has built AI-powered projects including a Movie Recommendation System, Emotion Classification platform, and Emergency Triage Predictor.";
    }

    if (input.toLowerCase().includes("skills")) {
      assistantReply =
        "Key skills include Python, SQL, Power BI, Machine Learning, NLP, Streamlit, Excel, and Data Analytics.";
    }

    if (input.toLowerCase().includes("dashboard")) {
      assistantReply =
        "Dhruv has experience building analytics dashboards for KPI tracking, reporting automation, and operational insights.";
    }

    if (input.toLowerCase().includes("experience")) {
      assistantReply =
        "Dhruv has experience in analytics, reporting workflows, machine learning systems, and business intelligence projects.";
    }

    setMessages((prev) => [
      ...prev,
      userMessage,
      {
        role: "assistant",
        content: assistantReply,
      },
    ]);

    setInput("");
  };

  return (
    <section className="bg-zinc-900/40 px-6 py-24">

      <div className="mx-auto max-w-5xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <h2 className="text-5xl font-bold">
            AI Recruiter Assistant
          </h2>

          <p className="mt-5 text-lg text-zinc-400">
            Interactive AI assistant trained on portfolio projects, skills, and analytics experience.
          </p>
        </motion.div>

        <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 shadow-2xl">

          {/* CHAT AREA */}
          <div className="h-[500px] overflow-y-auto p-6">

            <div className="space-y-5">

              {messages.map((msg, index) => (

                <div
                  key={index}
                  className={`flex ${
                    msg.role === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >

                  <div
                    className={`max-w-[80%] rounded-2xl px-5 py-4 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-white text-black"
                        : "bg-zinc-800 text-zinc-200"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* INPUT */}
          <div className="border-t border-zinc-800 p-5">

            <div className="flex gap-4">

              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about projects, skills, dashboards..."
                className="flex-1 rounded-2xl border border-zinc-700 bg-zinc-900 px-5 py-4 outline-none"
              />

              <button
                onClick={handleSend}
                className="rounded-2xl bg-white px-6 py-4 font-semibold text-black transition hover:scale-105"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}