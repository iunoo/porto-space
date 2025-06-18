"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { slideInFromTop } from "@/lib/motion";

export const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full -z-20 mobile-section-padding mobile-section-spacing overflow-hidden">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-2xl md:text-[40px] font-medium text-center text-gray-200 mobile-section-padding"
        >
          Performance{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            &
          </span>{" "}
          security.
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/lock-top.png"
            alt="Lock top"
            width={50}
            height={50}
            className="translate-y-5 transition-all duration-200 group-hover:translate-y-11 w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
          />
          <Image
            src="/lock-main.png"
            alt="Lock main"
            width={70}
            height={70}
            className="z-10 w-[56px] h-[56px] md:w-[70px] md:h-[70px]"
          />
        </div>

        <div className="Welcome-box px-[15px] py-[4px] z-[20] border my-[20px] border-[#7042F88B] opacity-[0.9] mobile-welcome-box">
          <h1 className="Welcome-text text-[10px] md:text-[12px]">Encryption</h1>
        </div>
      </div>

      <div className="absolute z-[20] bottom-[10px] px-[5px] mobile-section-padding">
        <div className="glitch-font text-base md:text-[20px] font-medium text-center text-gray-300 mobile-glitch-text">
          <span className="glitch" data-text="Fortified by intelligent automation.">
            Fortified by intelligent automation.
          </span>
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute overflow-hidden">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
        >
          <source src="/videos/encryption-bg.webm" type="video/webm" />
        </video>
      </div>
    </div>
  );
};