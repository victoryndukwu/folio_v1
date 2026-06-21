"use client";

import React from "react";
import { motion } from "framer-motion";

const proofPoints = [
  {
    value: "6+",
    label: "years building production frontend experiences",
  },
  {
    value: "Fintech",
    label: "open banking and product-platform experience",
  },
  {
    value: "React",
    label: "Next.js, TypeScript, Tailwind, and modern UI systems",
  },
  {
    value: "UX",
    label: "performance, accessibility, motion, and polish",
  },
];

function ProofStripSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
    >
      {proofPoints.map((point) => (
        <div
          key={point.value}
          className="rounded-2xl border border-black/5 bg-white/50 p-5 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-accentBlue/25 hover:bg-white/75 dark:border-white/10 dark:bg-white/[0.04] dark:hover:bg-white/[0.07]"
        >
          <p className="font-header text-2xl font-semibold text-black dark:text-white">
            {point.value}
          </p>
          <p className="mt-2 text-sm leading-6 text-darkGray/80 dark:text-white/60">
            {point.label}
          </p>
        </div>
      ))}
    </motion.section>
  );
}

export default ProofStripSection;
