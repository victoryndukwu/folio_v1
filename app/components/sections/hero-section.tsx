import React from "react";
import { motion } from "framer-motion";

function HeroSection() {
  const words = "I help brands launch fast and convert better with high-performing web experiences.".split(" ");

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
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-semibold font-header leading-[1.1] mb-8 tracking-tight flex flex-wrap gap-x-3 gap-y-2"
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
          className="text-lg md:text-xl font-medium text-darkGray/90 dark:text-gray/80 mt-4 max-w-[85%]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
        >
          As a frontend engineer, I design and build digital products that drive results — fast, responsive, and built to scale.
        </motion.p>
      </div>
    </section>
  );
}

export default HeroSection;
