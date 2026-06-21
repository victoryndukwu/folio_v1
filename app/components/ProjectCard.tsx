"use client";

import React from "react";
import Image from "next/image";
import NextLink from "next/link";
import { ArrowUpRight } from "lucide-react";

type ProjectCardProps = {
  imageSrc: string;
  projectName: string;
  projectLink: string;
  projectDescription: string;
  isFeatured?: boolean;
};

function ProjectCard({
  imageSrc,
  projectName,
  projectLink,
  projectDescription,
  isFeatured = false,
}: ProjectCardProps) {
  const isExternalProject = /^https?:\/\//.test(projectLink);

  return (
    <NextLink
      href={projectLink}
      target={isExternalProject ? "_blank" : undefined}
      rel={isExternalProject ? "noreferrer" : undefined}
      aria-label={`View ${projectName} project`}
      className="group block h-full rounded-[28px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accentBlue focus-visible:ring-offset-4 focus-visible:ring-offset-lightGray dark:focus-visible:ring-offset-[#050505]"
    >
      <article
        className={`relative flex h-full min-h-[370px] w-full overflow-hidden rounded-[28px] border border-black/5 bg-white/55 p-2.5 font-primary shadow-[0_24px_70px_rgba(10,10,10,0.08)] backdrop-blur-2xl transition-all duration-500 ease-out hover:-translate-y-1 hover:border-accentBlue/25 hover:bg-white/80 hover:shadow-[0_32px_90px_rgba(59,130,246,0.18)] dark:border-white/10 dark:bg-white/[0.06] dark:shadow-[0_24px_70px_rgba(0,0,0,0.35)] dark:hover:bg-white/[0.09] ${
          isFeatured ? "md:min-h-[410px]" : ""
        }`}
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/70 via-white/10 to-accentBlue/10 opacity-80 transition-opacity duration-500 group-hover:opacity-100 dark:from-white/10 dark:via-white/[0.03] dark:to-accent/10" />

        <div
          className={`relative z-10 flex h-full w-full flex-col gap-5 ${
            isFeatured ? "md:flex-row md:gap-6" : ""
          }`}
        >
          <div
            className={`relative overflow-hidden rounded-[22px] bg-black/5 dark:bg-white/5 ${
              isFeatured ? "h-64 md:h-auto md:w-[58%]" : "h-52"
            }`}
          >
            <Image
              src={imageSrc}
              alt={`${projectName} thumbnail`}
              fill
              sizes={isFeatured ? "(min-width: 768px) 620px, 100vw" : "(min-width: 768px) 330px, 100vw"}
              className="object-cover transition duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-45" />
            <div className="absolute left-4 top-4 rounded-full border border-white/40 bg-white/75 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-black/70 shadow-sm backdrop-blur-md dark:border-white/15 dark:bg-black/40 dark:text-white/80">
              {isFeatured ? "Featured" : "Project"}
            </div>
          </div>

          <div
            className={`flex flex-1 flex-col justify-between gap-6 px-2 pb-2 ${
              isFeatured ? "pt-1 md:w-[42%] md:px-0 md:py-3" : ""
            }`}
          >
            <div>
              <div className="mb-4 flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-accentBlue">
                <span className="h-px w-7 bg-accentBlue/70" />
                Selected Work
              </div>

              <h3
                className={`font-header font-semibold leading-tight text-black dark:text-white ${
                  isFeatured ? "text-2xl md:text-3xl" : "text-xl"
                }`}
              >
                {projectName}
              </h3>

              <p className="mt-3 text-sm leading-6 text-darkGray/85 dark:text-white/65">
                {projectDescription}
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-black/10 pt-4 dark:border-white/10">
              <span className="text-sm font-medium text-black/65 transition-colors duration-300 group-hover:text-black dark:text-white/60 dark:group-hover:text-white/85">
                View project
              </span>
              <span className="gradient-icon grid h-10 w-10 place-items-center rounded-full transition-all duration-300 group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </div>
      </article>
    </NextLink>
  );
}

export default ProjectCard;
