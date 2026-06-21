"use client";
import React from "react";
import ProjectSection from "./sections/project-section";
import HeroSection from "./sections/hero-section";
import ArticleSection from "./sections/articles-section";

function Landing() {
  return (
    <main className="flex flex-col items-center justify-center mx-auto gap-16 w-full max-w-2xl px-4 md:px-0 py-10">
      <HeroSection />
      <ProjectSection />
      <ArticleSection />
    </main>
  );
}

export default Landing;
