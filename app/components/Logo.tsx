import Link from "next/link";
import React from "react";
import Image from "next/image";
import Heading from "./section-heading";

function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02]">
      <div className="relative">
        <Image
          src={"/portfolio.jpg"}
          alt="Victory Ndukwu"
          width={44}
          height={44}
          className="object-cover rounded-full shadow-md border-2 border-transparent group-hover:border-accentBlue/50 transition-colors duration-300"
        />
        <div className="absolute inset-0 rounded-full ring-1 ring-black/10 dark:ring-white/10 pointer-events-none" />
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="text-base md:text-lg font-bold font-header text-darkGray dark:text-white leading-tight group-hover:text-accentBlue transition-colors duration-300">
          Victory Ndukwu
        </h1>
        <p className="text-[11px] md:text-xs font-semibold tracking-widest uppercase text-black/50 dark:text-white/50 mt-[2px]">
          Frontend Engineer
        </p>
      </div>
    </Link>
  );
}

export default Logo;
