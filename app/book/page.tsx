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
    directUrl: "https://forms.gle/mdwkxpiDttm3WWWN9",
    height: 5500,
  },
  {
    id: "event",
    label: "Private Event",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSdDKIWbELNh4aEPtIOki9e-yOVkA8C8bBexFkmbF2lj6SSgpA/viewform?embedded=true",
    directUrl: "https://forms.gle/2YUEC6vBXG7RwkXE8",
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
              aria-pressed={activeForm === form.id}
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
          <p className="mb-3 text-sm text-[#a8a29e]">
            Form not displaying correctly?{" "}
            <a
              href={current.directUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d97706] underline hover:text-[#f59e0b]"
            >
              Open it in a new tab.
            </a>
          </p>
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
