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
      </ScrollSection>

      <ScrollSection delay={0.2} className="mt-12">
        <SongList />
      </ScrollSection>
    </div>
  );
}
