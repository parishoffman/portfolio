import { pad, Hero, Section, Results, NextStep, Downloads, Disclosure } from "./blocks";

// Custom layout for the Reale Actives × Sephora case study.
// Content lives in app/data.js under the project's caseStudy.
// Section numbers come from the order in `sections` at the bottom of this file.

const Challenge = ({ cs, number }) => <Section section={cs.challenge} number={number} />;
const Goals = ({ cs, number }) => <Section section={cs.goals} number={number} />;

function SephoraCriteria({ cs, number }) {
  const s = cs.sephoraCriteria;
  return (
    <section className="doc-section criteria-section">
      <span className="label">No. {pad(number)}</span>
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

function WhiteSpace({ cs, number }) {
  const s = cs.whiteSpace;
  return (
    <section className="doc-section white-space">
      <span className="label">No. {pad(number)}</span>
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

const AudienceInsight = ({ cs, number }) => <Section section={cs.audienceInsight} number={number} />;

// The break from the report: research is done, the campaign starts here.
function BigIdea({ cs, number }) {
  const s = cs.bigIdea;
  return (
    <section id="big-idea" className="big-idea">
      <p className="label big-idea-meta">
        <span>No. {pad(number)}</span>
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

const HowItWorks = ({ cs, number }) => <Section section={cs.howItWorks} number={number} />;
const LaunchPlan = ({ cs, number }) => <Section section={cs.launchPlan} number={number} />;

// The bridge from strategy to execution: one template, repeated across life moments.
function CampaignSystem({ cs, number }) {
  const s = cs.campaignSystem;
  return (
    <section className="doc-section campaign-system">
      <span className="label">No. {pad(number)}</span>
      <div>
        {s.eyebrow && <p className="label eyebrow">{s.eyebrow}</p>}
        <h2>{s.heading}</h2>
        {s.intro && <p className="lead">{s.intro}</p>}
      </div>

      <div className="system">
        {s.formula && (
          <ol className="system-formula label">
            {s.formula.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        )}

        <ul className="system-tiles">
          {s.situations.map((item, i) => (
            <li key={item.need} className="system-tile">
              <p className="label system-tile-meta">
                <span>{s.tileLabel}</span>
                <span>{pad(i + 1)} / {pad(s.situations.length)}</span>
              </p>
              <p className="system-tile-headline">
                {item.headline.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </p>
              <p className="system-tile-need">
                {item.need} <span aria-hidden="true">→</span> <strong>{item.startingPoint}</strong>
              </p>
              {s.signoff && <p className="script system-tile-signoff">{s.signoff}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// Executions grouped by channel, so the work reads as one integrated campaign.
function CreativeExecutions({ cs, number }) {
  const s = cs.creativeExecutions;
  return (
    <section className="doc-section creative-executions">
      <span className="label">No. {pad(number)}</span>
      <div>
        <h2>{s.heading}</h2>
        {s.intro && <p className="lead">{s.intro}</p>}
      </div>

      <div className="chapters">
        {s.chapters.map((chapter, i) => (
          <section key={chapter.title} className="chapter">
            <header className="chapter-header">
              <span className="label">Chapter {String.fromCharCode(65 + i)}</span>
              <div>
                <h3>{chapter.title}</h3>
                {chapter.description && <p>{chapter.description}</p>}
              </div>
            </header>
            <div className="chapter-grid">
              {chapter.items.map((item) => (
                <Execution key={item.title} item={item} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

function Execution({ item }) {
  if (!item.image) {
    return (
      <figure className="execution execution-planned">
        <div className="execution-slot label">Coming soon</div>
        <figcaption>
          <strong>{item.title}</strong>
          <span>{item.description}</span>
        </figcaption>
      </figure>
    );
  }
  return (
    <figure className="execution polaroid">
      <img src={item.image} alt={`${item.title}: ${item.description}`} loading="lazy" />
      <figcaption>
        <strong>{item.title}</strong>
        <span>{item.description}</span>
      </figcaption>
    </figure>
  );
}

function ValueForBoth({ cs, number }) {
  const s = cs.valueForBoth;
  return (
    <section className="doc-section value-for-both">
      <span className="label">No. {pad(number)}</span>
      <div>
        <h2>{s.heading}</h2>

        <div className="value-columns">
          {s.columns.map((column) => (
            <div key={column.title}>
              <h3>{column.title}</h3>
              <ul className="line-list">
                {column.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {s.conclusion && (
          <div className="callout">
            <p className="display-headline">{s.conclusion}</p>
          </div>
        )}
      </div>
    </section>
  );
}

const PilotMeasurement = ({ cs, number }) => (
  <>
    <Section section={cs.pilotMeasurement} number={number} />
    <Results items={cs.results} heading={cs.resultsHeading} note={cs.resultsNote} />
  </>
);

// Page order. Each section renders only when its content key exists in data.js,
// and is numbered by its position among the sections that render.
const sections = [
  ["challenge", Challenge],
  ["goals", Goals],
  ["sephoraCriteria", SephoraCriteria],
  ["whiteSpace", WhiteSpace],
  ["audienceInsight", AudienceInsight],
  ["bigIdea", BigIdea],
  ["howItWorks", HowItWorks],
  ["launchPlan", LaunchPlan],
  ["campaignSystem", CampaignSystem],
  ["creativeExecutions", CreativeExecutions],
  ["valueForBoth", ValueForBoth],
  ["pilotMeasurement", PilotMeasurement],
];

export default function RealeSephora({ project, number }) {
  const cs = project.caseStudy;
  const present = sections.filter(([key]) => cs[key]);
  return (
    <>
      <Hero project={project} number={number} />

      {present.map(([key, Component], i) => (
        <Component key={key} cs={cs} number={i + 1} />
      ))}

      <NextStep text={cs.nextStep} />
      <Downloads files={cs.downloads} />
      <Disclosure paragraphs={cs.disclosure} />
    </>
  );
}
