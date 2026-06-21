"use client";
import React from "react";
import ProjectSection from "./sections/project-section";
import HeroSection from "./sections/hero-section";
import TechStackSection from "./sections/tech-stack-section";
import CTASection from "./sections/cta-section";
import ProofStripSection from "./sections/proof-strip-section";
import AboutPreviewSection from "./sections/about-preview-section";

function Landing() {
  return (
    <main className="flex flex-col items-center justify-center mx-auto gap-16 md:gap-20 w-full max-w-4xl px-4 md:px-6 lg:px-0 pt-32 pb-20">
      <HeroSection />
      <ProofStripSection />
      <TechStackSection />
      <ProjectSection />
      <AboutPreviewSection />
      <CTASection />
    </main>
  );
}

export default Landing;
