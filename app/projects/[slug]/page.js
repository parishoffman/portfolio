import Link from "next/link";
import { notFound } from "next/navigation";
import { site, projects } from "../../data";
import Paperclip from "../../Paperclip";

const caseStudies = projects.filter((p) => p.caseStudy);

export function generateStaticParams() {
  return caseStudies.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = caseStudies.find((p) => p.slug === slug);
  return {
    title: project ? `${project.title} | ${site.name}` : site.name,
    description: project?.description,
  };
}

const pad = (n) => String(n).padStart(2, "0");

export default async function CaseStudy({ params }) {
  const { slug } = await params;
  const project = caseStudies.find((p) => p.slug === slug);
  if (!project) notFound();

  const cs = project.caseStudy;
  const number = pad(projects.indexOf(project) + 1);

  return (
    <>
      <p className="back-link"><Link href="/projects" className="label">⟵ Back to all work</Link></p>

      <article className="document">
        <header className="document-header">
          <div className="document-meta label">
            <span>File No. {number}</span>
            {project.concept && <span className="sticker">Concept project</span>}
          </div>
          <h1 className="document-title">{project.title}</h1>
          {cs.subtitle && <p className="script document-subtitle">{cs.subtitle}</p>}
        </header>

        {project.cover && (
          <figure className="clipped-photo">
            <Paperclip />
            <img src={project.cover} alt={`${project.title} campaign key visual`} />
          </figure>
        )}

        <p className="lead">{cs.overview}</p>

        <dl className="facts">
          {cs.facts.map((fact) => (
            <div key={fact.label}>
              <dt className="label">{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>

        {cs.sections.map((section, i) => (
          <section key={section.heading} className="doc-section">
            <span className="label">No. {pad(i + 1)}</span>
            <div>
              <h2>{section.heading}</h2>
              {section.body?.map((paragraph, j) => (
                <p key={j}>{paragraph}</p>
              ))}
              {section.quote && <blockquote className="pull-quote">“{section.quote}”</blockquote>}
              {section.note && <p className="note">{section.note}</p>}
              {section.list && (
                <ul className="line-list">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        ))}

        {cs.deliverables?.length > 0 && (
          <section className="doc-block">
            <p className="label">The work — creative & deliverables</p>
            <div className="gallery">
              {cs.deliverables.map((item) => (
                <figure key={item.title} className="polaroid gallery-item">
                  {item.image ? (
                    <img src={item.image} alt={`${item.title}: ${item.description}`} loading="lazy" />
                  ) : (
                    <div className="polaroid-empty label">Image coming soon</div>
                  )}
                  <figcaption>
                    <strong>{item.title}</strong>
                    <span>{item.description}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {cs.results?.length > 0 && (
          <section className="doc-block">
            <p className="label">{cs.resultsHeading || "Results"}</p>
            <div className="stats">
              {cs.results.map((result) => (
                <div key={result.label} className="stat">
                  <span className="stat-value">{result.value}</span>
                  <span className="label">{result.label}</span>
                </div>
              ))}
            </div>
            {cs.resultsNote && <p className="note">{cs.resultsNote}</p>}
          </section>
        )}

        {cs.nextStep && (
          <section className="doc-block center">
            <p className="label">Next step</p>
            <p className="display-headline">{cs.nextStep}</p>
          </section>
        )}

        {cs.takeaways?.length > 0 && (
          <section className="doc-block">
            <p className="label">Takeaways</p>
            <ul className="line-list">
              {cs.takeaways.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {cs.downloads?.length > 0 && (
          <section className="doc-block center">
            <p className="label">See the full pitch</p>
            <div className="buttons">
              {cs.downloads.map((file) => (
                <a key={file.href} href={file.href} className="button" target="_blank" rel="noopener">
                  {file.label}
                </a>
              ))}
            </div>
          </section>
        )}

        {cs.disclosure?.length > 0 && (
          <aside className="sticky-note">
            <p className="label">About this project</p>
            {cs.disclosure.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </aside>
        )}
      </article>
    </>
  );
}
