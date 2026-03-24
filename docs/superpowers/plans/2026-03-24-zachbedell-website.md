# zachbedell.com Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a cinematic, SEO-optimized promotional website for Zach Bedell (Charleston SC musician) as a Next.js static site deployed on Vercel.

**Architecture:** Next.js App Router with 100% static site generation. Six pages (Home, Video, Shows, Repertoire, Contact, Book) sharing a root layout with sticky nav and footer. Framer Motion for scroll-triggered animations. All dynamic content (calendar, forms, videos) via iframes — no backend.

**Tech Stack:** Next.js 16+, Tailwind CSS, Framer Motion, TypeScript, Vercel

**Spec:** `docs/superpowers/specs/2026-03-24-zachbedell-website-redesign-design.md`

---

## File Structure

```
app/
├── layout.tsx                  # Root layout: HTML shell, fonts, nav, footer, global metadata
├── page.tsx                    # Homepage: hero, weddings, events, video teaser, testimonials, bio
├── video/page.tsx              # Video page: YouTube embeds
├── shows/page.tsx              # Shows page: Google Calendar iframe
├── repertoire/page.tsx         # Repertoire: song list by genre
├── contact/page.tsx            # Contact: phone, email, Instagram
├── book/page.tsx               # Book: embedded Google Forms (wedding + events)
├── sitemap.ts                  # Auto-generated sitemap
├── robots.ts                   # Crawl rules
├── globals.css                 # Tailwind imports + custom CSS variables
├── not-found.tsx               # Custom 404 page
components/
├── nav.tsx                     # Sticky nav with mobile hamburger
├── footer.tsx                  # Site footer with social links
├── scroll-section.tsx          # Reusable scroll-animated section wrapper
├── parallax-image.tsx          # Parallax scroll image component
├── service-card.tsx            # Wedding/event service card
├── testimonial.tsx             # Testimonial quote component
├── youtube-embed.tsx           # Responsive YouTube iframe wrapper
├── google-form-embed.tsx       # Responsive Google Form iframe wrapper
├── google-calendar-embed.tsx   # Responsive Google Calendar iframe wrapper
├── song-list.tsx               # Genre-grouped song list
├── structured-data.tsx         # JSON-LD structured data component
lib/
├── songs.ts                    # Song data (typed array)
├── metadata.ts                 # Shared metadata helpers
public/
├── images/                     # Migrated webp photos (clean filenames)
├── llms.txt                    # AI/LLM crawler summary
├── favicon.ico                 # Site favicon
```

---

### Task 1: Project Scaffolding

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `tailwind.config.ts`, `postcss.config.mjs`, `app/globals.css`, `app/layout.tsx`, `app/page.tsx`, `.gitignore`

- [ ] **Step 1: Initialize Next.js project**

Run from project root (`/Users/zachbedell/Music/zbb`):
```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --turbopack --yes
```
Expected: Project scaffolded with `app/` directory, `package.json`, configs.

- [ ] **Step 2: Install Framer Motion**

```bash
npm install framer-motion
```

- [ ] **Step 3: Configure `next.config.ts` for static export**

Replace `next.config.ts` contents:
```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

Note: `output: "export"` produces a fully static site. `images.unoptimized: true` is needed because static export can't use the Next.js image optimization server — images are served as-is (they're already webp and optimized).

- [ ] **Step 4: Set up `app/globals.css` with design tokens**

Replace `app/globals.css`:
```css
@import "tailwindcss";

