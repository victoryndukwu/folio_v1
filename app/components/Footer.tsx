import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { Twitter, Github, Linkedin } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-20 border-t border-black/5 dark:border-white/10 bg-white/30 dark:bg-black/30 backdrop-blur-md">
      <div className="max-w-2xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Logo />
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="https://twitter.com"
            target="_blank"
            className="text-darkGray dark:text-gray/80 hover:text-accentBlue dark:hover:text-accentBlue transition-colors duration-300"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </Link>
          <Link
            href="https://github.com"
            target="_blank"
            className="text-darkGray dark:text-gray/80 hover:text-accentBlue dark:hover:text-accentBlue transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            className="text-darkGray dark:text-gray/80 hover:text-accentBlue dark:hover:text-accentBlue transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
