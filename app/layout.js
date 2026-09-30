import Link from "next/link";
import { Bodoni_Moda, Cormorant_Garamond, Courier_Prime, Montserrat, Pinyon_Script } from "next/font/google";
import { site } from "./data";
import Folder from "./Folder";
import "./globals.css";

const display = Bodoni_Moda({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-display" });
const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});
const mono = Courier_Prime({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-mono" });
const script = Pinyon_Script({ subsets: ["latin"], weight: "400", variable: "--font-script" });
const sans = Montserrat({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-sans" });

export const metadata = {
  title: site.name,
  description: `${site.name} — ${site.role}`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${serif.variable} ${mono.variable} ${script.variable} ${sans.variable}`}>
      <body>
        <div className="desk">
          <header className="desk-header label">
            <Link href="/">{site.name}</Link>
            <span>{site.role}</span>
          </header>

          <Folder>
            {children}
            <footer className="folder-footer label">
              <a href={`mailto:${site.email}`}>{site.email}</a>
              {site.links.map((link) => (
                <a key={link.href} href={link.href}>{link.label}</a>
              ))}
              <span>© {new Date().getFullYear()} {site.name}</span>
            </footer>
          </Folder>
        </div>
      </body>
    </html>
  );
}
