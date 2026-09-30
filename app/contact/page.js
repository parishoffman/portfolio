import { site } from "../data";
import Paperclip from "../Paperclip";

export const metadata = { title: `Contact | ${site.name}` };

export default function Contact() {
  return (
    <div className="contact-layout">
      <h1 className="page-heading center">
        <span className="script">let's</span>
        <span>Work together</span>
      </h1>

      <article className="index-card">
        <Paperclip />
        <p className="label">File No. 04 — Contact</p>
        <a href={`mailto:${site.email}`} className="index-email">{site.email}</a>
        <ul className="index-lines">
          {site.links.map((link) => (
            <li key={link.href}>
              <span className="label">{link.label}</span>
              <a href={link.href}>{link.href.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}</a>
            </li>
          ))}
        </ul>
        <a href={`mailto:${site.email}`} className="button">Send an email</a>
      </article>
    </div>
  );
}
