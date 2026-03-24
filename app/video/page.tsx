import type { Metadata } from "next";
import YouTubeEmbed from "@/components/youtube-embed";
import ScrollSection from "@/components/scroll-section";

export const metadata: Metadata = {
  title: "Live Performance Videos",
  description:
    "Watch live performance videos from Zach Bedell Band — Charleston SC's premier wedding and event band. See the energy and talent that makes every event unforgettable.",
};

const videos = [
  {
    id: "d2CKChMceew",
    title: "Zach Bedell Band - Mr. Brightside (Live)",
  },
  {
    id: "X86BA1UrEms",
    title: "Zach Bedell Band - Bennie and the Jets (Live)",
  },
];

export default function VideoPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 pt-28 pb-16">
      <ScrollSection>
        <h1 className="text-4xl font-bold tracking-tight">
          Live Performance Videos
        </h1>
        <p className="mt-4 text-lg text-[#a8a29e]">
          See the Zach Bedell Band in action at weddings, private events, and
          venues across Charleston and the Southeast.
        </p>
      </ScrollSection>

      <div className="mt-12 space-y-12">
        {videos.map((video, i) => (
          <ScrollSection key={video.id} delay={i * 0.2}>
            <YouTubeEmbed videoId={video.id} title={video.title} />
            <p className="mt-3 text-sm text-[#a8a29e]">{video.title}</p>
          </ScrollSection>
        ))}
      </div>
    </div>
  );
}
