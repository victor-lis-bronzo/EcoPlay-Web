"use client";

import { motion } from "framer-motion";

export default function IconText({ className }: { className?: string }) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`text-5xl md:text-6xl font-extrabold text-background ${className}`}
    >
      Cap-Dunk
    </motion.h1>
  );
}
