import Link from "next/link";
import { getContent } from "@/lib/content";

export default function Home() {
  const { society, highlights } = getContent();

  return (
    <div>
      <section className="mx-auto flex max-w-5xl flex-col items-start gap-6 border-b border-border px-6 py-24 sm:py-32">
        <span className="text-sm font-medium text-purple-400">
          Royal Holloway, University of London
        </span>
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {society.name}
        </h1>
        <p className="max-w-xl text-lg text-muted">{society.tagline}</p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Link
            href="/links"
            className="rounded-md bg-maroon-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-maroon-600"
          >
            View Our Links
          </Link>
          <a
            href={`mailto:${society.email}`}
            className="rounded-md border border-border-strong px-6 py-3 text-sm font-semibold text-foreground transition hover:border-purple-400"
          >
            Get In Touch
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-12 sm:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-foreground">Who We Are</h2>
            <p className="mt-4 leading-relaxed text-muted">{society.description}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">Our Mission</h2>
            <p className="mt-4 leading-relaxed text-muted">{society.mission}</p>
          </div>
        </div>
      </section>

      <section className="border-t border-border px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-xl font-semibold text-foreground">What We Do</h2>
          <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <div key={item.id} className="bg-surface p-6">
                <h3 className="font-medium text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-t border-border px-6 py-20 text-center">
        <h2 className="text-xl font-semibold text-foreground">
          Want to get involved?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted">
          Follow us and find every way to reach us on our links page.
        </p>
        <Link
          href="/links"
          className="mt-6 inline-block rounded-md border border-border-strong px-6 py-3 text-sm font-semibold text-foreground transition hover:border-purple-400"
        >
          All Our Links
        </Link>
      </section>
    </div>
  );
}
