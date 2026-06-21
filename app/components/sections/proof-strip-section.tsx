"use client";

import React from "react";
import { motion } from "framer-motion";

const proofPoints = [
  {
    value: "6+ yrs",
    label: "building reliable digital products from concept to launch",
  },
  {
    value: "Product UI",
    label: "dashboards, onboarding journeys, ecommerce, fintech, and platform experiences",
  },
  {
    value: "Systems",
    label: "scalable component architecture, design systems, state, and data workflows",
  },
  {
    value: "Agentic AI",
    label: "leveraging coding agents to move faster from requirement to polished implementation",
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
