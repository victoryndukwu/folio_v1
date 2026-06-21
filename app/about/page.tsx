import React from "react";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2, Mail } from "lucide-react";
import { contactEmail } from "@/app/data/data";
import { Heading } from "@/app/components/section-heading";
import Button from "@/app/components/Button";

const highlights = [
  {
    value: "6+",
    label: "years of frontend experience",
  },
  {
    value: "Product",
    label: "interfaces, dashboards, and onboarding flows",
  },
  {
    value: "Fintech",
    label: "open banking and conversion-focused web work",
  },
];

const principles = [
  "Make the first interaction feel obvious.",
  "Keep design systems useful, not ornamental.",
  "Ship interfaces that are fast, accessible, and maintainable.",
  "Use motion to clarify state, not distract from the product.",
];

const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "TanStack Query",
  "Jest",
  "React Testing Library",
];

function AboutPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-16 px-4 pb-20 pt-32 md:px-6 lg:px-0">
      <section className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-center">
        <div className="relative overflow-hidden rounded-[2rem] border border-black/5 bg-white/45 p-2 shadow-2xl shadow-black/5 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04] dark:shadow-black/35">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.55rem] bg-black/5 dark:bg-white/5">
            <Image
              src="/portfolio.jpg"
              alt="Portrait of Victory Ndukwu"
              fill
              priority
              sizes="(min-width: 768px) 360px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent p-6 text-white">
              <p className="font-header text-xl font-semibold">
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
          <h1 className="mt-5 font-header text-4xl font-semibold leading-tight text-black dark:text-white md:text-5xl">
            I build product interfaces with speed, taste, and staying power.
          </h1>
          <p className="mt-6 text-base leading-8 text-darkGray/85 dark:text-white/65">
            I am a frontend engineer with over six years of experience creating responsive, reliable web products. My work lives where product clarity, interface craft, and maintainable engineering meet.
          </p>
          <p className="mt-4 text-base leading-8 text-darkGray/85 dark:text-white/65">
            I enjoy collaborating with teams that care about the details: onboarding that feels smooth, dashboards that are easy to scan, marketing pages that convert, and frontend systems that do not collapse under the next feature request.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              href="/work"
              className="group hover:-translate-y-0.5"
            >
              View work
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>
            <Button
              href={`mailto:${contactEmail}`}
              variant="secondary"
            >
              <Mail className="h-4 w-4" />
              Email me
            </Button>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {highlights.map((highlight) => (
          <div
            key={highlight.value}
            className="rounded-2xl border border-black/5 bg-white/50 p-5 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]"
          >
            <p className="font-header text-2xl font-semibold text-black dark:text-white">
              {highlight.value}
            </p>
            <p className="mt-2 text-sm leading-6 text-darkGray/80 dark:text-white/60">
              {highlight.label}
            </p>
          </div>
        ))}
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <div>
          <Heading align="left" weight="normal" italic className="font-header text-2xl text-darkGray dark:text-white">
            How I Work
          </Heading>
          <div className="mt-6 flex flex-col divide-y divide-black/10 border-y border-black/10 dark:divide-white/10 dark:border-white/10">
            {principles.map((principle) => (
              <div key={principle} className="flex gap-4 py-5">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-accentBlue" />
                <p className="text-sm leading-7 text-darkGray/85 dark:text-white/65">
                  {principle}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Heading align="left" weight="normal" italic className="font-header text-2xl text-darkGray dark:text-white">
            Stack
          </Heading>
          <div className="mt-6 flex flex-wrap gap-3">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-black/10 bg-white/50 px-4 py-2 text-sm font-medium text-black/70 backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-white/70"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-black/5 bg-white/50 p-6 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]">
            <p className="font-header text-lg font-semibold text-black dark:text-white">
              Current focus
            </p>
            <p className="mt-3 text-sm leading-7 text-darkGray/85 dark:text-white/62">
              Building sharper portfolio and product experiences, improving frontend systems, and helping teams move from idea to polished interface with less friction.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
