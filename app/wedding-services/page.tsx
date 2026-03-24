import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollSection from "@/components/scroll-section";
import ParallaxImage from "@/components/parallax-image";
import WeddingHero from "@/components/wedding-hero";
import WeddingCtaPhotos from "@/components/wedding-cta-photos";

export const metadata: Metadata = {
  title: "Wedding Services",
  description:
    "Full-service wedding entertainment in Charleston, SC — live band, ceremony sound, cocktail hour, premium lighting, live recordings, and dedicated sound engineer.",
};

const lightingPhotos = [
  { src: "/images/ws-lighting-display.png", alt: "Premium lighting display at wedding reception" },
  { src: "/images/ws-lighting-elements.png", alt: "Moving head lighting elements" },
  { src: "/images/ws-lighting-drums.jpeg", alt: "Dramatic stage lighting with drums" },
  { src: "/images/ws-lighting-drums-2.jpeg", alt: "Full stage lighting production setup" },
];

export default function WeddingServicesPage() {
  return (
    <main>
      {/* ─── 1. HERO ─── */}
      <WeddingHero />

      {/* ─── 2. PERSONAL INTRO ─── */}
      <section className="bg-[#1c1917]">
        <div className="grid md:grid-cols-2">
          <ScrollSection direction="left" className="flex flex-col justify-center py-20 px-8 md:px-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#d97706] mb-3">
              A Personal Note
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#fafaf9] mb-8">
              From Your Entertainment Expert
            </h2>
            <div className="space-y-4 text-[#a8a29e] leading-relaxed">
              <p>
                Your wedding day is one of the most important moments of your life, and I&apos;m honored
                to be considered as your entertainment.
              </p>
              <p>
                I&apos;ve seen it all; With over a decade as a professional musician in the southeastern
                music scene, a Bachelor&apos;s of Music from Berklee College of Music, and the experience
                that comes from performing at hundreds of weddings, I can help{" "}
                <em className="text-[#fafaf9]">supercharge</em>{" "}the experience for you and your guests.
                My goal is to make sure your day goes off without a hitch, and that it&apos;s filled with
                the kind of magic that only live music and professional production can bring.
              </p>
              <p>
                I&apos;ll be there with you every step of the way, helping to plan the flow of your
                evening, selecting the perfect songs and playlists, and choosing the right services to
                suit your unique vision. From the ceremony to the reception, I take pride in making sure
                every detail is just right so you and your guests can relax, have fun, and make memories
                that last a lifetime.
              </p>
              <p>Let&apos;s work together to make your wedding truly unforgettable.</p>
              <p className="text-[#fafaf9] font-medium pt-2">— Zach</p>
            </div>
          </ScrollSection>
          <ParallaxImage
            src="/images/ws-headshot.png"
            alt="Zach Bedell — wedding entertainment expert"
            className="relative h-[500px] md:h-full"
            objectPosition="top"
          />
        </div>
      </section>

      {/* ─── 3. CEREMONY ─── */}
      <section className="bg-[#292524]">
        <div className="grid md:grid-cols-2">
          <ParallaxImage
            src="/images/ws-ceremony-1.png"
            alt="Professional ceremony audio setup at outdoor wedding"
            className="relative h-[500px] md:h-full"
          />
          <ScrollSection direction="right" className="flex flex-col justify-center py-20 px-8 md:px-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#d97706] mb-3">
              Ceremony
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#fafaf9] mb-6">
              Make Your Vision Heard.
            </h2>
            <div className="space-y-4 text-[#a8a29e] leading-relaxed mb-8">
              <p>
                Your ceremony is one of the most important moments of your wedding day. Our ceremony
                service options include playlist management, a lapel mic and/or a handheld mic for the
                officiant and your vows, and discretely-placed speakers to make it audible to all your
                guests.
              </p>
              <p>
                This setup ensures that every guest gets the opportunity to truly bear witness to your
                union. Even the back row will hear your heartfelt vows, audio can be captured perfectly
                for videographers. With discreet equipment and professional sound quality, we make sure
                no guest is left out of the proceedings.
              </p>
            </div>
            <div className="rounded-lg bg-[#1c1917] px-6 py-4 mb-6 border-l-2 border-[#d97706]">
              <p className="text-sm text-[#a8a29e] italic leading-relaxed">
                <span className="text-[#fafaf9] font-semibold not-italic">More is...less —</span>{" "}
                Our ceremony equipment is heard, not seen. Because nothing should get in the way of
                your vision — or your photos.
              </p>
            </div>
            <div className="rounded-lg bg-[#1c1917]/60 px-6 py-4 border border-[#3f3f3f]">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#d97706] mb-2">
                Do it live!
              </p>
              <p className="text-sm text-[#a8a29e] leading-relaxed">
                Though we do not offer live music services for ceremonies, we frequently partner with
                several talented local groups. Whether you&apos;re interested in acoustic guitar players,
                a strings group, or a classically trained pianist, simply contact us for more info!
              </p>
            </div>
          </ScrollSection>
        </div>
      </section>

      {/* ─── 4. COCKTAIL HOUR ─── */}
      <section className="bg-[#1c1917]">
        <div className="grid md:grid-cols-2">
          <ScrollSection direction="left" className="flex flex-col justify-center py-20 px-8 md:px-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#d97706] mb-3">
              Cocktail Hour
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#fafaf9] mb-6">
              Set the Mood.
            </h2>
            <div className="space-y-4 text-[#a8a29e] leading-relaxed mb-8">
              <p>
                Live music is the perfect way to elevate your cocktail hour. Choose between a solo
                acoustic performer or an acoustic and keys duo to create a relaxed and sophisticated
                atmosphere.
              </p>
              <p>
                While you&apos;re taking sunset photos, your guests will enjoy a list of songs tailored
                specifically for your occasion that sets the perfect tone for mingling. If you&apos;d
                prefer, we also offer the option of using curated playlists during the cocktail hour.
              </p>
            </div>
            {/* Mobile: both photos side by side with captions */}
            <div className="grid grid-cols-2 gap-3 md:hidden">
              <div className="space-y-2">
                <div className="relative h-40 rounded-lg overflow-hidden">
                  <Image
                    src="/images/ws-cocktail-solo.jpeg"
                    alt="Solo guitar and keys performer at cocktail hour"
                    fill
                    className="object-cover object-center"
                    sizes="50vw"
                  />
                </div>
                <p className="text-xs text-[#a8a29e] text-center">Solo Guitar / Keys</p>
              </div>
              <div className="space-y-2">
                <div className="relative h-40 rounded-lg overflow-hidden">
                  <Image
                    src="/images/ws-cocktail-duo.png"
                    alt="Acoustic duo performing at cocktail hour"
                    fill
                    className="object-cover object-center"
                    sizes="50vw"
                  />
                </div>
                <p className="text-xs text-[#a8a29e] text-center">Duos add rich harmonies</p>
              </div>
            </div>
          </ScrollSection>
          {/* Desktop: both photos side by side on the right with captions */}
          <div className="hidden md:flex flex-col justify-center py-10 px-6 gap-4">
            <div className="flex gap-4 flex-1 min-h-0">
              <div className="flex flex-col flex-1 gap-2">
                <div className="relative flex-1 min-h-0 rounded-lg overflow-hidden" style={{minHeight: "300px"}}>
                  <Image
                    src="/images/ws-cocktail-duo.png"
                    alt="Acoustic duo performing at wedding cocktail hour"
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
                <p className="text-xs text-[#a8a29e] text-center">Duos add rich harmonies</p>
              </div>
              <div className="flex flex-col flex-1 gap-2">
                <div className="relative flex-1 min-h-0 rounded-lg overflow-hidden" style={{minHeight: "300px"}}>
                  <Image
                    src="/images/ws-cocktail-solo.jpeg"
                    alt="Solo guitar and keys performer at cocktail hour"
                    fill
                    className="object-cover object-center"
                    sizes="25vw"
                  />
                </div>
                <p className="text-xs text-[#a8a29e] text-center">Solo Guitar / Keys</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. PREMIUM SOUND + BRYAN ─── */}
      <section className="bg-[#292524]">
        <div className="grid md:grid-cols-2">
          <ScrollSection direction="right" className="flex items-center justify-center p-8 md:p-12">
            <div className="rounded-lg border border-[#d97706]/40 overflow-hidden shadow-lg shadow-black/40">
              <Image
                src="/images/ws-sound-reinforcement.png"
                alt="Premium sound reinforcement setup at wedding"
                width={0}
                height={0}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto scale-[1.04] origin-center"
              />
            </div>
          </ScrollSection>
          <ScrollSection direction="right" className="flex flex-col justify-center py-20 px-8 md:px-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#d97706] mb-3">
              Premium Sound Production
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#fafaf9] mb-1">
              &ldquo;Can They Turn It Down?&rdquo;
            </h2>
            <p className="text-[#a8a29e] italic mb-6 text-sm">
              A question you won&apos;t hear at your wedding.
            </p>
            <div className="space-y-4 text-[#a8a29e] leading-relaxed mb-6">
              <p>
                Have you ever attended a wedding with a great band or DJ, but no one&apos;s on the dance
                floor because it&apos;s uncomfortably loud?
              </p>
              <p>
                Clear, high-quality audio is essential for a successful event. Our focus on world-class
                sound production distinguishes our events from ordinary wedding bands and ensures that
                every beat of your favorite songs gets people on the dance floor.
              </p>
              <p>
                We use industry-leading equipment, tuned to your venue&apos;s unique acoustic
                characteristics, as part of our standard package. We take great pride in providing
                balanced, crystal-clear sound for every part of your wedding, regardless of room size,
                attendance, indoors, outdoors — we&apos;ve got it covered.
              </p>
            </div>
            <div className="rounded-lg bg-[#1c1917] px-6 py-4 mb-8 border-l-2 border-[#d97706]">
              <p className="text-sm text-[#a8a29e] italic leading-relaxed">
                <span className="text-[#fafaf9] font-semibold not-italic">More is...less?</span>{" "}
                Additional sound reinforcement can better distribute amplification, allowing for lower
                volume levels while maintaining energy and clarity.
              </p>
              <p className="text-xs text-[#6b7280] mt-2">
                Serious Bass: Upgraded options include up to four 1,000W subwoofers and four 2,000W speakers.
              </p>
            </div>
            {/* Meet Bryan */}
            <div className="flex items-start gap-4 rounded-lg bg-[#1c1917]/60 border border-[#3f3f3f] p-5">
              <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/images/ws-bryan.png"
                  alt="Bryan — dedicated sound engineer"
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div>
                <p className="text-[#fafaf9] font-semibold mb-1">Meet Bryan.</p>
                <p className="text-sm text-[#a8a29e] leading-relaxed">
                  All full band packages include a dedicated sound engineer. Bryan keeps the vibes
                  immaculate — he&apos;ll adjust levels from song to song, ensure toasts are audible
                  to the whole room, save grandma&apos;s ears early in the night, and melt faces once
                  grandma calls it a night.
                </p>
              </div>
            </div>
          </ScrollSection>
        </div>
      </section>

      {/* ─── 6. PREMIUM LIGHTING ─── */}
      <section className="bg-[#1c1917] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollSection direction="up" className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#d97706] mb-3">
              Premium Lighting
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#fafaf9] mb-6">
              The &ldquo;Wow&rdquo; Factor
            </h2>
            <p className="text-[#a8a29e] leading-relaxed max-w-2xl mx-auto">
              Our premium lighting package includes over $30,000 worth of state-of-the-art lighting and
              production equipment, including several fully programmed moving head lights, washes, and
              fog effects.
            </p>
            <p className="text-[#a8a29e] leading-relaxed max-w-2xl mx-auto mt-4">
              Beyond simply lighting the band, this package adds a &ldquo;wow&rdquo; factor to the entire
              room, stirring anticipation amongst guests and transforming the night into a true concert
              once the dance floor opens. Includes onsite light show operator.
            </p>
          </ScrollSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {lightingPhotos.map((photo, i) => (
              <ScrollSection key={photo.src} direction="up" delay={i * 0.1}>
                <div className="relative h-56 md:h-72 rounded-lg overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </ScrollSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. LIVE RECORDINGS ─── */}
      <section className="bg-[#292524]">
        <div className="grid md:grid-cols-2">
          <ScrollSection direction="left" className="flex flex-col justify-center py-20 px-8 md:px-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#d97706] mb-3">
              Personal Live Recordings
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#fafaf9] mb-6">
              Re-live the Night.
            </h2>
            <div className="space-y-4 text-[#a8a29e] leading-relaxed mb-8">
              <p>
                Capture the essence of your wedding day with professional recordings of the band&apos;s
                live performance.
              </p>
              <p>
                Our recordings are mixed by an experienced sound engineer to ensure every note, chant,
                and epic moment is captured clearly. Quoted per song, this option provides flexibility
                and ensures that the most important parts of your night are preserved for you to enjoy
                for years to come.
              </p>
            </div>
            <div className="rounded-lg bg-[#1c1917] px-6 py-4 border-l-2 border-[#d97706]">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#d97706] mb-2">
                Working with a videographer?
              </p>
              <p className="text-sm text-[#a8a29e] leading-relaxed">
                They&apos;ll love this option. We&apos;ll provide this high-quality audio from the actual
                performance directly to video editors to include in your wedding video, making it truly
                special.
              </p>
            </div>
          </ScrollSection>
          <ParallaxImage
            src="/images/ws-live-recordings.png"
            alt="Professional recording studio — live wedding performance recordings"
            className="relative h-[500px] md:h-full"
          />
        </div>
      </section>

      {/* ─── 8. CTA ─── */}
      <section className="bg-[#1c1917] py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollSection direction="up">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#d97706] mb-3">
              Ready to Level Up?
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#fafaf9] mb-6">
              Decisions, Decisions..
            </h2>
            <p className="text-[#a8a29e] leading-relaxed max-w-2xl mx-auto mb-4">
              Not sure what services are the best fit for your wedding? Reach out and I&apos;ll provide
              personalized recommendations based on my experience, the details of your event, and your
              vision.
            </p>
            <p className="text-[#a8a29e] leading-relaxed max-w-2xl mx-auto mb-12">
              Whether it&apos;s creating the perfect flow for the evening, choosing the right songs, or
              selecting add-ons that match your style, I&apos;m here to make sure everything is just right.
            </p>
          </ScrollSection>

          <WeddingCtaPhotos />

          <ScrollSection direction="up" delay={0.2}>
            <Link
              href="/book"
              className="inline-block rounded-full bg-[#d97706] px-10 py-4 text-sm font-semibold uppercase tracking-wider text-[#1c1917] transition-colors hover:bg-[#b45309]"
            >
              Request Wedding Quote
            </Link>
          </ScrollSection>
        </div>
      </section>
    </main>
  );
}
