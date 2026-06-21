import Link from "next/link";
import React from "react";
import Image from "next/image";
import Heading from "./section-heading";

function Logo() {
  return (
    <Link href="/" className={`hover:cursor-pointer  flex items-center gap-2`}>
      <div>
        <Image
          src={"/portfolio.jpg"}
          alt=""
          width={50}
          height={50}
          className="text-xs size-[40px] rounded-md shadow"
        />
      </div>
      <div className="flex flex-col gap-[1px]">
        <Heading level="h5" align="left" weight="normal" italic>
          {" "}
          Victory Ndukwu
        </Heading>
        <p className="text-[14px]">Frontend Engineer</p>
      </div>
    </Link>
  );
}

export default Logo;
