import type { Metadata } from "next";
import { getContent } from "@/lib/content";
import LinkIcon from "@/components/link-icon";
import Reveal from "@/components/reveal";

export const metadata: Metadata = {
  title: "Links",
};

export default function LinksPage() {
  const { society, links } = getContent();

  return (
    <div className="relative overflow-x-clip">
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div
        className="glow-purple absolute -top-32 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[70vh] max-w-md flex-col items-center px-6 py-20">
        <Reveal className="flex w-full flex-col items-center">
          <div className="rounded-full bg-gradient-to-br from-maroon-600 to-purple-600 p-[3px]">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-surface font-display text-2xl font-bold text-foreground">
              ES
            </div>
          </div>
          <h1 className="mt-6 text-center font-display text-2xl font-bold text-foreground">
            {society.name}
          </h1>
          <p className="mt-2 text-center text-sm text-muted">
            {society.tagline}
          </p>
        </Reveal>

        <div className="mt-10 flex w-full flex-col gap-3">
          {links.map((link, i) => (
            <Reveal key={link.id} delay={i * 80}>
              <a
                href={link.url}
                target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="card card-hover flex items-center gap-4 px-6 py-4 font-medium text-foreground"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-maroon-600/25 to-purple-600/25 text-purple-300">
                  <LinkIcon icon={link.icon} className="h-5 w-5" />
                </span>
                <span>{link.label}</span>
              </a>
            </Reveal>
          ))}
          {links.length === 0 && (
            <p className="text-center text-sm text-muted">
              No links yet — check back soon.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
