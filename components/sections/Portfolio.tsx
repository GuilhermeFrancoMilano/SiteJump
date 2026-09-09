"use client";

import { useRef, useState } from "react";
import { CaseStudyModal } from "@/components/portfolio/CaseStudyModal";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { projects, type Project } from "@/data/projects";

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);
  const returnFocusRef = useRef<HTMLButtonElement | null>(null);

  const selectProject = (project: Project) => {
    if (document.activeElement instanceof HTMLButtonElement) {
      returnFocusRef.current = document.activeElement;
    }
    setSelectedProject(project);
    setOpen(true);
  };

  return (
    <section className="portfolio section-shell" id="projetos" aria-labelledby="portfolio-title">
      <div className="portfolio__header shell">
        <SectionLabel index="03 / SELECTED WORK">PORTFÓLIO</SectionLabel>
        <div>
          <h2 id="portfolio-title" data-reveal>
            Projetos
            <span>selecionados.</span>
          </h2>
          <p data-reveal>
            Estratégia aplicada. Criação com propósito. Performance acompanhada de perto.
          </p>
        </div>
      </div>

      <div className="portfolio__grid shell">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} onSelect={selectProject} />
        ))}
      </div>

      <p className="portfolio__notice shell">
        [ Os visuais e conteúdos acima são placeholders preparados para receber os cases reais. ]
      </p>

      <CaseStudyModal
        project={selectedProject}
        open={open}
        onOpenChange={setOpen}
        returnFocusRef={returnFocusRef}
      />
    </section>
  );
}
