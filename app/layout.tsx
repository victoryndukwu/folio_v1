import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components";
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
      <body className={`flex flex-col items-center bg-lightGray text-darkGray dark:bg-darkerGray dark:text-gray font-primary antialiased no-scrollbar transition-colors duration-300`}>
        <Navbar />
        {children}
        <ThemeSwitch />
      </body>
    </html>
  );
}