:root {
  --color-charcoal: #1c1917;
  --color-stone: #292524;
  --color-stone-light: #44403c;
  --color-warm-gray: #a8a29e;
  --color-warm-gray-light: #d6d3d1;
  --color-cream: #fafaf9;
  --color-amber: #d97706;
  --color-amber-light: #f59e0b;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--color-charcoal);
  color: var(--color-cream);
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

- [ ] **Step 5: Verify build**

```bash
npm run build
```
Expected: Build succeeds with static export to `out/` directory.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: scaffold Next.js project with Tailwind CSS and Framer Motion"
```

---

### Task 2: Migrate Images

**Files:**
- Move: `Website images/*.webp` → `public/images/*.webp` (with clean filenames)

- [ ] **Step 1: Create public/images directory and move files with clean names**

```bash
mkdir -p public/images
cp "Website images/IMG_2928.webp" public/images/zach-portrait-1.webp
cp "Website images/Edits-0045.webp" public/images/zach-performance-1.webp
cp "Website images/IMG_3020.webp" public/images/zach-portrait-2.webp
cp "Website images/17211932_1231003820348238_8348482568898474401_o.webp" public/images/zach-stage-wide.webp
cp "Website images/DALL·E+2023-09-06+13.31.10+-+remove+the+mic+stand+and+fill+in+the+gaps+so+it's+just+me.webp" public/images/zach-hero.webp
cp "Website images/DSC_0087.webp" public/images/zach-outdoor-1.webp
cp "Website images/Z&C_front.webp" public/images/wedding-front.webp
cp "Website images/medium.webp" public/images/zach-medium.webp
cp "Website images/Behind.webp" public/images/zach-behind.webp
cp "Website images/DSC03849.webp" public/images/zach-performance-2.webp
cp "Website images/zach_sing.webp" public/images/zach-singing.webp
cp "Website images/DSC09681.webp" public/images/zach-performance-3.webp
cp "Website images/b&w.webp" public/images/zach-bw.webp
cp "Website images/J+Khill+(210+of+224).webp" public/images/zach-event-1.webp
cp "Website images/little_request.webp" public/images/wedding-request.webp
cp "Website images/Z&C_sign.webp" public/images/wedding-sign.webp
cp "Website images/_87A0435.webp" public/images/zach-repertoire.webp
cp "Website images/image_6487327.webp" public/images/zach-booking.webp
```

- [ ] **Step 2: Verify images**

```bash
ls -la public/images/
```
Expected: 17-18 webp files with clean, descriptive names.

- [ ] **Step 3: Commit**

```bash
git add public/images/
git commit -m "feat: migrate site images with clean filenames"
```

---

### Task 3: Shared Components — Navigation, Footer & Page Transitions

**Files:**
- Create: `components/nav.tsx`, `components/footer.tsx`, `components/page-transition.tsx`
- Modify: `app/layout.tsx`

Note: Per the spec, cross-page transitions should be a smooth fade with content sliding up slightly. Create a `components/page-transition.tsx` client component that wraps `{children}` with Framer Motion's `AnimatePresence` keyed to the current pathname. However, since this is a static export (`output: "export"`), `AnimatePresence` page transitions require client-side navigation via `next/link` (which Next.js handles). The `page-transition.tsx` component wraps children in a `motion.div` with `initial={{ opacity: 0, y: 8 }}`, `animate={{ opacity: 1, y: 0 }}`, `transition={{ duration: 0.4 }}` keyed to pathname. Wrap `{children}` in `layout.tsx` with this component.

- [ ] **Step 1: Create `components/nav.tsx`**

Sticky nav that shrinks on scroll, with mobile hamburger menu. Must be a client component (uses state + scroll listener).

```tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/video", label: "Video" },
  { href: "/shows", label: "Shows" },
  { href: "/repertoire", label: "Repertoire" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1c1917]/90 backdrop-blur-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-[0.2em] text-[#fafaf9] uppercase"
        >
          Zach Bedell
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm tracking-wide transition-colors ${
                pathname === link.href
                  ? "text-[#d97706]"
                  : "text-[#a8a29e] hover:text-[#fafaf9]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book"
            className="rounded bg-[#d97706] px-4 py-2 text-sm font-semibold text-[#1c1917] transition-colors hover:bg-[#f59e0b]"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#fafaf9] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-0 z-40 flex flex-col items-center justify-center gap-8 bg-[#1c1917]/98 backdrop-blur-lg md:hidden"
          >
            {[...links, { href: "/book", label: "Book Now" }].map(
              (link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`text-2xl tracking-wide ${
                      link.href === "/book"
                        ? "text-[#d97706] font-semibold"
                        : pathname === link.href
                          ? "text-[#d97706]"
                          : "text-[#fafaf9]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ),
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
```

- [ ] **Step 2: Create `components/footer.tsx`**

```tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#44403c] bg-[#1c1917] px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold tracking-[0.15em] text-[#fafaf9] uppercase">
              Zach Bedell
            </p>
            <p className="mt-1 text-sm text-[#a8a29e]">
              Multi-Instrumentalist &middot; Charleston, SC
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/z_b_music"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a8a29e] transition-colors hover:text-[#d97706]"
              aria-label="Instagram"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="mailto:booking@normalmusic.net"
              className="text-[#a8a29e] transition-colors hover:text-[#d97706]"
              aria-label="Email"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-[#78716c]">
          &copy; {new Date().getFullYear()} Zach Bedell. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
```

- [ ] **Step 3: Update `app/layout.tsx`**

Replace with root layout that includes nav, footer, fonts, and global metadata:

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zachbedell.com"),
  title: {
    default: "Zach Bedell | Charleston SC Wedding Band & Live Music",
    template: "%s | Zach Bedell",
  },
  description:
    "Zach Bedell is a multi-instrumentalist based in Charleston, SC specializing in weddings, private events, and live music. Berklee College of Music graduate with over a decade of experience.",
  keywords: [
    "charleston wedding band",
    "charleston live music",
    "charleston wedding musician",
    "charleston sc private event band",
    "live band for hire charleston",
    "zach bedell",
    "zach bedell band",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zachbedell.com",
    siteName: "Zach Bedell",
    title: "Zach Bedell | Charleston SC Wedding Band & Live Music",
    description:
      "Multi-instrumentalist based in Charleston, SC specializing in weddings, private events, and live music.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zach Bedell | Charleston SC Wedding Band & Live Music",
    description:
      "Multi-instrumentalist based in Charleston, SC specializing in weddings, private events, and live music.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-[#1c1917] text-[#fafaf9] antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

- [ ] **Step 4: Replace `app/page.tsx` with placeholder**

```tsx
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1 className="text-4xl font-bold">Zach Bedell</h1>
    </div>
  );
}
```

- [ ] **Step 5: Verify build and dev server**

```bash
npm run build
```
Expected: Builds successfully with static export.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: add navigation, footer, root layout with global metadata"
```

---

### Task 4: Reusable Animation Components

**Files:**
- Create: `components/scroll-section.tsx`, `components/parallax-image.tsx`, `components/service-card.tsx`, `components/testimonial.tsx`

- [ ] **Step 1: Create `components/scroll-section.tsx`**

Reusable wrapper that animates children into view on scroll:

```tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

const directionOffset = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: 40 },
  right: { x: -40 },
};

export default function ScrollSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: ScrollSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, ...directionOffset[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 2: Create `components/parallax-image.tsx`**

Parallax scroll image (desktop only, static on mobile):

```tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ParallaxImage({ src, alt, className = "" }: ParallaxImageProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="hidden md:block h-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>
      {/* Static on mobile */}
      <div className="md:hidden relative h-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Create `components/service-card.tsx`**

