import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { ProjectArtwork } from "@/components/portfolio/ProjectArtwork";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
};

export function ProjectCard({ project, index, onSelect }: ProjectCardProps) {
  return (
    <article className={`project-card project-card--${index + 1}`} data-reveal>
      <button
        type="button"
        className="project-card__button"
        onClick={() => onSelect(project)}
        aria-label={`Abrir estudo de caso temporário: ${project.title}`}
      >
        <ProjectArtwork variant={project.cover} id={project.title} className="project-card__art" />
        <span className="project-card__shade" aria-hidden="true" />
        <span className="project-card__topline">
          <span>{project.id}</span>
          <span>{project.year}</span>
        </span>
        <span className="project-card__meta">
          <span>
            <small>{project.category}</small>
            <strong>{project.title}</strong>
          </span>
          <span className="project-card__action">
            Ver case <ArrowIcon />
          </span>
        </span>
      </button>
    </article>
  );
}
