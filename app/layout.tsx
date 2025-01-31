import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components";
import ThemeSwitch from "./components/ThemeSwitch";

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
    <html lang="en">
      <body className={`flex flex-col bg-lightGray text-darkGray dark:bg-darkGray dark:text-lightGray`}>
        <Navbar />
        {children}</body>
      <ThemeSwitch />
    </html>
  );
}
