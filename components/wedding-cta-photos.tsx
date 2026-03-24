"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ctaPhotos = [
  { src: "/images/ws-cta-1.jpeg", alt: "Zach Bedell performing at a wedding", rotate: "-3deg" },
  { src: "/images/ws-cta-2.jpeg", alt: "Live band performance at wedding reception", rotate: "2deg" },
  { src: "/images/ws-cta-3.jpeg", alt: "Wedding guests dancing to live music", rotate: "-1.5deg" },
  { src: "/images/ws-cta-4.jpeg", alt: "Zach Bedell Band full performance", rotate: "3.5deg" },
];

export default function WeddingCtaPhotos() {
  return (
    <div className="flex justify-center items-end gap-3 md:gap-5 mb-14 flex-wrap">
      {ctaPhotos.map((photo, i) => (
        <motion.div
          key={photo.src}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
          style={{ rotate: photo.rotate }}
          className="relative w-36 h-44 md:w-44 md:h-56 rounded-lg overflow-hidden shadow-2xl flex-shrink-0"
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 144px, 176px"
          />
        </motion.div>
      ))}
    </div>
  );
}
