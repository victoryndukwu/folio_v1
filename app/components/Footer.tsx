import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { Mail } from "lucide-react";
import { contactEmail, NavMenuItems } from "../data/data";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-20 border-t border-black/5 bg-white/30 backdrop-blur-md dark:border-white/10 dark:bg-black/30">
      <div className="max-w-4xl mx-auto px-4 py-8 md:px-6 lg:px-0 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-3">
          <Logo />
          <p className="text-sm text-darkGray/70 dark:text-white/50">
            © {currentYear} Victory Ndukwu. Frontend engineering for polished product experiences.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
          {NavMenuItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="text-darkGray/75 transition-colors duration-300 hover:text-accentBlue dark:text-white/60 dark:hover:text-accentBlue"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href={`mailto:${contactEmail}`}
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/55 px-4 py-2 text-darkGray/80 transition-all duration-300 hover:border-accentBlue/40 hover:text-accentBlue dark:border-white/10 dark:bg-white/5 dark:text-white/65 dark:hover:text-white"
          >
            <Mail className="h-4 w-4" />
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
