import { site, projects } from "../data";
import ProjectCard from "../ProjectCard";

export const metadata = { title: `Portfolio | ${site.name}` };

export default function Projects() {
  return (
    <>
      <h1 className="page-heading">
        <span className="script">selected</span>
        <span>Work</span>
      </h1>
      <p className="label page-kicker">File No. 02 — {projects.length} projects</p>
      <div className="files">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </>
  );
}
