import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/committee", label: "Committee" },
  { href: "/calendar", label: "Calendar" },
  { href: "/links", label: "Links" },
];

export default function SiteHeader({ shortName }: { shortName: string }) {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight text-foreground"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-maroon-700 text-xs font-black text-purple-200">
            ES
          </span>
          {shortName}
        </Link>
        <nav className="flex items-center gap-6 text-sm text-muted">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-purple-300">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
