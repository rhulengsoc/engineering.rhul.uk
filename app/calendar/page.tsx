import type { Metadata } from "next";
import { CalendarDays } from "lucide-react";
import { getContent } from "@/lib/content";
import Reveal from "@/components/reveal";

export const metadata: Metadata = {
  title: "Calendar",
};

export default function CalendarPage() {
  const { calendar } = getContent();

  return (
    <div className="relative overflow-x-clip">
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <p className="eyebrow">Events</p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground">
            Calendar
          </h1>
          <p className="mt-3 max-w-xl text-muted">
            Everything we&apos;ve got coming up — workshops, talks, and
            socials.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="card mt-10 overflow-hidden">
            {calendar.embedUrl ? (
              <iframe
                src={calendar.embedUrl}
                className="h-[70vh] min-h-[480px] w-full"
                frameBorder="0"
                scrolling="no"
                title="Society calendar"
              />
            ) : (
              <div className="flex min-h-[320px] flex-col items-center justify-center gap-3 p-10 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-maroon-600/25 to-purple-600/25 text-purple-300">
                  <CalendarDays className="h-6 w-6" />
                </span>
                <p className="font-display font-semibold text-foreground">
                  Calendar not set up yet
                </p>
                <p className="max-w-sm text-sm text-muted">
                  Add a Google Calendar embed URL from the admin panel to show
                  upcoming events here.
                </p>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
