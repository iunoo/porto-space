"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const EntryLoader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    // Add body class to prevent scrolling
    document.body.classList.add('preloader-active');

    // Hide text after 800ms, start upward animation
    const textTimer = setTimeout(() => {
      setShowText(false);
    }, 800);

    // Hide entire loader after 1.9 seconds (1s animation + 0.9s buffer)
    const loaderTimer = setTimeout(() => {
      setIsVisible(false);
      document.body.classList.remove('preloader-active');
    }, 1900);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(loaderTimer);
      document.body.classList.remove('preloader-active');
    };
  }, []);

  // Original easing curve for better momentum
  const gravitationalEasing = [0.25, 0.46, 0.45, 0.94];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] bg-[#030014] overflow-hidden flex items-center justify-center"
        >
          {/* Blackhole Video Container */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ 
              y: showText ? 0 : "calc(-1 * var(--blackhole-alignment-offset))"
            }}
            transition={{ 
              duration: showText ? 0 : 1.0,
              delay: showText ? 0 : 0.1,
              ease: gravitationalEasing
            }}
            className="absolute inset-0 w-full h-full"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="rotate-180 absolute left-0 w-full h-full object-cover"
              style={{ 
                top: 'var(--blackhole-final-position)'
              }}
            >
              <source src="/videos/blackhole.webm" type="video/webm" />
            </video>
          </motion.div>

          {/* Stars Background */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ 
              y: showText ? 0 : "calc(-1 * var(--blackhole-alignment-offset))"
            }}
            transition={{ 
              duration: showText ? 0 : 1.0,
              delay: showText ? 0 : 0.1,
              ease: gravitationalEasing
            }}
            className="absolute inset-0 w-full h-full"
          >
            <div className="w-full h-full opacity-30 absolute flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030014]/10 to-[#030014]/30"></div>
            </div>
          </motion.div>

          {/* Entry Text - Perfectly Centered Under Blackhole */}
          <AnimatePresence>
            {showText && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ 
                  opacity: 0, 
                  y: -20,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 right-0 pb-20 z-10 flex items-center justify-center"
              >
                <div className="text-2xl md:text-3xl font-medium text-white glitch-font text-center w-full">
                  <span className="glitch" data-text="Entering Blackhole...">
                    Entering Blackhole...
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};