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
    // Show content after entry loader finishes (2.5s + 0.3s buffer)
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId.replace('#', ''));
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate={showContent ? "visible" : "hidden"}
      className="flex flex-col md:flex-row items-center justify-center px-4 md:px-20 mt-20 md:mt-40 w-full z-[20] mobile-section-padding"
      id="about-me"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="Welcome-box py-[8px] px-[7px] md:py-[8px] md:px-[7px] border border-[#7042f88b] opacity-[0.9] relative cursor-pointer mobile-welcome-box"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onClick={() => setShowTooltip(!showTooltip)}
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-4 w-4 md:h-5 md:w-5" />
          <h1 className="Welcome-text text-[11px] md:text-[13px]">
            AI-Powered Systems Builder
          </h1>
          
          {/* Tooltip */}
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              className="absolute top-full left-0 mt-2 p-3 bg-[#1a0b2e] border border-[#7042f88b] rounded-lg shadow-lg z-50 w-80 md:w-80 glitch-font text-xs mobile-tooltip"
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
          className="flex flex-col gap-4 md:gap-6 mt-4 md:mt-6 text-3xl md:text-6xl text-bold text-white max-w-[600px] w-auto h-auto hero-mobile-text"
        >
          <span className="leading-tight">
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
          className="text-base md:text-lg text-gray-400 my-4 md:my-5 max-w-[600px] hero-mobile-description"
        >
          Hi, I'm Syahbandi — a systems builder who codes, but builds faster and smarter by collaborating with AI. 
          I combine programming, automation, and intelligent workflows to turn ideas into scalable, real-world products.
        </motion.p>

        <motion.div 
          variants={slideInFromLeft(1)}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-start"
        >
          <button
            onClick={() => smoothScrollTo('projects')}
            className="py-3 md:py-2 button-primary text-center text-white cursor-pointer rounded-lg mobile-button"
          >
            Explore more
          </button>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full h-full flex justify-center items-center mt-8 md:mt-0 mobile-blackhole-scale"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icon"
          height={650}
          width={650}
          draggable={false}
          className="select-none w-full max-w-[400px] md:max-w-[650px] h-auto"
        />
      </motion.div>
    </motion.div>
  );
};