"use client";
import React from "react";
import ProjectSection from "./sections/project-section";
import HeroSection from "./sections/hero-section";
import ArticleSection from "./sections/articles-section";
import TechStackSection from "./sections/tech-stack-section";
import CTASection from "./sections/cta-section";

function Landing() {
  return (
    <main className="flex flex-col items-center justify-center mx-auto gap-16 w-full max-w-2xl px-4 md:px-0 pt-32 pb-20">
      <HeroSection />
      <TechStackSection />
      <ProjectSection />
      <ArticleSection />
      <CTASection />
    </main>
  );
}

export default Landing;
