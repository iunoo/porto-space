import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-10 md:py-20 mobile-section-padding mobile-section-spacing"
    >
      <h1 className="text-2xl md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 md:py-20 text-center">
        Selected Works by Syahbandi
      </h1>
      <p className="text-gray-400 text-base md:text-lg mb-6 md:mb-10 text-center max-w-2xl mobile-section-padding">
        Explore a curated collection of apps, tools, and smart solutions I've built.
      </p>
      <div className="h-full w-full flex flex-col md:flex-row gap-6 md:gap-10 px-4 md:px-10">
        {PROJECTS.map((project) => (
          <div key={project.title} className="mobile-project-card">
            <ProjectCard
              src={project.image}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
            />
          </div>
        ))}
      </div>
    </section>
  );
};