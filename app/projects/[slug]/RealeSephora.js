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
  const map = s.map;
  return (
    <section className="doc-section white-space">
      <span className="label">No. {pad(number)}</span>
      <div>
        {s.eyebrow && <p className="label eyebrow">{s.eyebrow}</p>}
        <h2>{s.heading}</h2>
        {s.body?.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <figure className="quadrant-map">
        <figcaption className="quadrant-title">{map.title}</figcaption>
        <div className="quadrant-chart">
          <div className="quadrant-y label">
            <span>{map.y.high}</span>
            <span>{map.y.low}</span>
          </div>
          <div className="quadrant-plot">
            <ul className="quadrant-zones">
              {map.zones.map((zone) => (
                <li key={zone.title} className={zone.highlight ? "is-highlight" : undefined}>
                  <strong>{zone.title}</strong>
                  <span>{zone.text}</span>
                </li>
              ))}
            </ul>
            {map.brands?.map((brand) => (
              <span
                key={brand.name}
                className="quadrant-dot"
                style={{ left: `${brand.x}%`, bottom: `${brand.y}%` }}
              >
                <span>{brand.name}</span>
              </span>
            ))}
          </div>
          <div className="quadrant-x label">
            <span>{map.x.low}</span>
            <span>{map.x.high}</span>
          </div>
        </div>
      </figure>

      {s.note && <p className="note white-space-note">{s.note}</p>}
    </section>
  );
}

function AudienceInsight({ cs, number }) {
  const s = cs.audienceInsight;
  const e = s.evidence;
  return (
    <Section section={s} number={number}>
      {e && (
        <div className="evidence">
          <h3 className="list-heading">{e.heading}</h3>
          {e.intro && <p>{e.intro}</p>}
          <div className="stats">
            {e.stats.map((stat) => (
              <div key={stat.value} className="stat">
                <span className="stat-value">{stat.value}</span>
                <span className="evidence-label">{stat.label}</span>
              </div>
            ))}
          </div>
          {e.conclusion && <p className="evidence-conclusion">{e.conclusion}</p>}
          {e.sources?.map((source) => (
            <a key={source.href} className="label source-link" href={source.href} target="_blank" rel="noopener noreferrer">
              {source.label}
            </a>
          ))}
        </div>
      )}
      {s.ageNote && <p className="note">{s.ageNote}</p>}
    </Section>
  );
}

