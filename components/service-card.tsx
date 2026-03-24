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