```tsx
"use client";

import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  index: number;
}

export default function ServiceCard({ title, description, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="rounded-lg border border-[#44403c] bg-[#292524]/60 p-6"
    >
      <h3 className="text-lg font-semibold text-[#fafaf9]">{title}</h3>
      <p className="mt-2 text-sm text-[#a8a29e]">{description}</p>
    </motion.div>
  );
}
```

- [ ] **Step 4: Create `components/testimonial.tsx`**

```tsx
"use client";

import { motion } from "framer-motion";

interface TestimonialProps {
  quote: string;
  author: string;
  event: string;
}

export default function Testimonial({ quote, author, event }: TestimonialProps) {
  return (
    <motion.blockquote
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1 }}
      className="mx-auto max-w-3xl text-center"
    >
      <p className="text-xl md:text-2xl leading-relaxed text-[#d6d3d1] italic">
        &ldquo;{quote}&rdquo;
      </p>
      <footer className="mt-6">
        <p className="font-semibold text-[#fafaf9]">{author}</p>
        <p className="text-sm text-[#a8a29e]">{event}</p>
      </footer>
    </motion.blockquote>
  );
}
```

- [ ] **Step 5: Verify build**

```bash
npm run build
```
Expected: Build succeeds.

- [ ] **Step 6: Commit**

```bash
git add components/
git commit -m "feat: add reusable scroll animation components"
```

---

### Task 5: Embed Components (YouTube, Google Form, Google Calendar)

**Files:**
- Create: `components/youtube-embed.tsx`, `components/google-form-embed.tsx`, `components/google-calendar-embed.tsx`

- [ ] **Step 1: Create `components/youtube-embed.tsx`**

Responsive YouTube iframe with lazy loading:

```tsx
interface YouTubeEmbedProps {
  videoId: string;
  title: string;
}

export default function YouTubeEmbed({ videoId, title }: YouTubeEmbedProps) {
  return (
    <div className="relative w-full overflow-hidden rounded-lg" style={{ paddingBottom: "56.25%" }}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}
```

