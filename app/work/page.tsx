"use client";
import React from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "@/app/components";
import { projects } from "@/app/data/data";
import { Heading } from "@/app/components/section-heading";

function WorkPage() {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <main className="flex flex-col items-center justify-start mx-auto gap-12 w-full max-w-4xl px-4 md:px-6 lg:px-0 pt-32 pb-20 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full text-center md:text-left"
      >
        <Heading align="left" weight="bold" className="text-4xl md:text-5xl font-header mb-4 text-darkGray dark:text-white">
          Selected Works
        </Heading>
        <p className="text-darkGray/80 dark:text-white/60 text-lg">
          A collection of my recent projects, experiments, and open-source contributions.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project, idx) => {
          const isFeatured = idx === 0;

          return (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={isFeatured ? "md:col-span-2" : "col-span-1"}
            >
              <ProjectCard
                imageSrc={project.imgUrl}
                projectName={project.name}
                projectLink={project.url}
                projectDescription={project.description}
                isFeatured={isFeatured}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </main>
  );
}

export default WorkPage;
