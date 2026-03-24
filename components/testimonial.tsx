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
