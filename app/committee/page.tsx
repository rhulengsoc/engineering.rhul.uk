import type { Metadata } from "next";
import { getContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Committee",
};

export default function CommitteePage() {
  const { committee } = getContent();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-2xl font-semibold text-foreground">Committee</h1>
      <p className="mt-2 max-w-xl text-muted">
        The people running the society this year.
      </p>

      <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
        {committee.map((member) => (
          <div key={member.id} className="flex flex-col gap-2 bg-surface p-6">
            <div>
              <h2 className="font-medium text-foreground">{member.name}</h2>
              <p className="text-sm text-purple-400">{member.role}</p>
            </div>
            <p className="text-sm leading-relaxed text-muted">{member.bio}</p>
            <a
              href={`mailto:${member.email}`}
              className="mt-1 text-sm text-maroon-300 hover:text-maroon-100"
            >
              {member.email}
            </a>
          </div>
        ))}
        {committee.length === 0 && (
          <p className="p-6 text-center text-sm text-muted">
            Committee details coming soon.
          </p>
        )}
      </div>
    </div>
  );
}
