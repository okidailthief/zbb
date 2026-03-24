"use client";

import { motion } from "framer-motion";

interface TestimonialProps {
  quote: string;
  author: string;
  event: string;
  title?: string;
  delay?: number;
}

function Stars() {
  return (
    <div className="flex gap-0.5 mb-3" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-4 w-4 text-[#d97706]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118L10 14.347l-3.95 2.878c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.065 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.05 2.927z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonial({ quote, author, event, title, delay = 0 }: TestimonialProps) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay }}
      className="flex flex-col bg-[#292524] rounded-xl p-7 border border-[#44403c]"
    >
      <Stars />
      {title && (
        <p className="font-semibold text-[#fafaf9] mb-3">{title}</p>
      )}
      <p className="text-[#a8a29e] leading-relaxed italic flex-1">
        &ldquo;{quote}&rdquo;
      </p>
      <footer className="mt-5 pt-5 border-t border-[#44403c]">
        <p className="font-semibold text-[#fafaf9] text-sm">{author}</p>
        <p className="text-xs text-[#78716c] mt-0.5">{event}</p>
      </footer>
    </motion.blockquote>
  );
}
