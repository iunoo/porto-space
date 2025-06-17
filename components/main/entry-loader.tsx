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

    // Hide entire loader after 1.8 seconds (0.8s + 1s animation)
    const loaderTimer = setTimeout(() => {
      setIsVisible(false);
      document.body.classList.remove('preloader-active');
    }, 1800);

    return () => {
      clearTimeout(textTimer);
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
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] bg-[#030014] overflow-hidden flex items-center justify-center"
        >
          {/* Blackhole Video Container - Same structure as hero */}
          <div className="relative flex flex-col h-full w-full">
            <motion.video
              autoPlay
              muted
              loop
              playsInline
              initial={{ y: 0 }}
              animate={{ 
                y: showText ? 0 : "var(--blackhole-final-top)"
              }}
              transition={{ 
                duration: showText ? 0 : 1.0,
                ease: "easeInOut"
              }}
              className="rotate-180 absolute left-0 w-full h-full object-cover -z-20"
              style={{ top: showText ? "0px" : "var(--blackhole-final-top)" }}
            >
              <source src="/videos/blackhole.webm" type="video/webm" />
            </motion.video>
          </div>

          {/* Entry Text */}
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