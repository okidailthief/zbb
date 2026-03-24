import type { Metadata } from "next";
import GoogleCalendarEmbed from "@/components/google-calendar-embed";
import ScrollSection from "@/components/scroll-section";

export const metadata: Metadata = {
  title: "Upcoming Shows & Events",
  description:
    "See upcoming live music shows and events with Zach Bedell in Charleston, SC and across the Southeast. Bar gigs, festivals, and public performances.",
};

// TODO: Replace with actual Google Calendar public embed URL
// In Google Calendar: Settings → [calendar] → Integrate calendar → Embed code
// Paste the src URL from the <iframe> tag here
const CALENDAR_URL =
  "https://calendar.google.com/calendar/embed?src=CALENDAR_ID_HERE&ctz=America/New_York&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=0&showTz=0&mode=MONTH";

export default function ShowsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 pt-28 pb-16">
      <ScrollSection>
        <h1 className="text-4xl font-bold tracking-tight">Upcoming Shows</h1>
        <p className="mt-4 text-lg text-[#a8a29e]">
          Catch Zach Bedell live at venues, bars, and events across Charleston
          and the Southeast.
        </p>
      </ScrollSection>

      <ScrollSection delay={0.2} className="mt-12">
        <GoogleCalendarEmbed calendarUrl={CALENDAR_URL} />
      </ScrollSection>
    </div>
  );
}
