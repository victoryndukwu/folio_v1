import React from "react";
import Link from "next/link";
import Logo from "./Logo";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-20 border-t border-black/5 dark:border-white/10 bg-white/30 dark:bg-black/30 backdrop-blur-md">
      <div className="max-w-2xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Logo />
          <p className="text-sm text-darkGray dark:text-gray/80 font-medium">
            © {currentYear} Victory Ndukwu.
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm font-medium text-darkGray dark:text-gray/80">
          <Link
            href="https://twitter.com"
            target="_blank"
            className="hover:text-accentBlue transition-colors duration-300"
          >
            Twitter
          </Link>
          <Link
            href="https://github.com"
            target="_blank"
            className="hover:text-accentBlue transition-colors duration-300"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            className="hover:text-accentBlue transition-colors duration-300"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
