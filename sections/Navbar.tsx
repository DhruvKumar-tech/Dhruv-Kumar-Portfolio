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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
          }}
        >
          <button
            onClick={() =>
              window.dispatchEvent(
                new Event("toggle-sidebar")
              )
            }
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: "#fff",
              fontSize: "22px",
            }}
          >
            ☰
          </button>

          <div
            style={{
              fontSize: "20px",
              fontWeight: 700,
            }}
          >
            DhruvAnalytics
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden gap-8 text-sm text-zinc-300 md:flex">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#dashboard" className="hover:text-white">Dashboards</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>

        
      </div>
    </motion.nav>
  );
}