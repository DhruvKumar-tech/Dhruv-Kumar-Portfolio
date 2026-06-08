"use client";

import { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";


export default function Feedback() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [turnstileToken, setTurnstileToken] =
  useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!turnstileToken) {
      alert(
        "Please complete verification."
      );
      return;
    }

    await fetch("/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        message,
        turnstileToken,
      }),
    });

    setName("");
    setMessage("");

    alert("Thank you for your feedback!");
  };

  return (
    <section
      id="feedback"
      className="px-6 pt-16 pb-6 bg-zinc-900/40"
    >
        <div className="mx-auto max-w-xl"> {/* Reduced from max-w-3xl to keep it compact */}
            <h2 className="text-3xl font-bold text-center"> {/* Slightly smaller font size */}
            Visitor Feedback
            </h2>

            <p className="mt-2 text-center text-sm text-zinc-400">
            Share your thoughts about my portfolio.
            </p>
            {/* Tightened spacing between elements */}
            <form
                onSubmit={handleSubmit}
                className="mt-6 space-y-3"
            >
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-2.5 text-sm"
                    required
                />
                {/* Reduced row height from 4 to 3 */}
                <textarea
                    placeholder="Your Feedback"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-2.5 text-sm"
                    rows={3} 
                    required
                />

                <div className="text-center"> {/* Centered button to save layout space */}
                    <Turnstile
                      siteKey={
                        process.env
                          .NEXT_PUBLIC_TURNSTILE_SITE_KEY!
                      }
                      onSuccess={(token) =>
                        setTurnstileToken(token)
                      }
                    />
                    <button
                    type="submit"
                    className="w-full sm:w-auto rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-zinc-200"
                    >
                    Submit Feedback
                    </button>
                </div>
            </form>
        </div>
    </section>
  );
}
