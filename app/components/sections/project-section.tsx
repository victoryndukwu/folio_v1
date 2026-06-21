import React from "react";
import ProjectCard from "../ProjectCard";
import { projects } from "../../data/data";
import { Heading } from "../section-heading";
import { motion } from "framer-motion";

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

      <div className="grid md:grid-cols-2 gap-4 p-4 grid-cols-1">
        {/* Left Column */}
        <motion.div
          className="space-y-4"
          variants={columnVariants}
          initial="hidden"
          animate="visible"
        >
          {leftColumnProjects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <ProjectCard
                imageSrc={project.imgUrl}
                projectName={project.name}
                projectLink={project.url}
                projectDescription={project.description}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Right Column */}
        <motion.div
          className="space-y-4"
          variants={columnVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          {rightColumnProjects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={rightItemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <ProjectCard
                imageSrc={project.imgUrl}
                projectName={project.name}
                projectLink={project.url}
                projectDescription={project.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ProjectSection;
