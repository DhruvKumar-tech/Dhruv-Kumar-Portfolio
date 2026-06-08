"use client";

import { useState } from "react";

export default function AdminLogin() {
  const [token, setToken] =
    useState("");

  async function login() {
    const res = await fetch(
      "/api/admin-login",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          token,
        }),
      }
    );

    if (res.ok) {
      window.location.href =
        "/admin";
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-black">
      <div className="w-96 rounded-xl bg-zinc-900 p-6">
        <input
          value={token}
          onChange={(e) =>
            setToken(e.target.value)
          }
          placeholder="Admin Token"
          className="w-full rounded bg-zinc-800 p-3"
        />

        <button
          onClick={login}
          className="mt-4 w-full rounded bg-white p-3 text-black"
        >
          Login
        </button>
      </div>
    </main>
  );
}