- [ ] **Step 2: Create `components/google-form-embed.tsx`**

```tsx
interface GoogleFormEmbedProps {
  formUrl: string;
  title: string;
  height?: number;
}

export default function GoogleFormEmbed({ formUrl, title, height = 3000 }: GoogleFormEmbedProps) {
  return (
    <div className="w-full overflow-hidden rounded-lg bg-white">
      <iframe
        src={formUrl}
        title={title}
        width="100%"
        height={height}
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
        loading="lazy"
        className="w-full"
      >
        Loading...
      </iframe>
    </div>
  );
}
```

- [ ] **Step 3: Create `components/google-calendar-embed.tsx`**

```tsx
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
```

- [ ] **Step 4: Verify build**

```bash
npm run build
```

- [ ] **Step 5: Commit**

```bash
git add components/
git commit -m "feat: add YouTube, Google Form, and Google Calendar embed components"
```

---

### Task 6: Song Data

**Files:**
- Create: `lib/songs.ts`, `components/song-list.tsx`

- [ ] **Step 1: Create `lib/songs.ts`**

Typed song data extracted from the current site. Structure as array of genre groups:

```ts
export interface SongGenre {
  genre: string;
  songs: string[];
}

export const songList: SongGenre[] = [
  {
    genre: "Rock / Classic Rock",
    songs: [
      "Won't Back Down - Tom Petty",
      "Feelin' Alright - Joe Cocker",
      "Call Me Al - Paul Simon",
      "Drops of Jupiter - Train",
      "Hard To Handle - Black Crows",
      "Mr. Brightside - The Killers",
      "Mr. Jones - Counting Crows",
      "Stuck in the Middle - Steeler's Wheel",
      "American Girl - Tom Petty",
      "Semi Charmed Life - Third Eye Blind",
      "This Love - Maroon 5",
      "Hotel California - The Eagles",
      "What's Up - Four Non Blondes",
      "Sweet Home Alabama - Lynyrd Skynyrd",
      "Piano Man - Billy Joel",
      "Hey Jude - The Beatles",
      "Brown Eyed Girl - Van Morrison",
      "Cripple Creek - The Band",
      "Don't Stop Believing - Journey",
      "3AM - Matchbox 20",
      "Mary Jane's Last Dance - Tom Petty",
      "Hold My Hand - Hootie and the Blowfish",
      "Jessie's Girl - Rick Springfield",
      "Bohemian Rhapsody - Queen",
      "Fat Bottomed Girls - Queen",
      "Dreams - Fleetwood Mac",
      "Can't You See - Marshall Tucker Band",
      "Higher - Creed",
      "Everlong - Foo Fighters",
      "S.O.B. - Nathaniel Rateliff & the Night Sweats",
    ],
  },
  {
    genre: "Pop / Top 40",
    songs: [
      "Anti-Hero - Taylor Swift",
      "Blank Space - Taylor Swift",
      "Redbone - Childish Gambino",
      "Sunday Morning - Maroon 5",
      "Queen Of California - John Mayer",
      "Under the Bridge - Red Hot Chili Peppers",
      "Shape of You - Ed Sheeran",
      "Slow Hands - Niall Horan",
      "Valerie - Amy Winehouse",
      "Lovely Day - Bill Withers",
      "Don't Wanna Live Forever - Zayn and Taylor Swift",
      "You Make My Dreams - Hall & Oates",
      "Feel It Still - Portugal. The Man",
      "There's Nothing Holding Me Back - Shawn Mendes",
      "Ride - Twenty One Pilots",
      "The Middle - Zedd",
      "I Try - Macy Gray",
      "That's What I Like - Bruno Mars",
      "Stitches - Shawn Mendes",
      "Truth Hurts - Lizzo",
      "Talk - Khalid",
      "All I Want For Christmas Is You - Mariah Carey",
      "Good As Hell - Lizzo",
      "Blinding Lights - The Weeknd",
      "Not Over You - Gavin DeGraw",
      "Peaches - Justin Bieber",
      "Love Yourself - Justin Bieber",
    ],
  },
  {
    genre: "Soul / R&B / Funk",
    songs: [
      "Kissing My Love - Bill Withers",
      "Pony - Ginuwine",
      "I Wish - Stevie Wonder",
      "PYT - Michael Jackson",
      "Kiss - Prince",
      "Superstition - Stevie Wonder",
      "Signed Sealed Delivered - Stevie Wonder",
      "Tell Me Something Good - Chaka Khan/Rufus",
      "Boogie On Reggae Woman - Stevie Wonder",
      "I Wanna Be Your Lover - Prince",
      "Purple Rain - Prince",
      "If I Ain't Got You - Alicia Keys",
    ],
  },
  {
    genre: "Country",
    songs: [
      "Chicken Fried - Zac Brown Band",
      "Meant to Be - Florida Georgia Line",
      "Drink in My Hand - Eric Church",
      "Friends in Low Places - Garth Brooks",
      "Tennessee Whiskey - Chris Stapleton",
      "Beer Never Broke My Heart - Luke Combs",
      "When It Rains It Pours - Luke Combs",
      "Whitehouse Road - Tyler Childers",
      "You Should Probably Leave - Chris Stapleton",
      "Save a Horse - Big & Rich",
      "Wagon Wheel - Old Crow Medicine Show/Darius Rucker",
      "Pour Me A Drink - Post Malone/Blake Shelton",
      "I Had Some Help - Morgan Wallen/Post Malone",
      "Whiskey Glasses - Morgan Wallen",
      "Headin South - Zach Bryan",
      "Revival - Zach Bryan",
    ],
  },
  {
    genre: "Indie / Alternative",
    songs: [
      "Not The Only One - Sam Smith",
      "Time To Pretend - MGMT",
      "Perfect - Ed Sheeran",
      "Shut Up and Dance - Walk the Moon",
      "Whatever It Takes - Imagine Dragons",
      "Sex on Fire - Kings of Leon",
      "Back Down South - Kings of Leon",
      "Gold on the Ceiling - Black Keys",
      "Ain't No Rest for the Wicked - Cage the Elephant",
      "Dial Drunk - Noah Kahan",
      "My Body - Young the Giant",
      "Midnight City - M83",
      "Fix You - Coldplay",
      "Yellow - Coldplay",
      "When You Were Young - The Killers",
      "Northern Attitude - Noah Kahan/Hozier",
      "Pink Pony Club - Chappell Roan",
    ],
  },
  {
    genre: "Hip-Hop / Rap",
    songs: [
      "Hey Ya! - Outkast",
      "Tipsy (A Bar Song) - Shaboozey",
    ],
  },
  {
    genre: "Reggae / Ska",
    songs: [
      "Caress Me Down - Sublime",
      "Badfish - Sublime",
      "Three Little Birds - Bob Marley",
    ],
  },
  {
    genre: "Folk / Acoustic",
    songs: [
      "Neon - John Mayer",
      "Stop This Train - John Mayer",
      "Why Georgia - John Mayer",
      "Slow Dancing in a Burning Room - John Mayer",
      "Waiting on the World to Change - John Mayer",
      "Little Lion Man - Avett Brothers",
      "Ho Hey - The Lumineers",
    ],
  },
  {
    genre: "Punk / Emo / Pop Punk",
    songs: [
      "My Own Worst Enemy - Lit",
      "The Middle - Jimmy Eat World",
      "All the Small Things - Blink-182",
      "What's My Age Again - Blink-182",
      "Sugar, We're Going Down - Fall Out Boy",
      "Teenage Dirtbag - Wheatus",
      "Ain't It Fun - Paramore",
    ],
  },
  {
    genre: "Classic Pop / Oldies",
    songs: [
      "Stand by Me - Ben E. King",
      "The Joker - Steve Miller Band",
      "Africa - Toto",
      "Sweet Caroline - Neil Diamond",
      "Dance With Somebody - Whitney Houston",
      "I Want It That Way - Backstreet Boys",
      "Your Song - Elton John",
      "Bennie and the Jets - Elton John",
      "Tiny Dancer - Elton John",
      "Rocket Man - Elton John",
    ],
  },
  {
    genre: "Christian / Southern Rock",
    songs: [
      "The Outsiders - NEEDTOBREATHE",
      "Washed by the Water - NEEDTOBREATHE",
      "White Horse - Chris Stapleton",
    ],
  },
];
```

