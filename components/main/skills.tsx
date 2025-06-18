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
  // Distribusi skills dalam bentuk pyramid terbalik (seperti gambar)
  // Row 1: 13 icons (SKILL_DATA)
  const row1Skills = SKILL_DATA; // 13 icons

  // Row 2: 10 icons (FRONTEND_SKILL)  
  const row2Skills = FRONTEND_SKILL; // 10 icons

  // Row 3: 8 icons (BACKEND_SKILL)
  const row3Skills = BACKEND_SKILL; // 8 icons

  // Row 4: 4 icons (FULLSTACK_SKILL)
  const row4Skills = FULLSTACK_SKILL; // 4 icons

  // Row 5: 1 icon (OTHER_SKILL)
  const row5Skills = OTHER_SKILL; // 1 icon

  return (
    <section
      id="skills"
      style={{ transform: "scale(0.9)" }}
      className="flex flex-col items-center justify-center gap-3 h-full relative py-10 md:py-20 mobile-section-padding mobile-section-spacing overflow-hidden"
    >
      <SkillText />

      {/* PERFECT: Pyramid Inverted Layout - Persis Seperti Gambar */}
      <div className="skills-pyramid-container">
        
        {/* Row 1: 13 icons (paling atas - paling panjang) */}
        <div className="skills-row-1">
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
        <div className="skills-row-2">
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
        <div className="skills-row-3">
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
        <div className="skills-row-4">
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
        <div className="skills-row-5">
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