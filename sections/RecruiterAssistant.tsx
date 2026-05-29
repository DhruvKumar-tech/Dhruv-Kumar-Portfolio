"use client";

import { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { FaRobot } from "react-icons/fa";

import { IoClose } from "react-icons/io5";

export default function RecruiterAssistant() {

  const [open, setOpen] = useState(false);

  const [showBubble, setShowBubble] = useState(false);

  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const [chat, setChat] = useState<
    { role: string; content: string }[]
  >([
    {
      role: "assistant",
      content:
        "Welcome 👋 I am Dhruv's AI recruiter assistant. How can I help you today?",
    },
  ]);

  useEffect(() => {

    const timer = setTimeout(() => {
      setShowBubble(true);
    }, 2000);

    return () => clearTimeout(timer);

  }, []);

  async function sendMessage() {

    if (!message.trim()) return;

    const userMessage = {
      role: "user",
      content: message,
    };

    setChat((prev) => [...prev, userMessage]);

    setLoading(true);

    const response = await fetch("/api/chat", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        message,
      }),
    });

    const data = await response.json();

    setChat((prev) => [
      ...prev,
      {
        role: "assistant",
        content: data.message,
      },
    ]);

    setMessage("");

    setLoading(false);
  }

  return (
    <>

      {/* WELCOME BUBBLE */}
      <AnimatePresence>

        {!open && showBubble && (

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-28 right-8 z-50 hidden rounded-2xl border border-zinc-700 bg-zinc-900/95 px-5 py-4 text-sm text-zinc-300 shadow-2xl backdrop-blur md:block"
          >

            Welcome 👋 I am your AI assistant.
            <br />
            How can I help you?

          </motion.div>
        )}

      </AnimatePresence>

      {/* FLOATING BUTTON */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-8 right-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-white text-black shadow-2xl"
      >

        {open ? (
          <IoClose size={30} />
        ) : (
          <FaRobot size={28} />
        )}

      </motion.button>

      {/* CHAT WINDOW */}
      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 80 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-28 right-8 z-50 flex h-[600px] w-[95%] max-w-md flex-col rounded-[35px] border border-zinc-800 bg-zinc-950 shadow-2xl"
          >

            {/* HEADER */}
            <div className="flex items-center justify-between border-b border-zinc-800 p-6">

              <div>

                <h2 className="text-xl font-bold">
                  AI Recruiter Assistant
                </h2>

                <p className="mt-1 text-sm text-zinc-500">
                  Ask anything about Dhruv
                </p>

              </div>

            </div>

            {/* CHAT AREA */}
            <div className="flex-1 space-y-5 overflow-y-auto p-6">

              {chat.map((msg, index) => (

                <div
                  key={index}
                  className={`max-w-[85%] rounded-3xl px-5 py-4 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "ml-auto bg-white text-black"
                      : "bg-zinc-800 text-zinc-200"
                  }`}
                >
                  {msg.content}
                </div>
              ))}

              {loading && (

                <div className="w-fit rounded-3xl bg-zinc-800 px-5 py-4 text-zinc-300">
                  Thinking...
                </div>

              )}

            </div>

            {/* INPUT */}
            <div className="border-t border-zinc-800 p-5">

              <div className="flex gap-3">

                <input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask about projects, AI systems..."
                  className="flex-1 rounded-2xl border border-zinc-700 bg-zinc-900 px-5 py-4 text-sm outline-none transition focus:border-white"
                />

                <button
                  onClick={sendMessage}
                  className="rounded-2xl bg-white px-6 py-4 font-semibold text-black transition hover:scale-105"
                >
                  Send
                </button>

              </div>

            </div>

          </motion.div>
        )}

      </AnimatePresence>
    </>
  );
}