import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

function HeroSection() {
  const words = "I build polished product interfaces that help teams ship faster and convert better.".split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <section className="grid place-items-start my-10 w-full relative">
      <div className="flex flex-col w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white/55 px-4 py-2 text-sm font-medium text-black/70 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-white/70"
        >
          <Sparkles className="h-4 w-4 text-accentBlue" />
          Frontend engineer for product-led teams
        </motion.div>

        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-semibold font-header leading-[1.08] mb-8 flex flex-wrap gap-x-3 gap-y-2 text-black dark:text-white"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {words.map((word, idx) => (
            <motion.span key={idx} variants={wordVariants}>
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl font-medium text-darkGray/90 dark:text-gray/80 mt-2 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
        >
          I turn product ideas into fast, responsive, maintainable web experiences with the taste to make them feel effortless.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.35, ease: "easeOut" }}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <Link
            href="/work"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-accentBlue hover:shadow-accentBlue/20 active:translate-y-0 dark:bg-white dark:text-black dark:hover:bg-accentBlue dark:hover:text-white"
          >
            View selected work
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/55 px-6 py-3 text-sm font-semibold text-black/75 backdrop-blur-md transition-all duration-300 hover:border-accentBlue/40 hover:text-accentBlue dark:border-white/10 dark:bg-white/5 dark:text-white/75 dark:hover:text-white"
          >
            About Victory
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
