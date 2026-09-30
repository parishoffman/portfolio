import { site, about } from "../data";
import Paperclip from "../Paperclip";

export const metadata = { title: `About | ${site.name}` };

export default function About() {
  return (
    <div className="about-layout">
      <div className="about-side">
        <figure className="polaroid about-polaroid">
          <Paperclip />
          {site.photo ? (
            <img src={site.photo} alt={site.name} />
          ) : (
            <div className="polaroid-empty label">Photo coming soon</div>
          )}
          <figcaption className="script">{site.name.split(" ")[0]}</figcaption>
        </figure>

        <aside className="grid-note">
          <p className="label">What I do</p>
          <ul>
            {about.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </aside>
      </div>

      <article className="paper-sheet about-sheet">
        <p className="label">File No. 01 — About me</p>
        <h1 className="page-heading">
          <span className="script">Hello,</span>
          <span>I'm {site.name.split(" ")[0]}.</span>
        </h1>
        {about.bio.map((paragraph, i) => (
          <p key={i} className={i === 0 ? "lead" : undefined}>{paragraph}</p>
        ))}
        <div className="sticker about-sticker label">
          Get in touch
          <br />
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </article>
    </div>
  );
}
