"use client";

import { links } from "./components/Navbar";
import { motion } from "framer-motion";

export default function Home() {
  const variant = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 2,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.2,
      },
    },
  };

  const items = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <main className="h-screen w-full flex items-center justify-center gap-4">
      {/* variations  */}
      <motion.div
        className="flex flex-col items-center justify-center gap-4"
        variants={variant}
        initial="hidden"
        animate="visible"
      >
        {links.map((item) => (
          <motion.div className="text-2xl" variants={items}>
            {item.name}
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
