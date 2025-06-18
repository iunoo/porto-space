"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const EntryLoader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide entire loader after 3 seconds
    const loaderTimer = setTimeout(() => {
      setIsVisible(false);
      document.body.classList.remove('preloader-active');
    }, 3000);

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
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#030014] overflow-hidden flex items-center justify-center"
        >
          {/* Centered Blackhole - TIDAK DIKEMANA-MANAIN */}
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

            {/* GET READY - DI ATAS */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute top-1/4 left-0 right-0 z-10 flex items-center justify-center"
            >
              <div 
                className="text-2xl md:text-4xl font-bold text-white glitch-font text-center entry-loader-intense px-4"
                style={{
                  textShadow: `
                    0 0 10px rgba(255, 255, 255, 0.9),
                    0 0 20px rgba(112, 66, 248, 0.7),
                    0 0 30px rgba(0, 255, 255, 0.5),
                    0 0 40px rgba(255, 0, 193, 0.4),
                    2px 2px 0px rgba(0, 0, 0, 0.9)
                  `,
                  WebkitTextStroke: '1px rgba(255, 255, 255, 0.2)',
                  filter: 'drop-shadow(0 0 8px rgba(112, 66, 248, 0.8))'
                }}
              >
                <span className="intense-glitch" data-text="Get Ready">
                  Get Ready
                </span>
              </div>
            </motion.div>

            {/* ENTERING... - DI BAWAH (TIDAK MENGHALANGI BH) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute bottom-1/4 left-0 right-0 z-10 flex items-center justify-center"
            >
              <div 
                className="text-lg md:text-2xl font-medium text-white glitch-font text-center entry-loader-intense px-4"
                style={{
                  textShadow: `
                    0 0 8px rgba(255, 255, 255, 0.8),
                    0 0 16px rgba(112, 66, 248, 0.6),
                    0 0 24px rgba(0, 255, 255, 0.4),
                    0 0 32px rgba(255, 0, 193, 0.3),
                    1px 1px 0px rgba(0, 0, 0, 0.8)
                  `,
                  WebkitTextStroke: '0.5px rgba(255, 255, 255, 0.1)',
                  filter: 'drop-shadow(0 0 6px rgba(112, 66, 248, 0.7))'
                }}
              >
                <span className="intense-glitch" data-text="Entering...">
                  Entering...
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};