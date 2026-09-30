import Link from "next/link";
import { site, home, projects } from "./data";
import Paperclip from "./Paperclip";

export default function Home() {
  const featured = projects.find((p) => p.slug === home.featured) || projects[0];
  const featuredImage = featured.thumbnail || featured.cover;
  const [firstName, ...rest] = site.name.split(" ");
  const year = new Date().getFullYear();

  return (
    <>
      {/* Cover */}
      <section className={`cover${site.cutout ? " has-cutout" : ""}`}>
        {site.cutout && <img className="cover-cutout" src={site.cutout} alt={site.name} />}

        <div className="cover-meta label">
          <span>Creative portfolio</span>
          <span>{year}</span>
        </div>

        <h1 className="cover-title">
          <span className="script">{firstName}</span>
          <span className="cover-last">{rest.join(" ")}</span>
        </h1>
        <p className="label cover-role">{site.role}</p>

        <p className="script handnote cover-greeting">{home.greeting}</p>

        <figure className="polaroid cover-polaroid">
          <Paperclip />
          {site.photo ? (
            <img src={site.photo} alt={site.name} />
          ) : (
            <div className="polaroid-empty label">Photo coming soon</div>
          )}
        </figure>

        <div className="sticker cover-sticker label">
          {site.name}
          <br />
          Portfolio
          <br />
          {year}
        </div>
      </section>

      {/* Contents */}
      <section className="contents">
        <div className="contents-header">
          <p className="label contents-heading">Inside this folder</p>
          <p className="script handnote">{home.tour} <span aria-hidden="true">↓</span></p>
        </div>
        <div className="subfolders">
          <Link href="/about" className="subfolder" style={{ "--tab": "var(--sky)" }}>
            <span className="subfolder-sheet grid-paper" aria-hidden="true" />
            <span className="subfolder-tab label">About</span>
            <span className="subfolder-front">
              <span className="script subfolder-script">about me</span>
              <span>{site.tagline}</span>
            </span>
          </Link>

          <Link href="/projects" className="subfolder" style={{ "--tab": "var(--sand)" }}>
            {featuredImage ? (
              <img className="subfolder-photo" src={featuredImage} alt="" />
            ) : (
              <span className="subfolder-sheet" aria-hidden="true" />
            )}
            <span className="subfolder-tab label">Portfolio</span>
            <span className="subfolder-front">
              <span className="script subfolder-script">selected work</span>
              <span>Featured: {featured.title}</span>
            </span>
          </Link>

          <Link href="/contact" className="subfolder" style={{ "--tab": "var(--paper)" }}>
            <span className="subfolder-sheet lined-paper" aria-hidden="true" />
            <span className="subfolder-tab label">Contact</span>
            <span className="subfolder-front">
              <span className="script subfolder-script">say hello</span>
              <span>{site.email}</span>
            </span>
          </Link>
        </div>
      </section>

    </>
  );
}
