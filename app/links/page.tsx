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
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-maroon-800 text-2xl font-black text-gold-300">
        ES
      </div>
      <h1 className="mt-5 text-center text-xl font-bold text-maroon-900">
        {society.name}
      </h1>
      <p className="mt-2 text-center text-sm text-neutral-600">
        {society.tagline}
      </p>

      <div className="mt-8 flex w-full flex-col gap-4">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target={link.url.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-maroon-100 bg-white px-5 py-4 font-semibold text-maroon-900 shadow-sm transition hover:-translate-y-0.5 hover:border-maroon-300 hover:shadow-md"
          >
            <LinkIcon icon={link.icon} className="h-5 w-5 text-maroon-700" />
            <span>{link.label}</span>
          </a>
        ))}
        {links.length === 0 && (
          <p className="text-center text-sm text-neutral-500">
            No links yet — check back soon.
          </p>
        )}
      </div>
    </div>
  );
}
