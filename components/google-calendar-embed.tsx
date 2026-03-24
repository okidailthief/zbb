interface GoogleCalendarEmbedProps {
  calendarUrl: string;
}

export default function GoogleCalendarEmbed({ calendarUrl }: GoogleCalendarEmbedProps) {
  return (
    <div className="w-full overflow-hidden rounded-lg">
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
  );
}
