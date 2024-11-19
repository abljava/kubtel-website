import React from "react";
import { H5 } from "../text/text";
import Link from "next/link";
import Image from "next/image";

export type TypeTextLink = {
  url: string;
  title: string;
  icon: string;
};

export function TextLink({ link }: { link: TypeTextLink }) {
  return (
    <li className="hover:opacity-70 transition-opacity w-fit">
      <Link className="flex gap-3 items-center" href={link.url}>
        <H5>{link.title}</H5>
        <div className="relative w-[10px] h-[18px]">
          <Image
            src={link.icon}
            alt=""
            fill={true}
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      </Link>
    </li>
  );
}
