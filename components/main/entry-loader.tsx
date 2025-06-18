"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const EntryLoader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [startTransition, setStartTransition] = useState(false);

  useEffect(() => {
    // Add body class to prevent scrolling
    document.body.classList.add('preloader-active');

    // Start blackhole transition after 2 seconds
    const transitionTimer = setTimeout(() => {
      setStartTransition(true);
    }, 2000);

    // Hide loader background but keep blackhole visible during transition
    const backgroundTimer = setTimeout(() => {
      // Only hide the background, blackhole continues moving
      const loaderElement = document.querySelector('.entry-loader-bg');
      if (loaderElement) {
        (loaderElement as HTMLElement).style.background = 'transparent';
      }
    }, 2300);

    // Complete transition - hide entire loader
    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      document.body.classList.remove('preloader-active');
    }, 3000);

    return () => {
      clearTimeout(transitionTimer);
      clearTimeout(backgroundTimer);
      clearTimeout(completeTimer);
      document.body.classList.remove('preloader-active');
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          // REMOVED: exit fade out for seamless transition
          className="entry-loader-bg fixed inset-0 z-[9999] bg-[#030014] overflow-hidden flex items-center justify-center"
          style={{
            background: startTransition ? 'transparent' : '#030014'
          }}
        >
          {/* Blackhole with PERFECT transition - ONLY move up, NO zoom, NO fade */}
          <motion.div
            className="relative flex items-center justify-center w-full h-full"
            animate={startTransition ? {
              y: "calc(-50vh + 29px)", // Your perfect position!
              transition: {
                duration: 1.2, // Slightly longer for smoother feel
                ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
              }
            } : {
              y: 0,
            }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="rotate-180 w-full h-full object-cover absolute inset-0"
            >
              <source src="/videos/blackhole.webm" type="video/webm" />
            </video>

            {/* Loading Text - Fade out smoothly before transition */}
            <AnimatePresence>
              {!startTransition && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ 
                    opacity: 0, 
                    y: -30,
                    transition: { duration: 0.5 }
                  }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute bottom-1/4 left-0 right-0 z-10 flex items-center justify-center"
                >
                  <div 
                    className="text-xl md:text-2xl font-medium text-white glitch-font text-center entry-loader"
                    style={{
                      textShadow: '0 0 12px rgba(0, 0, 0, 0.9), 0 0 24px rgba(0, 0, 0, 0.8), 0 4px 8px rgba(0, 0, 0, 0.9)',
                      WebkitTextStroke: '0.5px rgba(0, 0, 0, 0.8)',
                      filter: 'drop-shadow(0 0 6px rgba(0, 0, 0, 0.9))'
                    }}
                  >
                    <span className="glitch" data-text="Entering Syahbandi Portfolio">
                      Entering Syahbandi Portfolio
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Smooth background fade to transparent */}
          <motion.div
            className="absolute inset-0 bg-[#030014] pointer-events-none"
            animate={startTransition ? {
              opacity: 0,
              transition: { duration: 0.8, delay: 0.4 }
            } : {
              opacity: 1
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};