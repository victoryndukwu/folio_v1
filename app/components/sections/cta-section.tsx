"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { contactEmail } from "@/app/data/data";

function CTASection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  return (
    <section className="w-full my-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 overflow-hidden bg-white/40 dark:bg-white/5 border border-black/5 dark:border-white/10 backdrop-blur-xl flex flex-col items-center justify-center text-center shadow-2xl"
      >
        {/* Glow effect inside the card */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-accent/20 dark:bg-accent/30 blur-[80px] rounded-full pointer-events-none" />

        <h2 className="text-3xl md:text-5xl font-bold font-header text-black dark:text-white mb-6 relative z-10">
          Need a frontend partner for your next product push?
        </h2>
        
        <p className="text-lg text-darkGray dark:text-white/70 max-w-lg mb-10 relative z-10">
          I can help turn product ideas, messy interfaces, or ambitious launch timelines into polished web experiences.
        </p>

        <button
          onClick={copyEmail}
          className="group relative z-10 flex items-center gap-3 bg-black text-white dark:bg-white dark:text-black px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl hover:shadow-accent/20"
        >
          <span>{copied ? "Email Copied!" : "Get In Touch"}</span>
          {copied ? (
            <Check className="w-5 h-5 text-green-400" />
          ) : (
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          )}
        </button>
      </motion.div>
    </section>
  );
}

export default CTASection;
