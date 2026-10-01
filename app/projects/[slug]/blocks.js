import Paperclip from "../../Paperclip";

// Shared building blocks for case study pages.

export const pad = (n) => String(n).padStart(2, "0");

export function Hero({ project, number }) {
  const cs = project.caseStudy;
  return (
    <>
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

      {cs.overview && <p className="lead">{cs.overview}</p>}

      {cs.facts?.length > 0 && (
        <dl className="facts">
          {cs.facts.map((fact) => (
            <div key={fact.label}>
              <dt className="label">{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      )}
    </>
  );
}

// A numbered section. Content can have paragraphs ("body"), a pull quote ("quote"),
// a small print note ("note") and bullet points ("list").
export function Section({ section, number, children }) {
  if (!section) return null;
  return (
    <section className="doc-section">
      <span className="label">No. {pad(number)}</span>
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
        {children}
      </div>
    </section>
  );
}

export function Gallery({ items, heading = "The work — creative & deliverables" }) {
  if (!items?.length) return null;
  return (
    <section className="doc-block">
      <p className="label">{heading}</p>
      <div className="gallery">
        {items.map((item) => (
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
  );
}

export function Results({ items, heading = "Results", note }) {
  if (!items?.length) return null;
  return (
    <section className="doc-block">
      <p className="label">{heading}</p>
      <div className="stats">
        {items.map((result) => (
          <div key={result.label} className="stat">
            <span className="stat-value">{result.value}</span>
            <span className="label">{result.label}</span>
          </div>
        ))}
      </div>
      {note && <p className="note">{note}</p>}
    </section>
  );
}

export function NextStep({ text }) {
  if (!text) return null;
  return (
    <section className="doc-block center">
      <p className="label">Next step</p>
      <p className="display-headline">{text}</p>
    </section>
  );
}

export function Takeaways({ items }) {
  if (!items?.length) return null;
  return (
    <section className="doc-block">
      <p className="label">Takeaways</p>
      <ul className="line-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export function Downloads({ files }) {
  if (!files?.length) return null;
  return (
    <section className="doc-block center">
      <p className="label">See the full pitch</p>
      <div className="buttons">
        {files.map((file) => (
          <a key={file.href} href={file.href} className="button" target="_blank" rel="noopener">
            {file.label}
          </a>
        ))}
      </div>
    </section>
  );
}

export function Disclosure({ paragraphs }) {
  if (!paragraphs?.length) return null;
  return (
    <aside className="sticky-note">
      <p className="label">About this project</p>
      {paragraphs.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
    </aside>
  );
}
