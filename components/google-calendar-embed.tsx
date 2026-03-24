interface GoogleCalendarEmbedProps {
  calendarUrl: string;
  fallbackUrl?: string;
}

export default function GoogleCalendarEmbed({ calendarUrl, fallbackUrl }: GoogleCalendarEmbedProps) {
  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-lg">
        <iframe
          src={calendarUrl}
          title="Upcoming Shows - Zach Bedell"
          width="100%"
          height="600"
          frameBorder={0}
          scrolling="no"
          loading="lazy"
          className="w-full"
          style={{ minHeight: 400 }}
        />
      </div>
      {fallbackUrl && (
        <p className="mt-3 text-sm text-[#a8a29e]">
          Calendar not displaying correctly?{" "}
          <a
            href={fallbackUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white transition-colors"
          >
            Open in Google Calendar
          </a>
        </p>
      )}
    </div>
  );
}
