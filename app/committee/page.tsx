import type { Metadata } from "next";
import Image from "next/image";
import { Mail } from "lucide-react";
import { getContent } from "@/lib/content";
import Reveal from "@/components/reveal";

export const metadata: Metadata = {
  title: "Committee",
};

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]!.toUpperCase())
    .join("");
}

export default function CommitteePage() {
  const { committee } = getContent();

  return (
    <div className="relative overflow-x-clip">
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <p className="eyebrow">The team</p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground">
            Committee
          </h1>
          <p className="mt-3 max-w-xl text-muted">
            The people running the society this year.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {committee.map((member, i) => (
            <Reveal key={member.id} delay={(i % 3) * 100}>
              <div className="card card-hover h-full p-7">
                <div className="flex items-center gap-4">
                  <div className="shrink-0 rounded-full bg-gradient-to-br from-maroon-600 to-purple-600 p-[2.5px]">
                    {member.photo ? (
                      <Image
                        src={member.photo}
                        alt={member.name}
                        width={72}
                        height={72}
                        className="h-[72px] w-[72px] rounded-full object-cover"
                      />
                    ) : (
                      <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-surface-2 font-display text-xl font-bold text-purple-200">
                        {initials(member.name) || "?"}
                      </div>
                    )}
                  </div>
                  <div className="min-w-0">
                    <h2 className="truncate font-display text-lg font-semibold text-foreground">
                      {member.name}
                    </h2>
                    <p className="font-mono text-xs uppercase tracking-wider text-purple-300">
                      {member.role}
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted">
                  {member.bio}
                </p>
                <a
                  href={`mailto:${member.email}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm text-maroon-200 transition hover:text-purple-200"
                >
                  <Mail className="h-4 w-4" />
                  <span className="truncate">{member.email}</span>
                </a>
              </div>
            </Reveal>
          ))}
          {committee.length === 0 && (
            <p className="text-sm text-muted">Committee details coming soon.</p>
          )}
        </div>
      </div>
    </div>
  );
}
