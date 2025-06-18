"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [glitchText, setGlitchText] = useState("ERROR");

  useEffect(() => {
    console.error(error);
    
    const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    const originalText = "ERROR";
    
    const glitchInterval = setInterval(() => {
      let glitched = "";
      for (let i = 0; i < originalText.length; i++) {
        if (Math.random() < 0.15) {
          glitched += glitchChars[Math.floor(Math.random() * glitchChars.length)];
        } else {
          glitched += originalText[i];
        }
      }
      setGlitchText(glitched);
      
      setTimeout(() => setGlitchText(originalText), 150);
    }, 1500);

    return () => clearInterval(glitchInterval);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#030014] flex items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="error-stars"></div>
        <div className="error-glitch-bg"></div>
      </div>

      {/* Distorted blackhole background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="rotate-180 w-full h-full object-cover filter hue-rotate-180 saturate-200"
        >
          <source src="/videos/blackhole.webm" type="video/webm" />
        </video>
      </div>

      <div className="relative z-10 text-center px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500 glitch-font mb-4">
            <span className="glitch" data-text={glitchText}>
              {glitchText}
            </span>
          </h1>
          <div className="text-4xl md:text-6xl font-bold text-red-400 opacity-80">
            500
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-xl md:text-3xl font-semibold text-white mb-4">
            System Malfunction Detected
          </h2>
          <p className="text-gray-400 text-base md:text-lg glitch-font">
            <span className="glitch" data-text="The AI systems have encountered an unexpected anomaly.">
              The AI systems have encountered an unexpected anomaly.
            </span>
          </p>
          
          {process.env.NODE_ENV === 'development' && (
            <details className="mt-4 text-left bg-red-900/20 border border-red-500/30 rounded-lg p-4">
              <summary className="cursor-pointer text-red-400 font-semibold mb-2">
                Debug Information
              </summary>
              <pre className="text-xs text-red-300 overflow-auto">
                {error.message}
                {error.digest && `\nDigest: ${error.digest}`}
              </pre>
            </details>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-4"
        >
          <button
            onClick={reset}
            className="inline-block px-8 py-3 bg-gradient-to-r from-red-600 to-purple-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25 mr-4"
          >
            Restart System
          </button>
          
          <a
            href="/"
            className="inline-block px-8 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white font-semibold rounded-lg hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Return Home
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        .error-stars {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="1" fill="red" opacity="0.6"/><circle cx="80" cy="40" r="0.5" fill="purple" opacity="0.4"/><circle cx="40" cy="60" r="1" fill="red" opacity="0.3"/><circle cx="90" cy="80" r="0.5" fill="purple" opacity="0.7"/></svg>') repeat;
          animation: error-move 30s linear infinite;
        }
        
        .error-glitch-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, transparent 30%, rgba(255,0,0,0.03) 50%, transparent 70%);
          animation: glitch-sweep 3s ease-in-out infinite;
        }
        
        @keyframes error-move {
          from { transform: translateY(0px) rotate(0deg); }
          to { transform: translateY(-1000px) rotate(360deg); }
        }
        
        @keyframes glitch-sweep {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}