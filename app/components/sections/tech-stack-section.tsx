"use client";
import React from "react";
import { Heading } from "../section-heading";
import { motion } from "framer-motion";
import {
  Gauge,
  Layers3,
  MonitorSmartphone,
  ShieldCheck,
} from "lucide-react";

const capabilities = [
  {
    title: "Product interfaces",
    description:
      "Dashboards, onboarding, account flows, and marketing-product surfaces that stay clear under real user pressure.",
    icon: MonitorSmartphone,
  },
  {
    title: "Frontend systems",
    description:
      "Reusable components, type-safe patterns, and layouts that make teams faster without flattening the design.",
    icon: Layers3,
  },
  {
    title: "Performance polish",
    description:
      "Responsive experiences with careful loading states, animation timing, accessibility, and interaction detail.",
    icon: Gauge,
  },
  {
    title: "Reliable delivery",
    description:
      "Production-minded implementation with testing habits, edge-case awareness, and calm handoff energy.",
    icon: ShieldCheck,
  },
];

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
    <section className="w-full flex flex-col items-center my-10">
      <div className="w-full">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <Heading align="left" weight="normal" italic className="font-header text-2xl text-darkGray dark:text-white">
            What I Build
        </Heading>
          <p className="max-w-md text-sm leading-6 text-darkGray/75 dark:text-white/55">
            Frontend craft across product strategy, implementation detail, and the small interactions that make software feel finished.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          {capabilities.map((capability, idx) => {
            const Icon = capability.icon;

            return (
              <motion.div
                key={capability.title}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-black/5 bg-white/50 p-5 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-accentBlue/25 hover:bg-white/75 hover:shadow-xl hover:shadow-accentBlue/10 dark:border-white/10 dark:bg-white/[0.04] dark:hover:bg-white/[0.07]"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-black text-white transition-colors duration-300 group-hover:bg-accentBlue dark:bg-white dark:text-black dark:group-hover:bg-accentBlue dark:group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-header text-xs text-accentBlue">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-header text-lg font-semibold text-black dark:text-white">
                  {capability.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-darkGray/80 dark:text-white/60">
                  {capability.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          {technologies.map((tech, idx) => (
            <motion.span
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="cursor-default rounded-full border border-black/10 bg-white/45 px-4 py-2 text-sm font-medium text-black/70 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-accentBlue/50 hover:bg-white hover:text-accentBlue dark:border-white/10 dark:bg-white/5 dark:text-white/75 dark:hover:bg-white/10 dark:hover:text-accentBlue"
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
