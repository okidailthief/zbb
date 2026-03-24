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
    const scrollOptions = { passive: true } as AddEventListenerOptions;
    window.addEventListener("scroll", handleScroll, scrollOptions);
    return () => window.removeEventListener("scroll", handleScroll, scrollOptions);
  }, []);

  useEffect(() => {
    // Close mobile menu on navigation — direct setState in effect is intentional here
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

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
              aria-current={pathname === link.href ? "page" : undefined}
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
          <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
            className="fixed inset-0 top-0 z-50 flex flex-col items-center justify-center gap-8 bg-[#1c1917]/98 backdrop-blur-lg md:hidden"
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
                    aria-current={pathname === link.href ? "page" : undefined}
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
