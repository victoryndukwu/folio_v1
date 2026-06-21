"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Heading } from "../section-heading";

const focusAreas = [
  "Frontend architecture",
  "Product UI",
  "Responsive systems",
  "Motion polish",
];

function AboutPreviewSection() {
  return (
    <section className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center"
      >
        <div className="relative overflow-hidden rounded-[2rem] border border-black/5 bg-white/45 p-2 shadow-xl shadow-black/5 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04] dark:shadow-black/30">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.55rem] bg-black/5 dark:bg-white/5">
            <Image
              src="/portfolio.jpg"
              alt="Portrait of Victory Ndukwu"
              fill
              sizes="(min-width: 768px) 340px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-5 text-white">
              <p className="font-header text-lg font-semibold">
                Victory Ndukwu
              </p>
              <p className="mt-1 text-sm text-white/70">
                Frontend Engineer
              </p>
            </div>
          </div>
        </div>

        <div>
          <Heading align="left" weight="normal" italic className="font-header text-2xl text-darkGray dark:text-white">
            About
          </Heading>
          <p className="mt-6 text-2xl font-medium leading-snug text-black dark:text-white md:text-3xl">
            I care about the point where thoughtful design becomes reliable software.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-darkGray/85 dark:text-white/62">
            My work sits across product thinking, frontend systems, and interface details. I like building experiences that are easy to ship, easy to use, and strong enough to keep scaling after launch.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {focusAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-black/10 bg-white/50 px-4 py-2 text-sm font-medium text-black/70 backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-white/70"
              >
                {area}
              </span>
            ))}
          </div>

          <Link
            href="/about"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-darkGray transition-colors duration-300 hover:text-accentBlue dark:text-white/75 dark:hover:text-accentBlue"
          >
            Read the full story
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default AboutPreviewSection;
