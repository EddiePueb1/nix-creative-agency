'use client';

import { motion } from "motion/react";
import { Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full h-[70vh] min-h-[500px] rounded-[2rem] overflow-hidden bg-gray-200"
      >
        <img
          src="https://picsum.photos/seed/agency/1920/1080?blur=2"
          alt="Team collaborating"
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute top-8 left-8 md:top-16 md:left-16 max-w-md">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-3xl p-8 shadow-xl"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 leading-tight mb-4">
              Data-Driven Creativity
            </h1>
            <p className="text-gray-600 text-lg">
              Find out what makes Nix Creative different.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-8 right-8 md:bottom-16 md:right-16">
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center gap-3 bg-white text-black pl-6 pr-2 py-2 rounded-full font-medium shadow-lg group overflow-hidden"
          >
            <span className="relative z-10">Watch Video</span>
            <div className="relative z-10 text-black p-2 rounded-full">
              <Play size={16} fill="currentColor" />
            </div>
            <div className="absolute right-2 top-2 w-8 h-8 bg-[#b4ff39] rounded-full group-hover:scale-[15] transition-transform duration-500 ease-in-out z-0" />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
