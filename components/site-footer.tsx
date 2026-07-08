import type { SiteContent } from "@/lib/types";

export default function SiteFooter({
  society,
}: {
  society: SiteContent["society"];
}) {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-6 py-10 text-center text-sm text-muted">
        <p className="font-medium text-foreground">{society.name}</p>
        <p>
          <a
            href={`mailto:${society.email}`}
            className="hover:text-purple-300"
          >
            {society.email}
          </a>
        </p>
        <p>&copy; {new Date().getFullYear()} {society.shortName}. All rights reserved.</p>
      </div>
    </footer>
  );
}
