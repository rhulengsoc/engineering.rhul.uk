import Link from "next/link";
import { getContent } from "@/lib/content";

export default function Home() {
  const { society, highlights } = getContent();

  return (
    <div>
      <section className="relative overflow-hidden bg-maroon-800">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative mx-auto flex max-w-5xl flex-col items-start gap-6 px-6 py-24 sm:py-32">
          <span className="rounded-full bg-gold-500/20 px-4 py-1 text-sm font-semibold text-gold-300">
            Royal Holloway, University of London
          </span>
          <h1 className="max-w-2xl text-4xl font-black tracking-tight text-white sm:text-5xl">
            {society.name}
          </h1>
          <p className="max-w-xl text-lg text-maroon-50">{society.tagline}</p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/links"
              className="rounded-md bg-gold-500 px-6 py-3 text-sm font-bold text-maroon-950 transition hover:bg-gold-400"
            >
              View Our Links
            </Link>
            <a
              href={`mailto:${society.email}`}
              className="rounded-md border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-12 sm:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-maroon-900">Who We Are</h2>
            <p className="mt-4 leading-relaxed text-neutral-700">
              {society.description}
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-maroon-900">Our Mission</h2>
            <p className="mt-4 leading-relaxed text-neutral-700">
              {society.mission}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-maroon-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold text-maroon-900">What We Do</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <div
                key={item.id}
                className="rounded-xl border border-maroon-100 bg-white p-6 shadow-sm"
              >
                <h3 className="font-bold text-maroon-800">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-maroon-900">
          Want to get involved?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-neutral-700">
          Follow us and find every way to reach us on our links page.
        </p>
        <Link
          href="/links"
          className="mt-6 inline-block rounded-md bg-maroon-800 px-6 py-3 text-sm font-bold text-white transition hover:bg-maroon-700"
        >
          All Our Links
        </Link>
      </section>
    </div>
  );
}
