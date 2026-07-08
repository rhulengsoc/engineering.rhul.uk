import type { SiteContent } from "@/lib/types";

export default function SiteFooter({
  society,
}: {
  society: SiteContent["society"];
}) {
  return (
    <footer className="border-t border-maroon-100 bg-maroon-50">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-6 py-8 text-center text-sm text-maroon-900/70">
        <p className="font-semibold text-maroon-900">{society.name}</p>
        <p>
          <a
            href={`mailto:${society.email}`}
            className="underline decoration-maroon-300 underline-offset-2 hover:text-maroon-700"
          >
            {society.email}
          </a>
        </p>
        <p>&copy; {new Date().getFullYear()} {society.shortName}. All rights reserved.</p>
      </div>
    </footer>
  );
}
