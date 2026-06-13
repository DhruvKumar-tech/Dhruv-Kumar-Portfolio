"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // Check admin login
  useEffect(() => {
    fetch("/api/check-admin")
      .then((res) => res.json())
      .then((data) => setIsAdmin(data.isAdmin))
      .catch(() => setIsAdmin(false));
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide">
          DhruvAnalytics
        </h1>

        {/* Desktop Menu */}
        <div className="hidden gap-8 text-sm text-zinc-300 md:flex">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#dashboard" className="hover:text-white">Dashboards</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>

        {/* 🔥 Hamburger Menu */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 hover:bg-zinc-800"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Dropdown */}
          {open && (
            <div className="absolute right-0 mt-3 w-48 rounded-xl border border-zinc-800 bg-zinc-900 shadow-lg">
              
              {/* Admin Login */}
              {!isAdmin && (
                <a
                  href="/admin-login"
                  className="block px-4 py-3 text-sm hover:bg-zinc-800"
                >
                  🔐 Admin Login
                </a>
              )}

              {/* Admin Dashboard */}
              {isAdmin && (
                <a
                  href="/admin"
                  className="block px-4 py-3 text-sm hover:bg-zinc-800"
                >
                  📊 Dashboard
                </a>
              )}

              {/* Logout */}
              {isAdmin && (
                <button
                  onClick={async () => {
                    await fetch("/api/logout");
                    window.location.reload();
                  }}
                  className="w-full text-left px-4 py-3 text-sm text-red-400 hover:bg-zinc-800"
                >
                  🚪 Logout
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.nav>
  );
}