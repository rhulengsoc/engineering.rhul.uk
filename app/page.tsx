import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Wrench,
  Mic,
  Rocket,
  PartyPopper,
  CalendarDays,
  Users,
} from "lucide-react";
import { getContent } from "@/lib/content";
import Reveal from "@/components/reveal";

const HIGHLIGHT_ICONS = [Wrench, Mic, Rocket, PartyPopper];

export default function Home() {
  const { society, highlights } = getContent();

  return (
    <div className="overflow-x-clip">
      {/* Hero */}
      <section className="relative">
        <div className="grid-bg absolute inset-0" aria-hidden="true" />
        <div
          className="glow-purple absolute -top-40 right-[-10%] h-[480px] w-[480px] rounded-full"
          aria-hidden="true"
        />
        <div
          className="glow-maroon absolute left-[-15%] top-40 h-[420px] w-[420px] rounded-full"
          aria-hidden="true"
        />

        <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-7 px-6 pb-28 pt-24 sm:pb-36 sm:pt-32">
          <Reveal>
            <p className="eyebrow">Royal Holloway, University of London</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="max-w-3xl font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-7xl">
              Engineering,{" "}
              <span className="gradient-text">built together.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="max-w-xl text-lg leading-relaxed text-muted">
              {society.tagline}
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/links" className="btn-primary">
                Join Us <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/calendar" className="btn-ghost">
                What&apos;s On
              </Link>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-6 flex flex-wrap gap-2">
              {highlights.map((item) => (
                <span
                  key={item.id}
                  className="rounded-full border border-border bg-surface/60 px-4 py-1.5 font-mono text-xs text-muted"
                >
                  {item.title}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* About */}
      <section className="relative border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <p className="eyebrow">01 — Who we are</p>
          </Reveal>
          <div className="mt-8 grid gap-12 lg:grid-cols-5">
            <Reveal className="lg:col-span-3">
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                A society for people who like to{" "}
                <span className="gradient-text">build things.</span>
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
                {society.description}
              </p>
            </Reveal>
            <Reveal delay={150} className="lg:col-span-2">
              <div className="card h-full p-8">
                <p className="eyebrow">Our mission</p>
                <p className="mt-4 leading-relaxed text-foreground">
                  {society.mission}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="relative border-t border-border bg-surface/30">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <p className="eyebrow">02 — What we do</p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Something on, every week.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, i) => {
              const Icon = HIGHLIGHT_ICONS[i % HIGHLIGHT_ICONS.length];
              return (
                <Reveal key={item.id} delay={i * 100}>
                  <div className="card card-hover h-full p-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-maroon-600/25 to-purple-600/25 text-purple-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Explore */}
      <section className="relative border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <p className="eyebrow">03 — Get involved</p>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <Reveal>
              <Link href="/committee" className="card card-hover group flex h-full flex-col p-8">
                <Users className="h-6 w-6 text-purple-300" />
                <h3 className="mt-5 font-display text-2xl font-semibold text-foreground">
                  Meet the committee
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  The team behind the workshops, talks, and socials — and how
                  to reach them.
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-purple-300 transition group-hover:gap-3">
                  Committee <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </Reveal>
            <Reveal delay={150}>
              <Link href="/calendar" className="card card-hover group flex h-full flex-col p-8">
                <CalendarDays className="h-6 w-6 text-purple-300" />
                <h3 className="mt-5 font-display text-2xl font-semibold text-foreground">
                  See what&apos;s on
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  Every workshop, talk, and social on one calendar so you never
                  miss a session.
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-purple-300 transition group-hover:gap-3">
                  Calendar <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <div className="card relative overflow-hidden p-10 text-center sm:p-16">
              <div
                className="glow-purple absolute -right-24 -top-24 h-72 w-72 rounded-full"
                aria-hidden="true"
              />
              <div
                className="glow-maroon absolute -bottom-24 -left-24 h-72 w-72 rounded-full"
                aria-hidden="true"
              />
              <div className="relative">
                <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
                  Ready to <span className="gradient-text">build with us?</span>
                </h2>
                <p className="mx-auto mt-4 max-w-md text-muted">
                  Find us on socials, join the Discord, or just turn up to the
                  next event — everyone&apos;s welcome.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Link href="/links" className="btn-primary">
                    All Our Links <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a href={`mailto:${society.email}`} className="btn-ghost">
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
