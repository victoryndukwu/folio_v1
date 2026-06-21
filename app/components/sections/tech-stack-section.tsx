"use client";
import React from "react";
import { Heading } from "../section-heading";
import { motion } from "framer-motion";

const technologies = [
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "TanStack Query",
  "Jest",
  "React Testing Library",
  "Docker",
  "Kubernetes",
  "React Hook Form",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

function TechStackSection() {
  return (
    <section className="w-full flex flex-col items-center my-10 px-4 md:px-0">
      <div className="w-full">
        <Heading align="left" weight="normal" italic className="font-header mb-8 text-2xl text-darkGray dark:text-white">
          Tools of the Trade
        </Heading>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-wrap gap-3 md:gap-4"
        >
          {technologies.map((tech, idx) => (
            <motion.span
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="text-sm md:text-base font-medium text-black/70 dark:text-white/80 border border-black/10 dark:border-white/10 rounded-xl px-5 py-3 bg-white/50 dark:bg-white/5 backdrop-blur-md hover:bg-white hover:dark:bg-white/10 hover:border-accentBlue/50 hover:text-accentBlue dark:hover:text-accentBlue transition-all duration-300 cursor-default shadow-sm"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default TechStackSection;
