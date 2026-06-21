import type { Metadata } from "next";
import "./globals.css";
import { Navbar, Footer } from "./components";
import ThemeSwitch from "./components/ThemeSwitch";
import { quicksand, unbounded } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "Victory Ndukwu | Frontend Engineer",
  description: "Victory Ndukwu is a Frontend engineer with 3 years experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${quicksand.variable} ${unbounded.variable}`}>
      <body className={`flex flex-col items-center bg-lightGray text-darkGray dark:bg-darkerGray dark:text-gray font-primary antialiased no-scrollbar transition-colors duration-300 min-h-screen relative overflow-x-hidden`}>
        {/* Ambient background glow */}
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent/20 dark:bg-accent/10 blur-[120px] animate-blob mix-blend-multiply dark:mix-blend-screen" />
          <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accentBlue/20 dark:bg-accentBlue/10 blur-[120px] animate-blob animation-delay-2000 mix-blend-multiply dark:mix-blend-screen" />
        </div>
        
        <Navbar />
        <main className="flex-1 w-full flex justify-center">
          {children}
        </main>
        <Footer />
        <ThemeSwitch />
      </body>
    </html>
  );
}