- [ ] **Step 2: Create `components/song-list.tsx`**

```tsx
import { songList } from "@/lib/songs";

export default function SongList() {
  return (
    <div className="space-y-10">
      {songList.map((genre) => (
        <section key={genre.genre}>
          <h2 className="mb-4 text-xl font-semibold text-[#d97706]">
            {genre.genre}
          </h2>
          <ul className="grid gap-1 sm:grid-cols-2 lg:grid-cols-3">
            {genre.songs.map((song) => (
              <li
                key={song}
                className="text-sm text-[#d6d3d1] py-1"
              >
                {song}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
```

- [ ] **Step 3: Verify build**

```bash
npm run build
```

- [ ] **Step 4: Commit**

```bash
git add lib/ components/song-list.tsx
git commit -m "feat: add typed song data and song list component"
```

---

### Task 7: Homepage — Full Cinematic Scroll Experience

**Files:**
- Modify: `app/page.tsx`
- Create: `components/structured-data.tsx`

This is the largest task. The homepage has 6 animated sections as defined in the spec.

- [ ] **Step 1: Create `components/structured-data.tsx`**

JSON-LD component for SEO:

```tsx
interface StructuredDataProps {
  data: Record<string, unknown>;
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
```

- [ ] **Step 2: Build `app/page.tsx` with all 6 homepage sections**

