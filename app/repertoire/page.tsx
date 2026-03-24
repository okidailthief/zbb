import type { Metadata } from "next";
import Image from "next/image";
import SongList from "@/components/song-list";
import ScrollSection from "@/components/scroll-section";

export const metadata: Metadata = {
  title: "Song List",
  description:
    "Browse the full repertoire of Zach Bedell Band — over 100 songs spanning rock, pop, country, soul, funk, and more. Perfect for weddings, private events, and live shows in Charleston, SC.",
};

export default function RepertoirePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 pt-28 pb-16">
      <ScrollSection>
        <div className="relative mb-12 h-64 w-full overflow-hidden rounded-lg">
          <Image
            src="/images/zach-repertoire.webp"
            alt="Zach Bedell performing live music at an event"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 896px"
            priority
          />
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Repertoire</h1>
        <p className="mt-4 text-lg text-[#a8a29e]">
          Over 100 songs spanning every genre — from classic rock to country,
          Top 40 to funk. Customizable setlists for your wedding, corporate
          event, or private party.
        </p>
        <div className="mt-6 rounded-lg border border-[#d97706]/30 bg-[#d97706]/10 px-5 py-4 pl-5 border-l-4 border-l-[#d97706]">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#d97706]">
            Already booked?
          </p>
          <p className="mt-1 text-[#d6d3d1]">
            Submit your song requests using{" "}
            <a
              href="https://forms.gle/9ajZgzkCYgYJSEtf6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d97706] underline underline-offset-2 hover:text-[#f59e0b]"
            >
              this form
            </a>
            . The repertoire is always growing, so aim to submit between
            30 and 7 days before your event. Plan for roughly 10
            &ldquo;must-play&rdquo; songs per hour of performance.
          </p>
        </div>
      </ScrollSection>

      <div className="mt-12">
        <SongList />
      </div>
    </div>
  );
}
