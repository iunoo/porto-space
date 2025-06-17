"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  const [showContent, setShowContent] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show content after entry loader finishes (1s + 0.2s buffer)
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate={showContent ? "visible" : "hidden"}
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] relative cursor-pointer"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onClick={() => setShowTooltip(!showTooltip)}
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            AI-Powered Systems Builder
          </h1>
          
          {/* Tooltip */}
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              className="absolute top-full left-0 mt-2 p-3 bg-[#1a0b2e] border border-[#7042f88b] rounded-lg shadow-lg z-50 w-80 glitch-font text-xs"
            >
              <span className="glitch text-gray-300" data-text="Built using real-time AI workflows, code and no-code hybrid pipelines, and system orchestration.">
                Built using real-time AI workflows, code and no-code hybrid pipelines, and system orchestration.
              </span>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Delivering impactful<br />
            systems and workflows<br />
            with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              AI
            </span>.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Hi, I'm Syahbandi — a systems builder who codes, but builds faster and smarter by collaborating with AI. 
          I combine programming, automation, and intelligent workflows to turn ideas into scalable, real-world products.
        </motion.p>

        <motion.div 
          variants={slideInFromLeft(1)}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Link
            href="#projects"
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] block"
          >
            Explore more
          </Link>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icon"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};