import React from "react";
import { motion } from "framer-motion";
import { Crown, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="text-center mb-8 md:mb-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center justify-center gap-2 mb-3">

        <Sparkles className="w-5 h-5 text-amber-400" />
        <span className="text-xs md:text-sm tracking-[0.3em] uppercase text-pink-400 font-medium">
          Lembrança de 06 anos da Lisa
        </span>
        <Sparkles className="w-5 h-5 text-amber-400" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        style={{ fontFamily: "'Spicy Rice', cursive" }}
        className="bg-gradient-to-r from-pink-400 via-rose-400 to-amber-400 bg-clip-text text-transparent text-8xl md:text-9xl lg:text-[11rem] font-bold text-center leading-tight drop-shadow-sm">


        Lisa
      </motion.h1>

      










      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6, type: "spring", stiffness: 200 }}
        className="relative inline-block mt-1">

        <span className="text-7xl md:text-9xl font-bold text-amber-400 drop-shadow-sm">6</span>
        <motion.div
          animate={{ rotate: [0, -5, 5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-4 md:-top-6 left-1/2 -translate-x-1/2">

          <Crown className="w-8 h-8 md:w-12 md:h-12 text-amber-400 fill-amber-200" />
        </motion.div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-4 text-base md:text-lg text-pink-400/80 font-light tracking-wide">

        Uma celebração de princesa
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="flex items-center justify-center gap-1.5 mt-3">

        {["??", "??", "?", "??", "??"].map((emoji, i) =>
        <motion.span
          key={i}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2, delay: i * 0.2, repeat: Infinity, ease: "easeInOut" }}
          className="text-lg md:text-xl">

            {emoji}
          </motion.span>
        )}
      </motion.div>
    </div>);

}