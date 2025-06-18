"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const EntryLoader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Add body class to prevent scrolling
    document.body.classList.add('preloader-active');

    // Hide entire loader after 1 second
    const loaderTimer = setTimeout(() => {
      setIsVisible(false);
      document.body.classList.remove('preloader-active');
    }, 1000);

    return () => {
      clearTimeout(loaderTimer);
      document.body.classList.remove('preloader-active');
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          // REMOVED: exit={{ opacity: 0 }} - No fade out!
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] bg-[#030014] overflow-hidden flex items-center justify-center"
        >
          {/* Centered Blackhole */}
          <div className="relative flex items-center justify-center w-full h-full">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="rotate-180 w-full h-full object-cover absolute inset-0"
            >
              <source src="/videos/blackhole.webm" type="video/webm" />
            </video>

            {/* Loading Text with Enhanced Visibility */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="absolute bottom-1/3 left-0 right-0 z-10 flex items-center justify-center"
            >
              <div 
                className="text-2xl md:text-3xl font-medium text-white glitch-font text-center entry-loader"
                style={{
                  textShadow: '0 0 8px rgba(0, 0, 0, 0.9), 0 0 16px rgba(0, 0, 0, 0.7), 0 2px 4px rgba(0, 0, 0, 0.8)',
                  WebkitTextStroke: '0.5px rgba(0, 0, 0, 0.8)',
                  filter: 'drop-shadow(0 0 4px rgba(0, 0, 0, 0.9))'
                }}
              >
                <span className="glitch" data-text="Entering Blackhole...">
                  Entering Blackhole...
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};