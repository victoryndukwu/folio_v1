import React from "react";
import { quicksand } from "@/utils/fonts";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section className="grid place-items-start my-5 w-full">
      <div className="flex flex-col w-full">
        <div className="flex">
          <div className="text-sm">
            <div className="flex flex-col my-2">
              <motion.h1
                className="text-3xl md:text-4xl lg:text-5xl capitalize font-medium font-header leading-tight mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                I help brands launch fast and convert better with high-performing web experiences.
              </motion.h1>

              <motion.p
                className="text-base font-medium text-justify mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                As a frontend engineer, I design and build web applications,
                websites, landing pages, and no-code products that drive results
                — fast, responsive, and built to scale.
              </motion.p>

              <motion.p
                className="text-base font-medium text-justify mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Every project is crafted to deliver one thing: a digital
                experience that works beautifully and performs flawlessly.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
