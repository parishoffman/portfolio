import Link from "next/link";
import { notFound } from "next/navigation";
import { site, projects } from "../../data";
import {
  pad, Hero, Section, Gallery, Results, NextStep, Takeaways, Downloads, Disclosure,
} from "./blocks";
import RealeSephora from "./RealeSephora";

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

// Projects with their own custom layout, keyed by slug
const layouts = {
  "reale-sephora": RealeSephora,
};

export default async function CaseStudy({ params }) {
  const { slug } = await params;
  const project = caseStudies.find((p) => p.slug === slug);
  if (!project) notFound();

  const cs = project.caseStudy;
  const number = pad(projects.indexOf(project) + 1);
  const Layout = layouts[slug];

  return (
    <>
      <p className="back-link"><Link href="/projects" className="label">⟵ Back to all work</Link></p>

      <article className="document">
        {Layout ? (
          <Layout project={project} number={number} />
        ) : (
          <>
            <Hero project={project} number={number} />
            {cs.sections?.map((section, i) => (
              <Section key={section.heading} section={section} number={i + 1} />
            ))}
            <Gallery items={cs.deliverables} />
            <Results items={cs.results} heading={cs.resultsHeading} note={cs.resultsNote} />
            <NextStep text={cs.nextStep} />
            <Takeaways items={cs.takeaways} />
            <Downloads files={cs.downloads} />
            <Disclosure paragraphs={cs.disclosure} />
          </>
        )}
      </article>
    </>
  );
}