Build the full homepage with: Hero (Ken Burns zoom, fade-in text, scroll indicator), Wedding Services (parallax photo, staggered service cards), Private Events (fade+scale gallery), Video Teaser (clip-path reveal), Testimonials (fade-in quote), Bio (gentle fade-in, Instagram link, final CTA). Include LocalBusiness + MusicGroup + FAQPage JSON-LD structured data.

The homepage is a client component (needs Framer Motion). Each section uses the reusable `ScrollSection`, `ParallaxImage`, `ServiceCard`, and `Testimonial` components from Task 4. The hero uses a custom Ken Burns animation with `motion.div` and `animate`. Wedding section uses a split layout with `ParallaxImage` on the left and staggered `ServiceCard` components on the right. Video teaser section embeds one YouTube video using the `YouTubeEmbed` component from Task 5, wrapped in a clip-path reveal animation. The structured data includes all JSON-LD schemas per the spec.

Implementation notes:
- Hero: full-viewport `min-h-screen`, background image with `motion.div` scale animation from 1.0 to 1.1 over 20s, name/tagline fade-in with `y: 20 → 0`, bouncing scroll arrow via CSS animation
- Wedding: `grid md:grid-cols-2`, left side `ParallaxImage` with wedding photo, right side has text + 4 `ServiceCard` components with `index` prop for stagger delay
- Events: `ScrollSection` wrapper with `scale` animation (0.95→1), grid of event photos
- Video: `motion.div` with `clipPath` animation from `inset(50% 50% 50% 50%)` to `inset(0% 0% 0% 0%)` wrapping `YouTubeEmbed`
- Testimonials: `Testimonial` component with the O'Connor quote
- Bio: `ScrollSection` with bio text, instruments list, Instagram link, final "Book Now" CTA
- Structured data: `StructuredData` component rendered at page bottom with `LocalBusiness`, `MusicGroup`, and `FAQPage` schemas

- [ ] **Step 3: Verify build and visually check dev server**

```bash
npm run build
```

- [ ] **Step 4: Commit**

```bash
git add app/page.tsx components/structured-data.tsx
git commit -m "feat: build homepage with cinematic scroll sections and structured data"
```

---

### Task 8: Video Page

**Files:**
- Create: `app/video/page.tsx`

- [ ] **Step 1: Create `app/video/page.tsx`**

Page with YouTube embeds and page-specific metadata:

```tsx
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
```

- [ ] **Step 2: Verify build**

```bash
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add app/video/
git commit -m "feat: add video page with YouTube embeds"
```

---

### Task 9: Shows Page

**Files:**
- Create: `app/shows/page.tsx`

- [ ] **Step 1: Create `app/shows/page.tsx`**

Page with Google Calendar embed. Note: the calendar URL will need to be provided by the user — use a placeholder that's easy to find/replace:

```tsx
import type { Metadata } from "next";
import GoogleCalendarEmbed from "@/components/google-calendar-embed";
import ScrollSection from "@/components/scroll-section";

export const metadata: Metadata = {
  title: "Upcoming Shows & Events",
  description:
    "See upcoming live music shows and events with Zach Bedell in Charleston, SC and across the Southeast. Bar gigs, festivals, and public performances.",
};

// TODO: Replace with actual Google Calendar public embed URL
const CALENDAR_URL =
  "https://calendar.google.com/calendar/embed?src=CALENDAR_ID_HERE&ctz=America/New_York&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=0&showTz=0&mode=MONTH";

export default function ShowsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 pt-28 pb-16">
      <ScrollSection>
        <h1 className="text-4xl font-bold tracking-tight">
          Upcoming Shows
        </h1>
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
```

