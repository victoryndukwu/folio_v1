import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components";
import { michroma } from "../utils/fonts";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: '--font-quicksand'
});

export const metadata: Metadata = {
  title: "Victory Ndukwu | Software Engineer",
  description: "Victory Ndukwu is a Frontend engineer with 3 years experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable} ${michroma} flex flex-col bg-lightGray`}>
        <Navbar />
        {children}</body>
    </html>
  );
}
