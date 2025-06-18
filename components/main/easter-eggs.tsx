"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const EasterEggs = () => {
  const [konamiSequence, setKonamiSequence] = useState<string[]>([]);
  const [showKonamiEgg, setShowKonamiEgg] = useState(false);
  const [showClickEgg, setShowClickEgg] = useState(false);
  const [logoClickCount, setLogoClickCount] = useState(0);
  const [showSecretMessage, setShowSecretMessage] = useState(false);

  // Konami Code: ↑↑↓↓←→←→BA
  const konamiCode = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
  ];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const newSequence = [...konamiSequence, event.code].slice(-10);
      setKonamiSequence(newSequence);

      // Check if konami code is completed
      if (newSequence.length >= konamiCode.length) {
        const lastTenKeys = newSequence.slice(-konamiCode.length);
        if (JSON.stringify(lastTenKeys) === JSON.stringify(konamiCode)) {
          setShowKonamiEgg(true);
          setTimeout(() => setShowKonamiEgg(false), 5000);
        }
      }

      // Secret message with "SYAHBANDI"
      const secretWord = ['KeyS', 'KeyY', 'KeyA', 'KeyH', 'KeyB', 'KeyA', 'KeyN', 'KeyD', 'KeyI'];
      if (newSequence.length >= secretWord.length) {
        const lastNineKeys = newSequence.slice(-secretWord.length);
        if (JSON.stringify(lastNineKeys) === JSON.stringify(secretWord)) {
          setShowSecretMessage(true);
          setTimeout(() => setShowSecretMessage(false), 4000);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [konamiSequence]);

  // Logo click easter egg
  useEffect(() => {
    const handleLogoClick = () => {
      setLogoClickCount(prev => prev + 1);
      
      if (logoClickCount === 6) { // 7 clicks total (0-indexed)
        setShowClickEgg(true);
        setTimeout(() => {
          setShowClickEgg(false);
          setLogoClickCount(0);
        }, 3000);
      }
    };

    const logo = document.querySelector('img[alt="Syahbandi Logo"]');
    if (logo) {
      logo.addEventListener('click', handleLogoClick);
      return () => logo.removeEventListener('click', handleLogoClick);
    }
  }, [logoClickCount]);

  // Matrix rain effect
  useEffect(() => {
    if (showKonamiEgg) {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.style.position = 'fixed';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100vw';
      canvas.style.height = '100vh';
      canvas.style.zIndex = '9998';
      canvas.style.pointerEvents = 'none';
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      document.body.appendChild(canvas);

      const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
      const matrixArray = matrix.split("");
      const fontSize = 10;
      const columns = canvas.width / fontSize;
      const drops: number[] = [];

      for (let x = 0; x < columns; x++) {
        drops[x] = 1;
      }

      const draw = () => {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#0F0';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
          const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);

          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
      };

      const interval = setInterval(draw, 35);

      setTimeout(() => {
        clearInterval(interval);
        document.body.removeChild(canvas);
      }, 5000);

      return () => {
        clearInterval(interval);
        if (document.body.contains(canvas)) {
          document.body.removeChild(canvas);
        }
      };
    }
  }, [showKonamiEgg]);

  return (
    <>
      {/* Konami Code Easter Egg */}
      <AnimatePresence>
        {showKonamiEgg && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          >
            <div className="text-center">
              <motion.h1
                animate={{ 
                  textShadow: [
                    '0 0 20px #0f0',
                    '0 0 30px #0f0, 0 0 40px #0f0',
                    '0 0 20px #0f0'
                  ]
                }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="text-4xl md:text-6xl font-bold text-green-400 mb-4 glitch-font"
              >
                <span className="glitch" data-text="MATRIX MODE ACTIVATED">
                  MATRIX MODE ACTIVATED
                </span>
              </motion.h1>
              <p className="text-green-300 text-lg">
                Welcome to the Matrix, Neo... I mean, visitor! 🕶️
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Logo Click Easter Egg */}
      <AnimatePresence>
        {showClickEgg && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-20 left-1/2 transform -translate-x-1/2 z-[9999] bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg shadow-lg"
          >
            <div className="text-center">
              <p className="font-semibold">🎉 You found the secret!</p>
              <p className="text-sm">You're persistent, I like that!</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Secret Message Easter Egg */}
      <AnimatePresence>
        {showSecretMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-10 right-10 z-[9999] bg-gradient-to-r from-purple-800 to-pink-800 text-white p-4 rounded-lg shadow-2xl max-w-sm"
          >
            <div className="text-center">
              <p className="font-bold text-lg mb-2">🚀 Secret Unlocked!</p>
              <p className="text-sm glitch-font">
                <span className="glitch" data-text="You typed my name! Thanks for exploring my portfolio deeply.">
                  You typed my name! Thanks for exploring my portfolio deeply.
                </span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hidden click counter indicator */}
      {logoClickCount > 0 && logoClickCount < 7 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed top-4 right-4 z-50 text-white/50 text-xs"
        >
          {logoClickCount}/7
        </motion.div>
      )}
    </>
  );
};