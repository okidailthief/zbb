"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WeddingHero() {
  return (
    <section className="relative h-[90vh] min-h-[560px] flex items-center justify-center overflow-hidden">
      <Image
        src="/images/ws-full-stage.png"
        alt="Zach Bedell Band full stage setup at a wedding"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/60" />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center px-6"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d97706] mb-4">
          Premium Entertainment Upgrades
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-[#fafaf9] leading-tight">
          Elevate Your Event
        </h1>
      </motion.div>
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[#a8a29e] text-xs uppercase tracking-widest">Scroll</span>
        <motion.svg
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#a8a29e"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" />
        </motion.svg>
      </motion.div>
    </section>
  );
}