- [ ] **Step 2: Verify build**

```bash
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add app/shows/
git commit -m "feat: add shows page with Google Calendar embed"
```

---

### Task 10: Repertoire Page

**Files:**
- Create: `app/repertoire/page.tsx`

- [ ] **Step 1: Create `app/repertoire/page.tsx`**

```tsx
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
```

- [ ] **Step 2: Verify build**

```bash
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add app/repertoire/
git commit -m "feat: add repertoire page with full song list"
```

---

### Task 11: Contact Page

**Files:**
- Create: `app/contact/page.tsx`

- [ ] **Step 1: Create `app/contact/page.tsx`**

```tsx
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
              <a href="tel:7034032066" className="hover:text-[#d97706] transition-colors">
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
```

- [ ] **Step 2: Verify build**

```bash
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add app/contact/
git commit -m "feat: add contact page"
```

---

### Task 12: Book (Quote Request) Page

**Files:**
- Create: `app/book/page.tsx`

- [ ] **Step 1: Create `app/book/page.tsx`**

Page with two embedded Google Forms — tabs or sections for wedding vs. private event:

```tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import GoogleFormEmbed from "@/components/google-form-embed";
import ScrollSection from "@/components/scroll-section";

const forms = [
  {
    id: "wedding",
    label: "Wedding",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfrXS_hvr2rquE4812X1YWWnrQVehmctHURX_BFHB0c7euLdw/viewform?embedded=true",
    height: 5500,
  },
  {
    id: "event",
    label: "Private Event",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSdDKIWbELNh4aEPtIOki9e-yOVkA8C8bBexFkmbF2lj6SSgpA/viewform?embedded=true",
    height: 3100,
  },
];

export default function BookPage() {
  const [activeForm, setActiveForm] = useState("wedding");
  const current = forms.find((f) => f.id === activeForm)!;

  return (
    <div className="mx-auto max-w-3xl px-6 pt-28 pb-16">
      <ScrollSection>
        <h1 className="text-4xl font-bold tracking-tight">Request a Quote</h1>
        <p className="mt-4 text-lg text-[#a8a29e]">
          Fill out the form below and Zach will reach out with pricing
          information shortly.
        </p>
      </ScrollSection>

      <div className="mt-10">
        {/* Tab switcher */}
        <div className="flex gap-2 mb-8">
          {forms.map((form) => (
            <button
              key={form.id}
              onClick={() => setActiveForm(form.id)}
              className={`rounded-lg px-6 py-3 text-sm font-semibold transition-colors ${
                activeForm === form.id
                  ? "bg-[#d97706] text-[#1c1917]"
                  : "bg-[#292524] text-[#a8a29e] hover:text-[#fafaf9]"
              }`}
            >
              {form.label}
            </button>
          ))}
        </div>

        <motion.div
          key={activeForm}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <GoogleFormEmbed
            formUrl={current.url}
            title={`${current.label} Quote Request`}
            height={current.height}
          />
        </motion.div>
      </div>
    </div>
  );
}
```

Note: This page is a client component because it uses `useState` for the tab switcher. We need to add metadata separately.

- [ ] **Step 2: Add metadata via a separate layout or `generateMetadata` is not available in client components — create a `app/book/layout.tsx` wrapper**

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Quote | Weddings & Private Events",
  description:
    "Request a quote for your wedding, corporate event, or private party in Charleston, SC. Zach Bedell offers customizable live music packages.",
};

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return children;
}
```

- [ ] **Step 3: Verify build**

```bash
npm run build
```

- [ ] **Step 4: Commit**

```bash
git add app/book/
git commit -m "feat: add booking page with embedded Google Forms and tab switcher"
```

---

### Task 13: SEO — Sitemap, Robots, llms.txt, 404

**Files:**
- Create: `app/sitemap.ts`, `app/robots.ts`, `app/not-found.tsx`, `public/llms.txt`

- [ ] **Step 1: Create `app/sitemap.ts`**

```ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://zachbedell.com";
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/video`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/shows`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/repertoire`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "yearly", priority: 0.8 },
    { url: `${baseUrl}/book`, lastModified, changeFrequency: "yearly", priority: 0.9 },
  ];
}
```

