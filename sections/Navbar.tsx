"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        <div>
          <h1 className="text-xl font-bold tracking-wide">
            DhruvAnalytics
          </h1>
        </div>

        <div className="hidden gap-8 text-sm text-zinc-300 md:flex">
          <a href="#about" className="hover:text-white">
            About
          </a>

          <a href="#projects" className="hover:text-white">
            Projects
          </a>

          <a href="#dashboard" className="hover:text-white">
            Dashboards
          </a>

          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </motion.nav>
  );
}