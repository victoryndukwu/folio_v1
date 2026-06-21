"use client";

import React, { useState } from "react";
import { Check, Mail, Menu, X } from "lucide-react";
import Logo from "./Logo";
import { contactEmail, NavMenuItems } from "../data/data";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "./Button";

function Navbar() {
  const [menu, showMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); 
    } catch (err) {
      const textArea = document.createElement("textarea");
      textArea.value = contactEmail;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleEmailClick = (e: React.MouseEvent, isMobile: boolean = false) => {
    e.preventDefault();
    copyEmail();
    if (isMobile) {
      showMenu(false);
    }
  };

  return (
    <div className="fixed top-6 z-50 w-full flex justify-center px-4 pointer-events-none">
      <nav className="pointer-events-auto w-full max-w-4xl backdrop-blur-2xl bg-white/55 dark:bg-black/45 border border-black/5 dark:border-white/10 rounded-full py-2 pl-3 pr-2 shadow-2xl transition-all duration-300 hover:bg-white/70 dark:hover:bg-black/60">
        <div className="flex items-center justify-between gap-4">
          <Logo />

          <div className="hidden md:flex items-center gap-1 text-sm font-medium">
            {NavMenuItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="rounded-full px-4 py-2 text-darkGray transition-colors duration-300 hover:bg-black/5 hover:text-accentBlue dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <Button
            onClick={copyEmail}
            size="sm"
            className="group hidden md:flex hover:-translate-y-0.5"
            title="Copy email"
          >
            {copied ? <Check className="h-4 w-4 text-green-400" /> : <Mail className="h-4 w-4" />}
            {copied ? "Copied" : "Email"}
          </Button>

          <Button
            onClick={() => showMenu(!menu)}
            variant="secondary"
            size="icon"
            className="md:hidden"
            aria-label="Open navigation menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </nav>

      {menu && (
        <motion.div
          initial={{ y: -150, opacity: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="absolute h-screen w-screen md:hidden top-0 left-0 flex flex-col px-4 bg-lightGray text-darkGray dark:bg-[#050505] dark:text-lightGray pointer-events-auto"
        >
          <div className="flex justify-end py-4">
            <Button
              onClick={() => showMenu(!menu)}
              variant="secondary"
              size="icon"
              aria-label="Close navigation menu"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center gap-6 text-4xl font-semibold font-header">
            {NavMenuItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                onClick={() => showMenu(false)}
                className="transition-colors duration-300 hover:text-accentBlue"
              >
                {item.name}
              </Link>
            ))}

            <Button
              onClick={(e) => handleEmailClick(e, true)}
              className="mt-4 font-primary text-base hover:-translate-y-0.5"
            >
              {copied ? <Check className="h-5 w-5 text-green-400" /> : <Mail className="h-5 w-5" />}
              {copied ? "Email copied" : "Copy email"}
            </Button>
          </div>

          {copied && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg"
            >
              Email copied to clipboard!
            </motion.div>
          )}
        </motion.div>
      )}

      {copied && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="fixed top-20 right-8 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50"
        >
          Email copied to clipboard!
        </motion.div>
      )}
    </div>
  );
}

export default Navbar;