// The break from the report: research is done, the campaign starts here.
function BigIdea({ cs, number }) {
  const s = cs.bigIdea;
  return (
    <section id="big-idea" className="band band-green big-idea">
      <p className="label band-meta">
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

// Numbered steps. A step can carry starting-point "options" (need → product)
// or labelled "choices" (e.g. Option A / Option B).
function Steps({ steps }) {
  return (
    <ol className="steps">
      {steps.map((step, i) => (
        <li key={step.title}>
          <span className="label">{pad(i + 1)}</span>
          <div>
            <strong>{step.title}</strong> {step.text}
            {step.options && (
              <ul className="step-options">
                {step.options.map((option) => (
                  <li key={option.product}>
                    <span>{option.need}</span>
                    <span aria-hidden="true">→</span>
                    <span>
                      <strong>{option.product}</strong> {option.detail}
                    </span>
                  </li>
                ))}
              </ul>
            )}
            {step.choices && (
              <ul className="step-options step-choices">
                {step.choices.map((choice) => (
                  <li key={choice.label}>
                    <span className="label">{choice.label}</span>
                    <span>{choice.text}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

function HowItWorks({ cs, number }) {
  const s = cs.howItWorks;
  return (
    <section className="doc-section how-it-works">
      <span className="label">No. {pad(number)}</span>
      <div>
        <h2>{s.heading}</h2>
        <Steps steps={s.steps} />
      </div>
    </section>
  );
}
function LaunchPlan({ cs, number }) {
  const s = cs.launchPlan;
  return (
    <section className="doc-section launch-plan">
      <span className="label">No. {pad(number)}</span>
      <div>
        <h2>{s.heading}</h2>
        {s.timing && (
          <p className="launch-timing">
            <span className="label">Timing</span>
            {s.timing}
          </p>
        )}
        <Steps steps={s.steps} />

        {s.guardrails && (
          <aside id="guardrails" className="guardrails">
            <p className="label">{s.guardrails.title}</p>
            <ul>
              {s.guardrails.list.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong> {item.text}
                </li>
              ))}
            </ul>
          </aside>
        )}
      </div>
    </section>
  );
}

// The bridge from strategy to execution: one template, repeated across life moments.
function CampaignSystem({ cs, number }) {
  const s = cs.campaignSystem;
  return (
    <section className="band band-green campaign-system">
      <p className="label band-meta">
        <span>No. {pad(number)}</span>
        <span>{s.eyebrow}</span>
      </p>
      <h2 className="band-headline">
        {s.headline.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </h2>
      {s.intro && <p className="lead">{s.intro}</p>}

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
          {s.template && (
            <li className="system-tile is-template">
              <p className="label system-tile-meta">
                <span>{s.template.label}</span>
                <span>{s.template.count}</span>
              </p>
              <p className="system-tile-headline">
                {s.template.headline.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </p>
              <p className="system-tile-need">
                {s.template.need} <span aria-hidden="true">→</span> <strong>{s.template.startingPoint}</strong>
              </p>
              {s.signoff && <p className="script system-tile-signoff">{s.signoff}</p>}
            </li>
          )}
        </ul>
      </div>
    </section>
  );
}

// Executions grouped by channel, so the work reads as one integrated campaign.
function CreativeExecutions({ cs, number }) {
  const s = cs.creativeExecutions;
  return (
    <section className="band band-dark creative-executions">
      <p className="label band-meta">
        <span>No. {pad(number)}</span>
        <span>The work</span>
      </p>
      <h2 className="creative-heading">{s.heading}</h2>
      {s.intro && <p className="lead">{s.intro}</p>}

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
              {chapter.items.map((item, j) => (
                <Execution key={item.title} item={item} featured={j === 0} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

// The first item in each chapter is shown large and unframed; the rest as polaroids.
function Execution({ item, featured }) {
  const featuredClass = featured ? " is-featured" : "";
  if (!item.image) {
    return (
      <figure className={`execution execution-planned${featuredClass}`}>
        <div className="execution-slot label">Coming soon</div>
        <figcaption>
          <strong>{item.title}</strong>
          <span>{item.description}</span>
        </figcaption>
      </figure>
    );
  }
  return (
    <figure className={featured ? "execution is-featured" : "execution polaroid"}>
      <img src={item.image} alt={`${item.title}: ${item.description}`} loading="lazy" />
      <figcaption>
        <strong>{item.title}</strong>
        <span>{item.description}</span>
      </figcaption>
    </figure>
  );
}

// A ruled table: a heading, column names, and rows as arrays. The first cell of each
// row is its label; "questions" sets those labels in serif instead of small caps.
// Rows stack into blocks on phones.
function DataTable({ table, questions }) {
  const [first, ...rest] = table.columns;
  return (
    <div className={questions ? "data-table has-questions" : "data-table"}>
      <h3 className="list-heading">{table.heading}</h3>
      <table>
        <thead>
          <tr>
            <th scope="col" className="label">{first}</th>
            {rest.map((column) => (
              <th key={column} scope="col">{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map(([label, ...cells]) => (
            <tr key={label}>
              <th scope="row" className={questions ? undefined : "label"}>{label}</th>
              {cells.map((cell, i) => (
                <td key={i} data-label={rest[i]}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {table.note && <p className="note">{table.note}</p>}
    </div>
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

        {s.responsibilities && <DataTable table={s.responsibilities} />}

        {s.conclusion && (
          <div className="callout">
            <p className="display-headline">{s.conclusion}</p>
          </div>
        )}
      </div>
    </section>
  );
}

// Back to the report: each measure answers a question from the strategy.
function PilotMeasurement({ cs, number }) {
  const s = cs.pilotMeasurement;
  return (
    <>
      <Section section={s} number={number}>
        {s.scorecard && <DataTable table={s.scorecard} questions />}
      </Section>
      <Results items={cs.results} heading={cs.resultsHeading} note={cs.resultsNote} />
    </>
  );
}

// A strategist's ending: what to scale if the pilot proves out.
function TestNext({ section }) {
  if (!section) return null;
  return (
    <section className="doc-block test-next">
      <p className="label">{section.label}</p>
      <h2>{section.heading}</h2>
      <ol className="test-next-list">
        {section.list.map((item, i) => (
          <li key={item}>
            <span className="label">{pad(i + 1)}</span>
            <span>{item}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

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

      <TestNext section={cs.testNext} />
      <NextStep text={cs.nextStep} />
      <Downloads files={cs.downloads} />
      <Disclosure paragraphs={cs.disclosure} />
    </>
  );
}
