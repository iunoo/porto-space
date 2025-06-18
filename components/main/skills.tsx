import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import {
  BACKEND_SKILL,
  FRONTEND_SKILL,
  FULLSTACK_SKILL,
  OTHER_SKILL,
  SKILL_DATA,
} from "@/constants";

export const Skills = () => {
  // PERFECT: Distribusi skills persis seperti gambar
  // Row 1: 11 icons (baris paling atas - paling panjang)
  const row1Skills = [
    SKILL_DATA[0], // HTML
    SKILL_DATA[1], // CSS  
    SKILL_DATA[2], // JavaScript
    SKILL_DATA[3], // Tailwind
    SKILL_DATA[4], // React
    SKILL_DATA[5], // Redux
    SKILL_DATA[6], // React Query
    SKILL_DATA[7], // TypeScript
    SKILL_DATA[8], // Next.js
    SKILL_DATA[9], // Framer
    SKILL_DATA[11], // Node.js
  ];

  // Row 2: 10 icons
  const row2Skills = FRONTEND_SKILL;

  // Row 3: 8 icons  
  const row3Skills = BACKEND_SKILL;

  // Row 4: 4 icons
  const row4Skills = FULLSTACK_SKILL;

  // Row 5: 1 icon (puncak pyramid)
  const row5Skills = OTHER_SKILL;

  return (
    <section
      id="skills"
      style={{ transform: "scale(0.9)" }}
      className="flex flex-col items-center justify-center gap-3 h-full relative py-10 md:py-20 mobile-section-padding mobile-section-spacing overflow-hidden"
    >
      <SkillText />

      {/* PERFECT: Pyramid Inverted Layout - Persis Seperti Gambar */}
      <div className="perfect-pyramid-container">
        
        {/* Row 1: 11 icons (paling atas - paling panjang) */}
        <div className="perfect-row-1">
          {row1Skills.map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </div>

        {/* Row 2: 10 icons */}
        <div className="perfect-row-2">
          {row2Skills.map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i + row1Skills.length}
            />
          ))}
        </div>

        {/* Row 3: 8 icons */}
        <div className="perfect-row-3">
          {row3Skills.map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i + row1Skills.length + row2Skills.length}
            />
          ))}
        </div>

        {/* Row 4: 4 icons */}
        <div className="perfect-row-4">
          {row4Skills.map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i + row1Skills.length + row2Skills.length + row3Skills.length}
            />
          ))}
        </div>

        {/* Row 5: 1 icon (paling bawah - puncak pyramid) */}
        <div className="perfect-row-5">
          {row5Skills.map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i + row1Skills.length + row2Skills.length + row3Skills.length + row4Skills.length}
            />
          ))}
        </div>

      </div>

      {/* Background Video */}
      <div className="w-full h-full absolute overflow-hidden">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover overflow-hidden">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};