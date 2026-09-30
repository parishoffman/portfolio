"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "./data";

// Each page is a folder in the stack. Its tab color becomes the folder's color when open.
const tabs = [
  { href: "/", label: "Home", color: "var(--terracotta)" },
  { href: "/about", label: "About", color: "var(--sky)" },
  { href: "/projects", label: "Portfolio", color: "var(--sand)" },
  { href: "/contact", label: "Contact", color: "var(--paper)" },
];

function isActive(href, path) {
  return href === "/" ? path === "/" : path.startsWith(href);
}

export default function Folder({ children }) {
  const path = usePathname();
  const active = tabs.find((tab) => isActive(tab.href, path)) || tabs[0];

  return (
    <div className="folder" style={{ "--folder": active.color }}>
      <div className="folder-paper" aria-hidden="true">
        <span>NAME: {site.name.toUpperCase()}</span>
        <span>FILE: PORTFOLIO</span>
        <span>SECTION: {active.label.toUpperCase()}</span>
        <span>STATUS: OPEN</span>
      </div>
      <nav className="folder-tabs" aria-label="Main">
        {tabs.map((tab) => {
          const on = tab === active;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`folder-tab label${on ? " active" : ""}`}
              style={{ "--tab": tab.color }}
              aria-current={on ? "page" : undefined}
            >
              {tab.label}
            </Link>
          );
        })}
      </nav>
      <div className="folder-body">{children}</div>
    </div>
  );
}
