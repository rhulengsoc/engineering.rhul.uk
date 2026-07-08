import type { Metadata } from "next";
import { getContent } from "@/lib/content";
import LinkIcon from "@/components/link-icon";

export const metadata: Metadata = {
  title: "Links",
};

export default function LinksPage() {
  const { society, links } = getContent();

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md flex-col items-center px-6 py-16">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-maroon-700 text-xl font-black text-purple-200">
        ES
      </div>
      <h1 className="mt-5 text-center text-xl font-semibold text-foreground">
        {society.name}
      </h1>
      <p className="mt-2 text-center text-sm text-muted">{society.tagline}</p>

      <div className="mt-8 flex w-full flex-col gap-3">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target={link.url.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-lg border border-border-strong bg-surface px-5 py-4 font-medium text-foreground transition hover:border-purple-400"
          >
            <LinkIcon icon={link.icon} className="h-5 w-5 text-maroon-300" />
            <span>{link.label}</span>
          </a>
        ))}
        {links.length === 0 && (
          <p className="text-center text-sm text-muted">
            No links yet — check back soon.
          </p>
        )}
      </div>
    </div>
  );
}
