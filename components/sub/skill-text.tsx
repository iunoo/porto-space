"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center mobile-section-padding">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mobile-welcome-box"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-4 w-4 md:h-5 md:w-5" />
        <h1 className="Welcome-text text-[11px] md:text-[13px]">
          Think better with Next.js 14
        </h1>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-2xl md:text-[30px] text-white font-medium mt-[10px] text-center mb-[15px] mobile-section-padding"
      >
        Making apps with modern technologies.
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="glitch-font text-base md:text-[20px] text-gray-200 mb-6 md:mb-10 mt-[10px] text-center mobile-glitch-text mobile-section-padding"
      >
        <span className="glitch" data-text="A toolkit of technologies I use to build real-world products — from frontend to backend.">
          A toolkit of technologies I use to build real-world products — from frontend to backend.
        </span>
      </motion.div>
    </div>
  );
};