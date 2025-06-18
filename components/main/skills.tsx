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
  // FINAL: MAKSIMAL 4 BARIS - TIDAK BOLEH ADA BARIS KE-5!
  
  // Row 1: 9 icons (baris paling atas)
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
  ];

  // Row 2: 8 icons
  const row2Skills = [
    SKILL_DATA[9],  // Framer
    SKILL_DATA[11], // Node.js
    FRONTEND_SKILL[4], // Material UI
    BACKEND_SKILL[0], // Node.js (duplicate, but different context)
    BACKEND_SKILL[1], // Express.js
    BACKEND_SKILL[2], // MongoDB
    BACKEND_SKILL[3], // Firebase
    BACKEND_SKILL[4], // PostgreSQL
  ];

  // Row 3: 6 icons
  const row3Skills = [
    BACKEND_SKILL[5], // MySQL
    BACKEND_SKILL[6], // Prisma
    BACKEND_SKILL[7], // GraphQL
    FULLSTACK_SKILL[0], // React Native
    FULLSTACK_SKILL[1], // Tauri
    FULLSTACK_SKILL[2], // Docker
  ];

  // Row 4: 3 icons (BARIS TERAKHIR - TIDAK ADA LAGI!)
  const row4Skills = [
    FULLSTACK_SKILL[3], // Figma
    OTHER_SKILL[0],     // Go
    SKILL_DATA[10],     // Stripe
  ];

  return (
    <section
      id="skills"
      style={{ transform: "scale(0.9)" }}
      className="flex flex-col items-center justify-center gap-3 h-full relative py-10 md:py-20 mobile-section-padding mobile-section-spacing overflow-hidden"
    >
      <SkillText />

      {/* FINAL: MAKSIMAL 4 BARIS SAJA! */}
      <div className="perfect-pyramid-container">
        
        {/* Row 1: 9 icons (paling atas - paling panjang) */}
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

        {/* Row 2: 8 icons */}
        <div className="perfect-row-2">
          {row2Skills.map((skill, i) => (
            <SkillDataProvider
              key={`${skill.skill_name}-${i}`}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i + row1Skills.length}
            />
          ))}
        </div>

        {/* Row 3: 6 icons */}
        <div className="perfect-row-3">
          {row3Skills.map((skill, i) => (
            <SkillDataProvider
              key={`${skill.skill_name}-${i}`}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i + row1Skills.length + row2Skills.length}
            />
          ))}
        </div>

        {/* Row 4: 3 icons (BARIS TERAKHIR - TIDAK ADA LAGI SETELAH INI!) */}
        <div className="perfect-row-4">
          {row4Skills.map((skill, i) => (
            <SkillDataProvider
              key={`${skill.skill_name}-${i}`}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i + row1Skills.length + row2Skills.length + row3Skills.length}
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