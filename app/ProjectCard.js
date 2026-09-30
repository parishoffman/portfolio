import Link from "next/link";

const FOLDER_COLORS = ["var(--terracotta)", "var(--sky)", "var(--paper)"];

export default function ProjectCard({ project, index = 0 }) {
  const caseStudyHref = project.caseStudy ? `/projects/${project.slug}` : null;
  const number = String(index + 1).padStart(2, "0");
  const thumbnail = project.thumbnail || project.cover;

  const folder = (
    <>
      {thumbnail ? (
        <img className="file-photo" src={thumbnail} alt="" loading="lazy" />
      ) : (
        <span className="file-sheet grid-paper" aria-hidden="true" />
      )}
      <span className="file-tab label">No. {number}</span>
      <span className="file-front">
        {project.concept && <span className="label muted">Concept project</span>}
        <span className="project-title">{project.title}</span>
        <span className="file-description">{project.description}</span>
        <span className="label muted">{project.tags.join(" / ")}</span>
      </span>
    </>
  );

  return (
    <article className="file" style={{ "--tab": FOLDER_COLORS[index % FOLDER_COLORS.length] }}>
      {caseStudyHref ? (
        <Link href={caseStudyHref} className="file-folder">{folder}</Link>
      ) : (
        <div className="file-folder">{folder}</div>
      )}
      <div className="file-links label">
        {caseStudyHref && <Link href={caseStudyHref}>Open case study ⟶</Link>}
        {project.link && <a href={project.link}>Live site ⟶</a>}
        {project.repo && <a href={project.repo}>Code ⟶</a>}
      </div>
    </article>
  );
}
