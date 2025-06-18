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
  // PERSIS SEPERTI GAMBAR: Sesuai dengan layout yang dikirim
  
  // Row 1: 11 icons (HTML, CSS, JS, Tailwind, React, Redux, React Query, TypeScript, Next.js, Framer, Node.js)
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

  // Row 2: 9 icons (HTML, CSS, JS, Tailwind, Material UI, React, Redux, React Query, TypeScript)
  const row2Skills = [
    SKILL_DATA[0], // HTML
    SKILL_DATA[1], // CSS
    SKILL_DATA[2], // JavaScript
    SKILL_DATA[3], // Tailwind
    FRONTEND_SKILL[4], // Material UI
    SKILL_DATA[4], // React
    SKILL_DATA[5], // Redux
    SKILL_DATA[6], // React Query
    SKILL_DATA[7], // TypeScript
    // HAPUS Next.js dari row 2!
  ];

  // Row 3: 6 icons (Node.js, Express.js, MongoDB, Firebase, PostgreSQL, MySQL)
  const row3Skills = [
    SKILL_DATA[11], // Node.js
    BACKEND_SKILL[1], // Express.js
    BACKEND_SKILL[2], // MongoDB
    BACKEND_SKILL[3], // Firebase
    BACKEND_SKILL[4], // PostgreSQL
    BACKEND_SKILL[5], // MySQL
    // HAPUS GraphQL dari row 3!
  ];

  // Row 4: 4 icons (React Native, Prisma, Docker, Figma)
  const row4Skills = [
    FULLSTACK_SKILL[0], // React Native
    BACKEND_SKILL[6], // Prisma
    FULLSTACK_SKILL[2], // Docker
    FULLSTACK_SKILL[3], // Figma
  ];

  // Row 5: 1 icon (Go sendirian)
  const row5Skills = [
    OTHER_SKILL[0], // Go
  ];

  return (
    <section
      id="skills"
      style={{ transform: "scale(0.9)" }}
      className="flex flex-col items-center justify-center gap-3 h-full relative py-10 md:py-20 mobile-section-padding mobile-section-spacing overflow-hidden"
    >
      <SkillText />

      {/* PERSIS SEPERTI GAMBAR: Pyramid dengan 5 baris */}
      <div className="pyramid-container-exact">
        
        {/* Row 1: 11 icons */}
        <div className="pyramid-row-1-exact">
          {row1Skills.map((skill, i) => (
            <SkillDataProvider
              key={`${skill.skill_name}-1-${i}`}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </div>

        {/* Row 2: 9 icons (BUKAN 10!) */}
        <div className="pyramid-row-2-exact">
          {row2Skills.map((skill, i) => (
            <SkillDataProvider
              key={`${skill.skill_name}-2-${i}`}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i + row1Skills.length}
            />
          ))}
        </div>

        {/* Row 3: 6 icons (BUKAN 7!) */}
        <div className="pyramid-row-3-exact">
          {row3Skills.map((skill, i) => (
            <SkillDataProvider
              key={`${skill.skill_name}-3-${i}`}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i + row1Skills.length + row2Skills.length}
            />
          ))}
        </div>

        {/* Row 4: 4 icons */}
        <div className="pyramid-row-4-exact">
          {row4Skills.map((skill, i) => (
            <SkillDataProvider
              key={`${skill.skill_name}-4-${i}`}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i + row1Skills.length + row2Skills.length + row3Skills.length}
            />
          ))}
        </div>

        {/* Row 5: 1 icon (Go sendirian) */}
        <div className="pyramid-row-5-exact">
          {row5Skills.map((skill, i) => (
            <SkillDataProvider
              key={`${skill.skill_name}-5-${i}`}
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