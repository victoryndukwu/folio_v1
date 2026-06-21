"use client";

import React, { useEffect, useState } from "react";
import { MoonStar, SunMedium } from "lucide-react";
import { motion } from "framer-motion";
import Button from "./Button";

type Theme = "light" | "dark";

function ThemeSwitch() {
  const [theme, setTheme] = useState<Theme>("light");

  const applyTheme = (nextTheme: Theme) => {
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);

    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const themeStorage = localStorage.getItem("theme") as Theme | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = themeStorage ?? (prefersDark ? "dark" : "light");

    applyTheme(initialTheme);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        delay: 0.7,
        duration: 0.5,
        type: "spring",
        stiffness: 220,
        damping: 18,
      }}
      className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-full border border-black/10 bg-white/70 p-1 shadow-2xl shadow-black/10 backdrop-blur-2xl dark:border-white/10 dark:bg-black/45 dark:shadow-black/30"
      aria-label="Theme controls"
    >
      <Button
        onClick={() => applyTheme("light")}
        variant={theme === "light" ? "primary" : "ghost"}
        size="icon"
        aria-label="Use light theme"
        title="Light theme"
      >
        <SunMedium className="h-5 w-5" strokeWidth={2.3} />
      </Button>

      <Button
        onClick={() => applyTheme("dark")}
        variant={theme === "dark" ? "primary" : "ghost"}
        size="icon"
        aria-label="Use dark theme"
        title="Dark theme"
      >
        <MoonStar className="h-5 w-5" strokeWidth={2.3} />
      </Button>
    </motion.div>
  );
}

export default ThemeSwitch;
