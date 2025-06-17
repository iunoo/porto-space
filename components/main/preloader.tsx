"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#030014] overflow-hidden"
          style={{ pointerEvents: isVisible ? 'all' : 'none' }}
        >
          {/* Background Video */}
          <div className="absolute inset-0 w-full h-full">
            <video
              autoPlay
              muted
              loop
              className="rotate-180 absolute top-[-340px] left-0 w-full h-full object-cover -z-10"
            >
              <source src="/videos/blackhole.webm" type="video/webm" />
            </video>
          </div>

          {/* Stars Background */}
          <div className="absolute inset-0 w-full h-full">
            <div className="w-full h-full z-[-5] opacity-30 absolute flex items-center justify-center bg-cover">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030014]/20 to-[#030014]/60"></div>
            </div>
          </div>

          {/* Glitch Text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="relative z-10 text-center"
          >
            <div className="glitch-text text-4xl md:text-6xl font-bold text-white glitch-font">
              <span className="glitch" data-text="Galactic Link Established">
                Galactic Link Established
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};