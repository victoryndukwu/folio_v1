import React from "react";
import ProjectCard from "../ProjectCard";
import { projects } from "../../data/data";
import { Heading } from "../section-heading";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

function ProjectSection() {
  const leftColumnProjects = projects.filter((_, idx) => idx % 2 === 0);
  const rightColumnProjects = projects.filter((_, idx) => idx % 2 === 1);

  const columnVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const rightItemVariants = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="flex flex-col w-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Heading align="left" weight="normal" italic>
          Work
        </Heading>
      </motion.div>

      <div className="flex flex-col gap-8 mt-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={columnVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.slice(0, 2).map((project, idx) => {
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
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-4"
        >
          <Link 
            href="/work" 
            className="group flex items-center gap-2 text-darkGray dark:text-white/80 font-medium hover:text-accentBlue dark:hover:text-accentBlue transition-colors duration-300"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default ProjectSection;
