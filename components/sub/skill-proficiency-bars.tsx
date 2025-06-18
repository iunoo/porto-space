"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SKILL_PROFICIENCY = [
  { name: "Frontend Development", level: 95, color: "from-blue-500 to-cyan-500" },
  { name: "Backend Development", level: 88, color: "from-green-500 to-emerald-500" },
  { name: "AI Integration", level: 92, color: "from-purple-500 to-pink-500" },
  { name: "System Architecture", level: 85, color: "from-orange-500 to-red-500" },
  { name: "Database Design", level: 90, color: "from-indigo-500 to-purple-500" },
  { name: "DevOps & Deployment", level: 82, color: "from-yellow-500 to-orange-500" },
] as const;

export const SkillProficiencyBars = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="w-full max-w-4xl mx-auto mb-8 px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-xl md:text-2xl font-semibold text-white mb-6 text-center">
        Skill Proficiency
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SKILL_PROFICIENCY.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="space-y-2"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="flex justify-between items-center">
              <span className="text-gray-300 font-medium text-sm md:text-base">
                {skill.name}
              </span>
              <span className="text-gray-400 text-sm">
                {skill.level}%
              </span>
            </div>
            
            <div className="w-full bg-gray-700/30 rounded-full h-2 overflow-hidden backdrop-blur-sm">
              <motion.div
                className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                initial={{ width: 0 }}
                animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{ duration: 1.2, delay: index * 0.1 + 0.3, ease: "easeOut" }}
              >
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.1 + 1.5,
                    ease: "linear",
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};