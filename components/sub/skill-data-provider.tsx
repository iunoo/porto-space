"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

type SkillDataProviderProps = {
  src: string;
  name: string;
  width: number;
  height: number;
  index: number;
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  index,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.1;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
      className="skill-icon-container mobile-skill-icon"
      title={name}
    >
      <Image 
        src={`/skills/${src}`} 
        width={width} 
        height={height} 
        alt={name}
        className="w-auto h-auto object-contain"
        onError={(e) => {
          console.error(`Failed to load skill icon: /skills/${src}`);
          // Fallback to a placeholder or hide the image
          e.currentTarget.style.display = 'none';
        }}
        priority={index < 6} // Prioritize first 6 images
      />
    </motion.div>
  );
};