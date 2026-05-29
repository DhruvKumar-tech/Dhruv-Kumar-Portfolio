"use client";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaKaggle,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

const links = [
  {
    icon: <FaLinkedin size={18} />,
    href: "https://www.linkedin.com/in/dhruv-kumar-ds048341/",
  },

  {
    icon: <FaGithub size={18} />,
    href: "https://github.com/DhruvKumar-tech",
  },

  {
    icon: <FaKaggle size={18} />,
    href: "https://www.kaggle.com/dhruvkumar01",
  },

  {
    icon: <MdEmail size={20} />,
    href: "mailto:dhruvkumar010200@gmail.com",
  },
];

export default function FloatingDock() {

  const [hovered, setHovered] = useState(false);

  return (

    <div
      className="fixed left-0 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >

      {/* EDGE TRIGGER */}
      <div className="absolute left-0 top-0 h-full w-3" />

      <AnimatePresence>

        {hovered && (

          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -80, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="ml-2 flex flex-col gap-4 rounded-3xl border border-zinc-800 bg-zinc-950/90 p-4 shadow-2xl backdrop-blur"
          >

            {links.map((item, index) => (

              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                whileHover={{
                  scale: 1.12,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-700 bg-zinc-900 text-zinc-300 transition hover:border-white hover:text-white"
              >

                {item.icon}

              </motion.a>
            ))}

          </motion.div>

        )}

      </AnimatePresence>

    </div>
  );
}