import type { Metadata } from "next";
import { getContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Calendar",
};

export default function CalendarPage() {
  const { calendar } = getContent();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-2xl font-semibold text-foreground">Calendar</h1>
      <p className="mt-2 max-w-xl text-muted">
        Everything we&apos;ve got coming up — workshops, talks, and socials.
      </p>

      <div className="mt-8 overflow-hidden rounded-lg border border-border">
        {calendar.embedUrl ? (
          <iframe
            src={calendar.embedUrl}
            className="h-[70vh] w-full"
            frameBorder="0"
            scrolling="no"
            title="Society calendar"
          />
        ) : (
          <div className="flex h-64 flex-col items-center justify-center gap-2 bg-surface p-8 text-center">
            <p className="font-medium text-foreground">
              Calendar not set up yet
            </p>
            <p className="max-w-sm text-sm text-muted">
              Add a Google Calendar embed URL from the admin panel to show
              upcoming events here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
