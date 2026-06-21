"use client";
import React, { useState } from "react";
import { X, Mail, Check } from "lucide-react";
import Logo from "./Logo";
import { NavMenuItems } from "../data/data";
import Link from "next/link";
import { motion } from "framer-motion";

function Navbar() {
  const [menu, showMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("victoryndukwu7@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); 
    } catch (err) {
      const textArea = document.createElement("textarea");
      textArea.value = "victoryndukwu7@gmail.com";
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
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-lightGray/70 dark:bg-darkerGray/70 grid place-items-center py-6 transition-colors duration-300">
      <div className="flex items-center justify-between w-full max-w-2xl px-4 md:px-0">
        <Logo />

        {/* Desktop Nav */}
        <div className="md:flex text-base hidden">
          {NavMenuItems.map((item, idx) => (
            <div key={idx}>
              {item.name === "victoryndukwu7@gmail.com" ? (
                <button
                  onClick={copyEmail}
                  className="hover:cursor-pointer hover:font-semibold mx-10 flex items-center gap-2 transition-all duration-200 group"
                  title="Click to copy email"
                >
                  <span className="group-hover:text-blue-600 transition-colors">
                    {item.name}
                  </span>
                  {copied ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <item.icon className="w-4 h-4 group-hover:text-blue-600 transition-colors" />
                  )}
                </button>
              ) : (
                <Link
                  href={item.link}
                  className="hover:cursor-pointer hover:font-semibold mx-10 flex items-center gap-2"
                >
                  <span>{item.name}</span>
                  {item.icon && <item.icon className="w-4 h-4" />}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="hover:cursor-pointer p-1 md:hidden">
          <p onClick={() => showMenu(!menu)}>MENU</p>
        </div>
      </div>

      {/* Mobile Nav */}
      {menu && (
        <motion.div
          initial={{ y: -150, opacity: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "easeIn", delay: 0.1 }}
          className="absolute h-screen w-screen md:hidden top-0 left-0 flex flex-col px-4 bg-lightGray text-darkGray dark:bg-darkGray dark:text-lightGray"
        >
          <div className="flex justify-end py-4">
            <X
              onClick={() => showMenu(!menu)}
              className="text-darkGray dark:text-lightGray cursor-pointer"
            />
          </div>

          <div className="flex flex-col text-sm justify-center items-center">
            {NavMenuItems.map((item, idx) => (
              <div key={idx}>
                {item.name === "victoryndukwu7@gmail.com" ? (
                  <button
                    onClick={(e) => handleEmailClick(e, true)}
                    className="hover:cursor-pointer hover:font-semibold my-5 flex items-center gap-2 transition-all duration-200 group w-full justify-center"
                  >
                    <span className="group-hover:text-blue-600 transition-colors">
                      {item.name}
                    </span>
                    {copied ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <item.icon className="w-4 h-4 text-darkGray dark:text-lightGray group-hover:text-blue-600 transition-colors" />
                    )}
                  </button>
                ) : (
                  <Link
                    href={item.link}
                    onClick={() => showMenu(!menu)}
                    className="hover:cursor-pointer hover:font-semibold my-5 flex items-center gap-2"
                  >
                    <span>{item.name}</span>
                    {item.icon && (
                      <item.icon className="w-4 h-4 text-darkGray dark:text-lightGray" />
                    )}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Copy feedback for mobile */}
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

      {/* Copy feedback for desktop */}
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
    </nav>
  );
}

export default Navbar;
