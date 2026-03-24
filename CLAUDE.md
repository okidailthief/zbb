# zachbedell.com

Professional promotional website for Zach Bedell — multi-instrumentalist and songwriter based in Charleston, SC.

## Tech Stack

- **Framework:** Next.js (App Router) with static site generation (SSG)
- **Styling:** Tailwind CSS (mobile-first)
- **Animations:** Framer Motion (scroll-triggered)
- **Hosting:** Vercel (free tier)
- **Domain:** zachbedell.com (registered via Squarespace, DNS points to Vercel)

## Project Structure

```
app/                    # Next.js App Router pages
  layout.tsx            # Root layout (nav, footer, fonts, metadata)
  page.tsx              # Home page
  video/page.tsx        # YouTube video embeds
  shows/page.tsx        # Google Calendar embed
  repertoire/page.tsx   # Song list by genre
  contact/page.tsx      # Contact info
  book/page.tsx         # Embedded Google Forms (wedding + events)
  sitemap.ts            # Auto-generated sitemap
  robots.ts             # Crawl rules
public/
  images/               # Bundled webp photos (optimized via Next.js Image)
  llms.txt              # AI/LLM crawler summary
docs/
  superpowers/specs/    # Design specs
```

## Development

```bash
npm run dev             # Start dev server (Turbopack)
npm run build           # Production build (SSG)
npm run start           # Serve production build locally
npm run lint            # Run ESLint
```

## Key Design Decisions

- **100% static** — all pages pre-rendered at build time. No server runtime, no API routes, no database.
- **External embeds only** — Google Calendar, Google Forms, YouTube all via iframes. No API keys, no OAuth, no backend.
- **Images bundled** — all photos in public/images/, optimized by Next.js Image component.
- **SEO-first** — structured data (JSON-LD), semantic HTML, optimized metadata on every page, llms.txt for AI search.

## Content Updates

- **Song list:** Edit `app/repertoire/page.tsx` directly
- **Videos:** Add YouTube embed URLs to `app/video/page.tsx`
- **Testimonials:** Add to the testimonials section in `app/page.tsx`
- **Shows/Calendar:** Managed via Google Calendar (auto-updates via embed)
- **Quote forms:** Managed via Google Forms (auto-updates via embed)
- **Images:** Add webp files to `public/images/`

## Deployment

- Push to `main` on GitHub → Vercel auto-deploys
- Preview deployments on pull request branches
- Instant rollback via Vercel dashboard if needed

## Important Notes

- This is a promotional/booking site only — no original music content (The New Normal has a separate presence)
- Target audiences in priority order: wedding clients, private event/corporate clients, bar gig clients, musician collaborators
- All animations respect `prefers-reduced-motion` for accessibility
- Mobile animations are simplified (no parallax) for performance
