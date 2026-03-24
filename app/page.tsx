"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ScrollSection from "@/components/scroll-section";
import ParallaxImage from "@/components/parallax-image";
import ServiceCard from "@/components/service-card";
import Testimonial from "@/components/testimonial";
import YouTubeEmbed from "@/components/youtube-embed";
import StructuredData from "@/components/structured-data";

const localBusinessData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Zach Bedell",
  description:
    "Professional multi-instrumentalist and wedding band in Charleston, SC",
  url: "https://zachbedell.com",
  telephone: "+17034032066",
  email: "booking@normalmusic.net",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Charleston",
    addressRegion: "SC",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 32.7765,
    longitude: -79.9311,
  },
  areaServed: "Southeast United States",
  priceRange: "$$-$$$",
  sameAs: ["https://instagram.com/z_b_music"],
};

const musicGroupData = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: "Zach Bedell Band",
  description:
    "Live music band based in Charleston, SC performing at weddings, private events, and venues across the Southeast",
  url: "https://zachbedell.com",
  genre: ["Rock", "Pop", "Country", "Soul", "R&B", "Funk"],
  foundingLocation: {
    "@type": "Place",
    name: "Charleston, SC",
  },
  member: {
    "@type": "Person",
    name: "Zach Bedell",
    jobTitle: "Multi-Instrumentalist and Vocalist",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a wedding band cost in Charleston SC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wedding music packages vary based on the number of musicians, duration, and services needed. Zach Bedell offers customizable packages for ceremony, cocktail hour, reception, and DJ/emcee services. Request a quote at zachbedell.com/book.",
      },
    },
    {
      "@type": "Question",
      name: "What kind of music does Zach Bedell Band play?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zach Bedell Band performs over 100 songs spanning rock, pop, country, soul, R&B, funk, and more. The setlist is fully customizable for your event.",
      },
    },
    {
      "@type": "Question",
      name: "Does Zach Bedell do DJ and emcee services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. In addition to live music, Zach offers DJ services and professional emcee/MC services for wedding receptions and private events in Charleston, SC.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      {/* Section 1: Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Ken Burns background */}
        <motion.div
          className="absolute inset-0 z-0"
          animate={{ scale: 1.08 }}
          transition={{ duration: 20, ease: "linear" }}
        >
          <Image
            src="/images/zach-hero.webp"
            alt="Zach Bedell performing live"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </motion.div>

        {/* Dark overlay */}
        <div className="absolute inset-0 z-10 bg-[#1c1917]/60" />

        {/* Hero content */}
        <motion.div
          className="relative z-20 flex flex-col items-center text-center px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-widest text-[#fafaf9] uppercase">
            Zach Bedell
          </h1>
          <div className="mt-6 mb-6 w-24 h-px bg-[#d97706]" />
          <p className="text-lg md:text-xl text-[#d6d3d1] tracking-wide">
            Multi-Instrumentalist · Charleston, SC
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="inline-block rounded-full bg-[#d97706] px-8 py-3 text-sm font-semibold uppercase tracking-wider text-[#1c1917] transition-colors hover:bg-[#b45309]"
            >
              Book Your Event
            </Link>
            <Link
              href="/video"
              className="inline-block rounded-full border border-[#fafaf9] px-8 py-3 text-sm font-semibold uppercase tracking-wider text-[#fafaf9] transition-colors hover:bg-[#fafaf9]/10"
            >
              Watch Video
            </Link>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 z-20 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs uppercase tracking-widest text-[#a8a29e]">Scroll</span>
          <svg
            className="h-5 w-5 text-[#d97706]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </section>

      {/* Section 2: Wedding Services */}
      <section className="bg-[#292524]">
        <div className="grid md:grid-cols-2">
          {/* Left: Parallax image */}
          <ParallaxImage
            src="/images/wedding-front.webp"
            alt="Zach Bedell performing at a Charleston SC wedding"
            className="relative h-[500px] md:h-full"
          />

          {/* Right: content */}
          <ScrollSection direction="left" className="flex flex-col justify-center py-20 px-8 md:px-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#d97706] mb-3">
              Wedding Music
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#fafaf9] mb-6">
              Wedding Entertainment
            </h2>
            <p className="text-[#a8a29e] mb-8 leading-relaxed">
              From the first note of the processional to the last song of the
              night, Zach handles it all — live music, DJ, and emcee — so you
              can focus on the moments that matter most.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              <ServiceCard
                title="Ceremony"
                description="Live acoustic music for your walk down the aisle. Personalized song selection."
                index={0}
              />
              <ServiceCard
                title="Cocktail Hour"
                description="Elegant live background music that sets the mood and wows your guests."
                index={1}
              />
              <ServiceCard
                title="Reception"
                description="High-energy full band performance spanning six decades of crowd favorites."
                index={2}
              />
              <ServiceCard
                title="DJ & Emcee"
                description="Professional DJ services and emcee to keep the night flowing seamlessly."
                index={3}
              />
            </div>
            <Link
              href="/book"
              className="inline-block self-start rounded-full bg-[#d97706] px-8 py-3 text-sm font-semibold uppercase tracking-wider text-[#1c1917] transition-colors hover:bg-[#b45309]"
            >
              Request Wedding Quote
            </Link>
          </ScrollSection>
        </div>
      </section>

      {/* Section 3: Private Events & Corporate */}
      <section className="bg-[#1c1917] py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#d97706] mb-3 text-center">
              Corporate & Private
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#fafaf9] mb-6 text-center">
              Private Events & Corporate
            </h2>
            <p className="text-[#a8a29e] text-center max-w-2xl mx-auto mb-14 leading-relaxed">
              From intimate gatherings to large corporate functions, Zach brings
              the same professionalism and energy to every event.
            </p>
          </ScrollSection>

          {/* Photo grid */}
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <ScrollSection delay={0} className="relative h-72 md:h-96 overflow-hidden rounded-lg">
              <Image
                src="/images/zach-performance-2.webp"
                alt="Zach Bedell live performance"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </ScrollSection>
            <ScrollSection delay={0.15} className="relative h-72 md:h-96 overflow-hidden rounded-lg">
              <Image
                src="/images/zach-event-1.webp"
                alt="Zach Bedell at a private event"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </ScrollSection>
            <ScrollSection delay={0.3} className="relative h-72 md:h-96 overflow-hidden rounded-lg">
              <Image
                src="/images/zach-stage-wide.webp"
                alt="Zach Bedell wide stage shot"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </ScrollSection>
          </div>

          <ScrollSection className="text-center">
            <Link
              href="/book"
              className="inline-block rounded-full border border-[#d97706] px-8 py-3 text-sm font-semibold uppercase tracking-wider text-[#d97706] transition-colors hover:bg-[#d97706] hover:text-[#1c1917]"
            >
              Request Event Quote
            </Link>
          </ScrollSection>
        </div>
      </section>

      {/* Section 4: Live Music / Video Teaser */}
      <section className="bg-[#292524] py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollSection className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#d97706] mb-3">
              Live Performance
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#fafaf9]">
              Watch Live
            </h2>
          </ScrollSection>

          {/* Clip-path reveal */}
          <motion.div
            initial={{ clipPath: "inset(20% 20% 20% 20% round 8px)" }}
            whileInView={{ clipPath: "inset(0% 0% 0% 0% round 8px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <YouTubeEmbed
              videoId="d2CKChMceew"
              title="Zach Bedell Band - Mr. Brightside Live"
            />
          </motion.div>

          <ScrollSection className="text-center mt-10">
            <Link
              href="/video"
              className="inline-block rounded-full border border-[#d97706] px-8 py-3 text-sm font-semibold uppercase tracking-wider text-[#d97706] transition-colors hover:bg-[#d97706] hover:text-[#1c1917]"
            >
              See All Videos
            </Link>
          </ScrollSection>
        </div>
      </section>

      {/* Section 5: Testimonials */}
      <section className="bg-[#1c1917] py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollSection className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#d97706]">
              Testimonials
            </p>
          </ScrollSection>
          <Testimonial
            quote="Zach performed at our wedding at Alhambra Hall and did an amazing job! He played live acoustic music during our cocktail hour, then announced and DJ'd during the reception — he did IT ALL! Our dance floor was completely full with hit after hit. Zach was extremely professional and responsive throughout the planning process. Our special day wouldn't have been nearly as fun without him!"
            author="Kendal and Shea O'Connor"
            event="Wedding at Alhambra Hall, Charleston SC"
          />
        </div>
      </section>

      {/* Section 6: About / Bio */}
      <section className="bg-[#292524] py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <ScrollSection direction="right" className="relative h-[500px] overflow-hidden rounded-lg">
              <Image
                src="/images/zach-portrait-1.webp"
                alt="Zach Bedell portrait"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </ScrollSection>

            {/* Text */}
            <ScrollSection direction="left" className="flex flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#d97706] mb-3">
                About
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#fafaf9] mb-6">
                About Zach Bedell
              </h2>
              <p className="text-[#a8a29e] leading-relaxed mb-6">
                Zach Bedell is a multi-instrumentalist and songwriter based in
                Charleston, South Carolina. After graduating from Berklee College
                of Music in Boston in 2009, Zach has been performing at weddings,
                private events, and venues across Charleston and the Southeast for
                over 15 years.
              </p>
              <p className="text-[#a8a29e] leading-relaxed mb-6">
                As a vocalist, pianist, guitarist, drummer, and bassist, his
                musical versatility has made him one of Charleston&apos;s most
                sought-after performers. Whether you&apos;re planning the wedding
                of a lifetime or looking for live music that elevates your next
                event, Zach brings professionalism, energy, and unforgettable
                entertainment.
              </p>

              {/* Instruments */}
              <p className="text-sm text-[#d6d3d1] mb-6 tracking-wide">
                <span className="text-[#d97706] font-semibold">Instruments: </span>
                Vocals · Piano · Guitar · Drums · Bass
              </p>

              {/* Instagram */}
              <a
                href="https://instagram.com/z_b_music"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#a8a29e] hover:text-[#d97706] transition-colors mb-8"
              >
                @z_b_music on Instagram
              </a>

              {/* CTA */}
              <div className="mt-2">
                <Link
                  href="/book"
                  className="inline-block rounded-full bg-[#d97706] px-8 py-3 text-sm font-semibold uppercase tracking-wider text-[#1c1917] transition-colors hover:bg-[#b45309]"
                >
                  Book Your Event
                </Link>
              </div>
            </ScrollSection>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <StructuredData data={localBusinessData} />
      <StructuredData data={musicGroupData} />
      <StructuredData data={faqData} />
    </>
  );
}
