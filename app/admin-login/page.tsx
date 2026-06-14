"use client";

import { useState } from "react";

export default function AdminLogin() {
  const [token, setToken] = useState("");

  async function login() {
    const res = await fetch("/api/admin-login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });

    if (res.ok) {
      window.location.href = "/admin";
    }
  }

  return (
    <main 
      className="flex min-h-screen items-center justify-center relative overflow-hidden bg-black"
      style={{
        backgroundImage: "url('/bg-pattern.png')", 
        backgroundSize: "280px 280px", 
        backgroundRepeat: "repeat",
        backgroundPosition: "center"
      }}
    >
      {/* Subtle overlay so the bright white lines from your local asset don't overpower the screen */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />

      {/* Premium minimal white/grey layout border strip on top header */}
      <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-zinc-700 via-zinc-400 to-zinc-800 z-20" />

      {/* ── COMPLETELY TRANSPARENT / FROSTED CENTER CARD ── */}
      <div className="w-96 rounded-2xl border border-white/10 bg-white/5 p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] backdrop-blur-xd z-10">
        <h2 className="mb-6 text-center text-xs font-bold uppercase tracking-[0.25em] text-zinc-300">
          ⚙️ SYSTEM AUTHORIZATION
        </h2>

        <div className="space-y-4">
          <input
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="Enter System Token"
            className="w-full rounded-lg border border-white/10 bg-black/80 p-3 text-sm text-white placeholder-zinc-500 outline-none transition focus:border-zinc-400 focus:bg-black/60"
          />

          <button
            onClick={login}
            className="w-full rounded-lg bg-zinc-100 p-3 text-sm font-semibold text-black shadow-lg transition hover:bg-zinc-200 active:scale-[0.99]"
          >
            Verify Credentials
          </button>
        </div>
      </div>
    </main>
  );
}
