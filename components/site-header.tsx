import Link from "next/link";

export default function SiteHeader({ shortName }: { shortName: string }) {
  return (
    <header className="sticky top-0 z-40 border-b border-maroon-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-maroon-800"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-maroon-800 text-sm font-black text-gold-300">
            ES
          </span>
          {shortName}
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-maroon-900">
          <Link href="/" className="hover:text-maroon-600">
            Home
          </Link>
          <Link href="/links" className="hover:text-maroon-600">
            Links
          </Link>
        </nav>
      </div>
    </header>
  );
}
