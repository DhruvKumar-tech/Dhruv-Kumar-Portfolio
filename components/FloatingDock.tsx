"use client";

import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaKaggle,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

const links = [
  {
    icon: <FaLinkedin size={22} />,
    href: "https://www.linkedin.com/in/dhruv-kumar-ds048341/",
    label: "LinkedIn",
  },

  {
    icon: <FaGithub size={22} />,
    href: "https://github.com/DhruvKumar-tech",
    label: "GitHub",
  },

  {
    icon: <FaKaggle size={22} />,
    href: "https://www.kaggle.com/dhruvkumar01",
    label: "Kaggle",
  },

  {
    icon: <MdEmail size={24} />,
    href: "mailto:dhruvkumar010200@gmail.com",
    label: "Email",
  },
];

export default function FloatingDock() {

  return (

    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="fixed left-5 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-5 rounded-3xl border border-zinc-800 bg-zinc-900/70 p-4 shadow-2xl backdrop-blur lg:flex"
    >

      {links.map((item, index) => (

        <motion.a
          key={index}
          href={item.href}
          target="_blank"
          whileHover={{
            scale: 1.15,
            y: -3,
          }}
          whileTap={{ scale: 0.95 }}
          className="group relative flex h-14 w-14 items-center justify-center rounded-2xl border border-zinc-700 bg-zinc-900 text-zinc-300 transition hover:border-white hover:text-white"
        >

          {item.icon}

          {/* TOOLTIP */}
          <span className="absolute left-20 whitespace-nowrap rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm opacity-0 shadow-xl transition group-hover:opacity-100">
            {item.label}
          </span>

        </motion.a>
      ))}
    </motion.div>
  );
}