- [ ] **Step 2: Create `app/robots.ts`**

```ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://zachbedell.com/sitemap.xml",
  };
}
```

- [ ] **Step 3: Create `public/llms.txt`**

```text
# Zach Bedell — Charleston SC Live Music & Wedding Band

## Who
Zach Bedell is a professional multi-instrumentalist and songwriter based in Charleston, South Carolina. He graduated from Berklee College of Music in 2009 and has over 15 years of experience performing at weddings, private events, corporate functions, and live music venues across the Southeast.

## Instruments
Vocals, keyboards, guitar, drums, bass.

## Services
- Wedding entertainment (ceremony, cocktail hour, reception, DJ/Emcee services)
- Private event and corporate event live music
- Bar and venue live performances
- Customizable packages for events of any size
- Premium lighting and sound available

## Service Area
Charleston, SC and the Southeast United States.

## Repertoire
Over 100 songs spanning rock, pop, country, soul, R&B, funk, indie, folk, reggae, and more. Full song list at https://zachbedell.com/repertoire

## Contact
- Phone: 703-403-2066
- Email: booking@normalmusic.net
- Instagram: @z_b_music
- Website: https://zachbedell.com

## Booking
Request a quote at https://zachbedell.com/book

## Upcoming Shows
See schedule at https://zachbedell.com/shows
```

- [ ] **Step 4: Create `app/not-found.tsx`**

```tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-bold text-[#d97706]">404</h1>
      <p className="mt-4 text-xl text-[#a8a29e]">Page not found</p>
      <Link
        href="/"
        className="mt-8 rounded bg-[#d97706] px-6 py-3 font-semibold text-[#1c1917] transition-colors hover:bg-[#f59e0b]"
      >
        Back to Home
      </Link>
    </div>
  );
}
```

- [ ] **Step 5: Verify build**

```bash
npm run build
```
Expected: Build produces `out/sitemap.xml`, `out/robots.txt`, `out/llms.txt`, `out/404.html`.

- [ ] **Step 6: Commit**

```bash
git add app/sitemap.ts app/robots.ts app/not-found.tsx public/llms.txt
git commit -m "feat: add sitemap, robots.txt, llms.txt, and 404 page"
```

---

### Task 14: Final Build Verification & Cleanup

**Files:**
- Modify: `.gitignore`

- [ ] **Step 1: Update `.gitignore`**

Ensure these are in `.gitignore`:
```
.firecrawl/
.superpowers/
out/
Website images/
```

- [ ] **Step 2: Run lint**

```bash
npm run lint
```
Fix any issues.

- [ ] **Step 3: Run full production build**

```bash
npm run build
```
Expected: All 6 pages + sitemap + robots exported to `out/`.

- [ ] **Step 4: Start local production server and visually verify**

```bash
npx serve out
```
Open in browser — check all 6 pages, mobile view, animations, embeds.

- [ ] **Step 5: Commit any cleanup**

```bash
git add -A
git commit -m "chore: final build verification and gitignore cleanup"
```

---

### Task 15: GitHub + Vercel Deployment

- [ ] **Step 1: Create GitHub repository**

```bash
gh repo create zachbedell-website --private --source=. --push
```

- [ ] **Step 2: Connect to Vercel**

```bash
npx vercel link
```
Follow prompts to link to your Vercel account and create a new project.

- [ ] **Step 3: Deploy to Vercel**

```bash
npx vercel --prod
```
Expected: Site deployed and accessible at a `.vercel.app` URL.

- [ ] **Step 4: Add custom domain**

In Vercel dashboard → Project Settings → Domains → Add `zachbedell.com` and `www.zachbedell.com`.

Vercel will display the DNS records needed. Then in Squarespace Domains → zachbedell.com → DNS Settings:
- Delete existing A/CNAME records pointing to Squarespace
- Add A record: `@` → `76.76.21.21` (confirm exact IP from Vercel)
- Add CNAME record: `www` → `cname.vercel-dns.com`

Wait for DNS propagation (usually 5-30 minutes).

- [ ] **Step 5: Verify live site**

Visit `https://zachbedell.com` — confirm SSL, all pages, mobile responsiveness.

- [ ] **Step 6: Submit to Google Search Console**

1. Go to Google Search Console
2. Add property `zachbedell.com`
3. Verify via DNS TXT record (add to Squarespace DNS)
4. Submit sitemap URL: `https://zachbedell.com/sitemap.xml`
