"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  tags?: string[];
  link: string;
  index: number;
};

export const ProjectCard = ({
  src,
  title,
  description,
  tags,
  link,
  index,
}: ProjectCardProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="w-full h-full"
    >
      <Link
        href={link ?? ''}
        target="_blank"
        rel="noreferrer noopener"
        className="block relative overflow-hidden rounded-2xl shadow-2xl border border-[#2A0E61]/50 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:scale-[1.02] group h-full"
      >
        {/* Glassmorphism background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border border-white/10 rounded-2xl" />
        
        {/* Animated border gradient */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
        
        {/* Content container */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Image container with blur effect for stars */}
          <div className="relative overflow-hidden rounded-t-2xl">
            <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px] z-10" />
            <Image
              src={src}
              alt={title}
              width={400}
              height={250}
              className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-20" />
          </div>

          {/* Content */}
          <div className="relative p-6 flex-1 flex flex-col justify-between">
            {/* Glass overlay for content area */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 backdrop-blur-sm rounded-b-2xl" />
            
            <div className="relative z-10">
              <h1 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                {title}
              </h1>
              <p className="text-gray-300 mb-4 text-sm md:text-base leading-relaxed">
                {description}
              </p>
            </div>
            
            {/* Tags */}
            {tags && tags.length > 0 && (
              <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
                {tags.map((tag, tagIndex) => (
                  <motion.span
                    key={tagIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: index * 0.2 + tagIndex * 0.1 }}
                    className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-purple-600/30 to-cyan-600/30 text-purple-200 rounded-full border border-purple-500/30 backdrop-blur-sm hover:from-purple-600/50 hover:to-cyan-600/50 transition-all duration-300"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            )}
          </div>

          {/* Hover glow effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-cyan-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-500 pointer-events-none" />
        </div>
      </Link>
    </motion.div>
  );
};