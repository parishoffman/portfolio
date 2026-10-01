import { pad, Hero, Section, Gallery, Results, NextStep, Downloads, Disclosure } from "./blocks";

// Custom layout for the Reale Actives × Sephora case study.
// Content lives in app/data.js under the project's caseStudy.

const Challenge = ({ cs }) => <Section section={cs.challenge} number={1} />;
const Goals = ({ cs }) => <Section section={cs.goals} number={2} />;

function SephoraCriteria({ cs }) {
  const s = cs.sephoraCriteria;
  return (
    <section className="doc-section criteria-section">
      <span className="label">No. {pad(3)}</span>
      <div>
        {s.eyebrow && <p className="label eyebrow">{s.eyebrow}</p>}
        <h2>{s.heading}</h2>
        {s.intro && <p className="lead">{s.intro}</p>}

        <dl className="criteria">
          {s.criteria.map((item) => (
            <div key={item.title} className="criteria-row">
              <dt className="label">{item.title}</dt>
              <dd>
                <span className="criteria-question">{item.question}</span>
                {item.description}
              </dd>
            </div>
          ))}
        </dl>

        {s.conclusion && (
          <div className="callout">
            <p className="label">{s.conclusion.label}</p>
            <p className="display-headline">{s.conclusion.text}</p>
          </div>
        )}

        {s.source && (
          <a className="label source-link" href={s.source.href} target="_blank" rel="noopener noreferrer">
            {s.source.label}
          </a>
        )}
      </div>
    </section>
  );
}
function WhiteSpace({ cs }) {
  const s = cs.whiteSpace;
  return (
    <section className="doc-section white-space">
      <span className="label">No. {pad(4)}</span>
      <div>
        {s.eyebrow && <p className="label eyebrow">{s.eyebrow}</p>}
        <h2>{s.heading}</h2>
        {s.intro && <p className="lead">{s.intro}</p>}
      </div>

      <figure className="position-map">
        <div className="axis-labels label">
          <span className="axis-start">{s.axis.left}</span>
          <span className="axis-end">{s.axis.right}</span>
        </div>

        <ol className="axis">
          {s.brands.map((brand) => (
            <li
              key={brand.name}
              className={brand.highlight ? "axis-point is-highlight" : "axis-point"}
              style={{ "--pos": `${brand.position}%` }}
            >
              <span className="axis-name">{brand.name}</span>
              {brand.annotation && <span className="script axis-annotation">↑ {brand.annotation}</span>}
            </li>
          ))}
        </ol>

        {s.opportunity && (
          <figcaption className="opportunity">
            <span className="label">{s.opportunity.label}</span>
            <p>
              {s.opportunity.lines.map((line, i) => (
                <span key={i}>{line}</span>
              ))}
            </p>
          </figcaption>
        )}
      </figure>

      {s.note && <p className="note white-space-note">{s.note}</p>}
    </section>
  );
}

const AudienceInsight = ({ cs }) => <Section section={cs.audienceInsight} number={5} />;
// The break from the report: research is done, the campaign starts here.
function BigIdea({ cs }) {
  const s = cs.bigIdea;
  return (
    <section id="big-idea" className="big-idea">
      <p className="label big-idea-meta">
        <span>No. {pad(6)}</span>
        <span>{s.heading}</span>
      </p>

      <h2 className="big-idea-headline">
        {s.headline.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </h2>

      <ol className="big-idea-pillars">
        {s.pillars.map((pillar) => (
          <li key={pillar.title}>
            <span className="label">{pillar.title}</span>
            <span className="big-idea-pillar-text">{pillar.text}</span>
          </li>
        ))}
      </ol>

      {s.body?.map((paragraph, i) => (
        <p key={i} className="big-idea-body">{paragraph}</p>
      ))}
    </section>
  );
}
const HowItWorks = ({ cs }) => <Section section={cs.howItWorks} number={7} />;
const LaunchPlan = ({ cs }) => <Section section={cs.launchPlan} number={8} />;

const PilotMeasurement = ({ cs }) => (
  <>
    <Section section={cs.pilotMeasurement} number={9} />
    <Results items={cs.results} heading={cs.resultsHeading} note={cs.resultsNote} />
  </>
);

const CreativeWork = ({ cs }) => <Gallery items={cs.deliverables} />;

export default function RealeSephora({ project, number }) {
  const cs = project.caseStudy;
  return (
    <>
      <Hero project={project} number={number} />
      <Challenge cs={cs} />
      <Goals cs={cs} />

      <SephoraCriteria cs={cs} />
      <WhiteSpace cs={cs} />

      <AudienceInsight cs={cs} />
      <BigIdea cs={cs} />
      <HowItWorks cs={cs} />
      <LaunchPlan cs={cs} />
      <PilotMeasurement cs={cs} />
      <CreativeWork cs={cs} />

      <NextStep text={cs.nextStep} />
      <Downloads files={cs.downloads} />
      <Disclosure paragraphs={cs.disclosure} />
    </>
  );
}
