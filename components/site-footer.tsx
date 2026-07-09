import Link from "next/link";
import { Mail, Instagram } from "@/components/footer-icons";
import type { SiteContent } from "@/lib/types";

const FOOTER_LINKS = [
  { href: "/", label: "Home" },
  { href: "/committee", label: "Committee" },
  { href: "/calendar", label: "Calendar" },
  { href: "/links", label: "Links" },
];

export default function SiteFooter({
  society,
}: {
  society: SiteContent["society"];
}) {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-maroon-600 to-purple-600 font-display text-xs font-bold text-white">
              ES
            </span>
            <span className="font-display text-base font-semibold text-foreground">
              {society.shortName}
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            {society.tagline}
          </p>
        </div>

        <div>
          <h3 className="eyebrow">Explore</h3>
          <ul className="mt-4 flex flex-col gap-2.5">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted transition hover:text-purple-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow">Contact</h3>
          <ul className="mt-4 flex flex-col gap-2.5">
            <li>
              <a
                href={`mailto:${society.email}`}
                className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-purple-200"
              >
                <Mail className="h-4 w-4" />
                {society.email}
              </a>
            </li>
            <li>
              <a
                href={`https://instagram.com/${society.instagramHandle.replace(/^@/, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-purple-200"
              >
                <Instagram className="h-4 w-4" />
                {society.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 text-center text-xs text-muted sm:flex-row sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} {society.name}. All rights
            reserved.
          </p>
          <p className="font-mono">Royal Holloway, University of London</p>
        </div>
      </div>
    </footer>
  );
}
