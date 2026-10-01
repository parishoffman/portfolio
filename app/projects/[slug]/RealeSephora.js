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
const WhiteSpace = ({ cs }) => <Section section={cs.whiteSpace} number={4} />;

const AudienceInsight = ({ cs }) => <Section section={cs.audienceInsight} number={5} />;
const BigIdea = ({ cs }) => <Section section={cs.bigIdea} number={6} />;
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
