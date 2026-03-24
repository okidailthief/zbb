import type { Metadata } from "next";
import Link from "next/link";
import ScrollSection from "@/components/scroll-section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book Zach Bedell for your Charleston, SC wedding, private event, or corporate function. Call 703-403-2066 or email booking@normalmusic.net.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 pt-28 pb-16">
      <ScrollSection>
        <h1 className="text-4xl font-bold tracking-tight">Get in Touch</h1>
        <p className="mt-4 text-lg text-[#a8a29e]">
          Ready to book live music for your event? Reach out directly or
          request a quote.
        </p>
      </ScrollSection>

      <ScrollSection delay={0.2} className="mt-12 space-y-8">
        <div className="rounded-lg border border-[#44403c] bg-[#292524]/60 p-8">
          <h2 className="text-xl font-semibold text-[#d97706]">Booking</h2>
          <div className="mt-4 space-y-3">
            <p className="text-[#d6d3d1]">
              <span className="text-[#a8a29e]">Phone:</span>{" "}
              <a
                href="tel:7034032066"
                className="hover:text-[#d97706] transition-colors"
              >
                703-403-2066
              </a>
            </p>
            <p className="text-[#d6d3d1]">
              <span className="text-[#a8a29e]">Email:</span>{" "}
              <a
                href="mailto:booking@normalmusic.net"
                className="hover:text-[#d97706] transition-colors"
              >
                booking@normalmusic.net
              </a>
            </p>
            <p className="text-[#d6d3d1]">
              <span className="text-[#a8a29e]">Instagram:</span>{" "}
              <a
                href="https://instagram.com/z_b_music"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#d97706] transition-colors"
              >
                @z_b_music
              </a>
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/book"
            className="inline-block rounded bg-[#d97706] px-8 py-3 font-semibold text-[#1c1917] transition-colors hover:bg-[#f59e0b]"
          >
            Request a Quote
          </Link>
        </div>
      </ScrollSection>
    </div>
  );
}
