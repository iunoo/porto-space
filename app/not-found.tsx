"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [glitchText, setGlitchText] = useState("404");

  useEffect(() => {
    const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    const originalText = "404";
    
    const glitchInterval = setInterval(() => {
      let glitched = "";
      for (let i = 0; i < originalText.length; i++) {
        if (Math.random() < 0.1) {
          glitched += glitchChars[Math.floor(Math.random() * glitchChars.length)];
        } else {
          glitched += originalText[i];
        }
      }
      setGlitchText(glitched);
      
      setTimeout(() => setGlitchText(originalText), 100);
    }, 2000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className="min-h-screen bg-[#030014] flex items-center justify-center relative overflow-hidden">
      {/* Background stars */}
      <div className="absolute inset-0 z-0">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>

      {/* Blackhole background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="rotate-180 w-full h-full object-cover"
        >
          <source src="/videos/blackhole.webm" type="video/webm" />
        </video>
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 glitch-font">
            <span className="glitch" data-text={glitchText}>
              {glitchText}
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-4xl font-semibold text-white mb-4">
            Page Lost in the Void
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto glitch-font">
            <span className="glitch" data-text="The page you're looking for has been consumed by the blackhole.">
              The page you're looking for has been consumed by the blackhole.
            </span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-4"
        >
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
          >
            Return to Portfolio
          </Link>
          
          <div className="flex justify-center space-x-4 mt-6">
            <Link
              href="/#skills"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
            >
              Skills
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href="/#projects"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
            >
              Projects
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href="mailto:contact@iuno.in"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
            >
              Contact
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}