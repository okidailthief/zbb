# zachbedell.com Website Redesign — Design Spec

## Overview

Rebuild zachbedell.com as a professional promotional website for Zach Bedell, a multi-instrumentalist and songwriter based in Charleston, SC. The site targets wedding clients, private event/corporate clients, bar gig clients, and potential musician collaborators (in that priority order).

**Current state:** Squarespace-hosted site with 7 pages.

**New state:** Next.js static site on Vercel free tier with 6 pages (Home, Video, Shows, Repertoire, Contact, Book), cinematic scroll animations, embedded Google Forms/Calendar/YouTube, expert SEO, and mobile-first responsive design.

## Tech Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | Next.js (App Router) | SSG, built-in SEO tooling, Image optimization |
| Styling | Tailwind CSS | Mobile-first responsive, utility classes |
| Animations | Framer Motion | Scroll-triggered animations, parallax, page transitions |
| Hosting | Vercel (free tier) | Auto-deploy from GitHub, global CDN, free SSL, 100GB bandwidth/mo |
| Domain | Squarespace (existing) | DNS records updated to point to Vercel |
| Embeds | Google Calendar (iframe), Google Forms (iframe), YouTube (iframe) | Zero API keys, zero backend, zero maintenance |
| Images | Bundled in public/images/ | 18 webp files, optimized via Next.js Image component |

## Site Architecture

### Routes

```
app/
├── layout.tsx          — Root layout (nav, footer, fonts, metadata)
├── page.tsx            — / Home (hero, wedding pitch, events, video teaser, testimonials, bio)
├── video/
│   └── page.tsx        — /video (YouTube embeds)
├── shows/
│   └── page.tsx        — /shows (Google Calendar embed)
├── repertoire/
│   └── page.tsx        — /repertoire (song list by genre)
├── contact/
│   └── page.tsx        — /contact (phone, email, Instagram)
├── book/
│   └── page.tsx        — /book (embedded Google Forms for wedding + event quotes)
├── sitemap.ts          — Auto-generated sitemap
└── robots.ts           — Search engine crawl rules
```

### Key Architecture Decisions

- **100% Static (SSG):** All pages pre-rendered at build time. No server at runtime. Maximum speed, zero hosting cost.
- **Shared Layout:** Navigation and footer in root layout.tsx. Mobile hamburger menu. Consistent branding.
- **External Embeds:** Google Calendar, Google Forms, and YouTube all via iframes. No API keys, no OAuth, no backend.
- **Images Bundled:** 18 webp photos in public/images/. Next.js Image component auto-generates responsive sizes and lazy-loads.

## Visual Design

### Direction: Warm & Modern

- **Palette:** Dark warm tones (charcoal `#1c1917`, stone `#292524`) with amber/gold accents (`#d97706`)
- **Typography:** Clean sans-serif. Large headings with generous letter-spacing. Body text in warm gray (`#a8a29e`)
- **Layout:** Split-screen hero with text overlaying imagery. Clear CTAs in amber. Editorial feel.
- **Cards/Sections:** Subtle borders with low-opacity backgrounds. Rounded corners.
- **Mobile:** Full-screen overlay navigation with staggered link animations. Single-column layouts. Touch-friendly tap targets.

### Navigation

- **Desktop:** Sticky top nav that shrinks and becomes translucent on scroll. Links: Home, Video, Shows, Repertoire, Contact, Book (Book styled as CTA button).
- **Mobile:** Hamburger icon → full-screen overlay menu with staggered animations.

## Scroll Animations (Homepage)

All animations powered by Framer Motion with `whileInView` triggers.

### Section 1: Hero (Full Viewport)
- Full-screen hero with best photo as background
- Name and tagline fade in with subtle upward drift
- "Book Now" CTA with gentle pulse
- Background image: slow Ken Burns zoom effect
- Scroll indicator arrow at bottom bounces softly
- **Type:** Snap section

### Section 2: Wedding Services
- Split layout — wedding photo with parallax scroll (moves slower than content)
- Text and service highlights slide in from opposite side
- Service cards (Ceremony, Cocktail Hour, Reception, DJ/Emcee) stagger-animate in
- CTA to /book fades in last
- **Type:** Parallax + reveal

### Section 3: Private Events & Corporate
- Photo gallery fades in with slight scale-up (0.95 → 1.0)
- Brief pitch text overlay
- Shorter bridge section between weddings and live music
- **Type:** Fade + scale

### Section 4: Live Music / Video Teaser
- YouTube embed or thumbnail reveals via clip-path animation expanding from center
- Link to full /video page
- **Type:** Clip reveal

### Section 5: Testimonials
- Large pull-quote fades in with typewriter feel (words appearing in sequence)
- Client name and event type below
- Supports carousel/auto-rotate for future additional testimonials
- **Type:** Typewriter + fade

### Section 6: About / Bio
- Berklee bio, photo, instrument list
- Simple fade-in (energy winds down)
- Instagram link (@z_b_music) and social icons
- Final CTA to /book
- **Type:** Gentle fade-in

### Global Animation Behaviors

- **Page transitions:** Smooth fade between pages with content sliding up slightly
- **Mobile:** All animations simplified — simpler fades, no parallax (performance)
- **Accessibility:** Respects `prefers-reduced-motion` — all animations disabled
- **Navigation:** Sticky nav shrinks/becomes translucent on scroll

