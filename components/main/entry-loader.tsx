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

    // Hide entire loader after 2.5 seconds
    const loaderTimer = setTimeout(() => {
      setIsVisible(false);
      document.body.classList.remove('preloader-active');
    }, 2500);

    return () => {
      clearTimeout(transitionTimer);
      clearTimeout(loaderTimer);
      document.body.classList.remove('preloader-active');
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-[#030014] overflow-hidden flex items-center justify-center"
        >
          {/* Blackhole with FIXED transition - ONLY move up, NO zoom */}
          <motion.div
            className="relative flex items-center justify-center w-full h-full"
            animate={startTransition ? {
              y: "calc(-50vh + 28px)", // Move to exact portfolio blackhole position
              // NO SCALE - removed scale property completely
            } : {
              y: 0,
              // NO SCALE - removed scale property completely
            }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smooth transition
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

            {/* Loading Text - Only show before transition */}
            <AnimatePresence>
              {!startTransition && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};