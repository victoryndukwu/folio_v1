import Link from "next/link";
import React from "react";
import { michroma } from "../../utils/fonts";
import Image from "next/image";

function Logo() {
  return (
    <Link
      href="/"
      className={`hover:cursor-pointer ${michroma.className} flex items-center gap-2`}
    >
      <div>
        <Image
          src={"/portfolio.jpg"}
          alt=""
          width={70}
          height={70}
          className="text-xs rounded-full size-[48px]"
        />
      </div>
      <div className="flex flex-col gap-[1px]">
        <p className={`hover:cursor-pointer font-bold ${michroma} text-[10px]`}>
          VICTORY NDUKWU
        </p>
        <p className="text-[10px]">FRONTEND ENGINEER</p>
      </div>
    </Link>
  );
}

export default Logo;