## SEO Strategy

### Technical SEO

- Next.js Metadata API on every page — unique title, description, Open Graph images
- Auto-generated sitemap.xml and robots.txt
- Static HTML output — Google sees fully rendered content (no JS rendering delays)
- Semantic HTML (`<main>`, `<article>`, `<section>`, proper heading hierarchy)
- Next.js Image component generates responsive `srcset` + lazy loading for fast Core Web Vitals
- Canonical URLs on every page
- Internal linking between pages (wedding section → /book, /repertoire)
- Alt text on all images

### Structured Data (JSON-LD)

- **LocalBusiness** — name, address (Charleston, SC), phone, service area
- **MusicGroup** — genre, instruments, member info
- **Event** — ties into shows/calendar for rich search results
- **FAQPage** — on wedding section for expanded search results in Google

### Target Keywords

| Priority | Keywords |
|----------|----------|
| Primary | charleston sc wedding band, charleston live music, charleston wedding musician |
| Secondary | charleston sc private event band, charleston corporate event music, live band for hire charleston |
| Long-tail | wedding band charleston south carolina, live music for weddings charleston, cocktail hour musician charleston sc |
| Name-based | zach bedell, zach bedell band |

### Page-Level SEO

| Page | Title | Focus Keyword |
|------|-------|---------------|
| Home | Zach Bedell \| Charleston SC Wedding Band & Live Music | charleston wedding band |
| Video | Live Performance Videos \| Zach Bedell Band | charleston live band video |
| Shows | Upcoming Shows & Events \| Zach Bedell | live music charleston sc |
| Repertoire | Song List \| Zach Bedell Band Charleston | wedding band song list |
| Contact | Book Zach Bedell \| Charleston Wedding & Event Musician | book charleston musician |
| Book | Request a Quote \| Weddings & Private Events | charleston wedding band quote |

### AI/Agentic Search Optimization

- **llms.txt** at site root — plaintext structured summary for AI crawlers (who you are, services, service area, how to book)
- **Clear, factual prose** — declarative content that AI models can extract as answers (vs. marketing fluff)
- **Thorough Schema.org markup** — AI search tools (Google SGE, Perplexity, ChatGPT Browse) rely heavily on structured data
- **FAQ content** — explicit Q&A pairs AI models can surface directly ("How much does a wedding band cost in Charleston?")

### Additional SEO

- Open Graph + Twitter Card metadata for social sharing
- Alt text on all images describing the scene
- Google Search Console submission after launch

## Deployment & DNS

### Pipeline

1. Push to `main` branch on GitHub
2. Vercel automatically builds (SSG — renders all pages to static HTML, optimizes images)
3. Deployed to Vercel CDN (edge locations worldwide, free SSL auto-provisioned)
4. zachbedell.com serves new version (instant rollback available)

### DNS Setup (One-Time, in Squarespace)

In Squarespace Domains → zachbedell.com → DNS Settings:

| Type | Host | Value |
|------|------|-------|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

*Exact values confirmed when domain is added to Vercel.*

### Cost

| Item | Cost |
|------|------|
| Vercel Hosting (free tier) | $0/mo |
| SSL Certificate | $0/mo |
| GitHub Repository | $0/mo |
| Google Calendar embed | $0/mo |
| Google Forms embed | $0/mo |
| Domain (Squarespace, existing) | ~$20/yr |
| **Total new cost** | **$0/mo** |

Squarespace website subscription can be cancelled once the new site is live — only keep the domain registration.

## Content Inventory

### Images (18 webp files in `Website images/`)

To be moved to `public/images/` with clean filenames during implementation.

### Videos (YouTube)

- Mr. Brightside promo: `https://youtu.be/d2CKChMceew`
- Bennie and the Jets promo: `https://youtu.be/X86BA1UrEms`

### Google Forms

- Wedding intake form: `https://docs.google.com/forms/d/e/1FAIpQLSfrXS_hvr2rquE4812X1YWWnrQVehmctHURX_BFHB0c7euLdw/viewform?embedded=true`
- Private event form: `https://docs.google.com/forms/d/e/1FAIpQLSdDKIWbELNh4aEPtIOki9e-yOVkA8C8bBexFkmbF2lj6SSgpA/viewform?embedded=true`

### Google Calendar

- Specific calendar from Zach's Google account (public embed URL to be provided during implementation)

### Social Links

- Instagram: @z_b_music
- Booking email: booking@normalmusic.net
- Phone: 703.403.2066

### Repertoire

100+ songs organized by genre: Rock/Classic Rock, Pop/Top 40, Soul/R&B/Funk, Country, Indie/Alternative, Hip-Hop/Rap, Reggae/Ska, Folk/Acoustic, Punk/Emo/Pop Punk, Classic Pop/Oldies, Christian/Southern Rock. Full list scraped and available in `.firecrawl/zachbedell-songs.md`.

### Testimonial

Kendal and Shea O'Connor wedding testimonial (Alhambra Hall, April 2018). Additional testimonials can be added later via a carousel component.

### Bio/Copy

Existing bio text from current site to be adapted with SEO-optimized, factual prose. Key points: Berklee College of Music graduate (2009), active in Charleston since 2009, multi-instrumentalist (singer, keys, guitar, drums, bass), hundreds of weddings performed, customizable packages.
