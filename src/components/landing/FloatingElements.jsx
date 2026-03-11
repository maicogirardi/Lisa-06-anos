import React from "react";
import { motion } from "framer-motion";

const particles = [
  { emoji: "?", x: "5%", y: "10%", duration: 6, delay: 0, size: "text-lg" },
  { emoji: "??", x: "90%", y: "15%", duration: 7, delay: 1, size: "text-xl" },
  { emoji: "?", x: "15%", y: "80%", duration: 5, delay: 0.5, size: "text-base" },
  { emoji: "??", x: "85%", y: "75%", duration: 8, delay: 2, size: "text-lg" },
  { emoji: "??", x: "50%", y: "5%", duration: 6, delay: 1.5, size: "text-xl" },
  { emoji: "??", x: "75%", y: "90%", duration: 7, delay: 0.8, size: "text-base" },
  { emoji: "?", x: "25%", y: "60%", duration: 5, delay: 2.5, size: "text-sm" },
  { emoji: "??", x: "70%", y: "40%", duration: 6, delay: 1.2, size: "text-sm" },
  { emoji: "??", x: "10%", y: "45%", duration: 7, delay: 0.3, size: "text-base" },
  { emoji: "??", x: "60%", y: "85%", duration: 8, delay: 1.8, size: "text-sm" },
];

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className={`absolute ${p.size} opacity-30`}
          style={{ left: p.x, top: p.y }}
          animate={{
            y: [0, -20, 0, 15, 0],
            x: [0, 10, -10, 5, 0],
            rotate: [0, 10, -10, 5, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {p.emoji}
        </motion.div>
      ))}

      {/* Soft gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-pink-200/20 blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 rounded-full bg-amber-200/20 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-rose-100/15 blur-3xl" />
    </div>
  );
}