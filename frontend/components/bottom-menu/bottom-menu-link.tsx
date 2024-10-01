"use client";

import Link from "next/link";
import React from "react";
import { TypeLink } from "./bottom-menu";
import { usePathname } from "next/navigation";

export function BottomMenuLink({ link }: { link: TypeLink }) {
  const pathname = usePathname();
  const isActive = pathname === link.url;

  return (
    <li className="basis-1/5">
      <Link href={link.url} className="flex flex-col items-center">
        {isActive ? link.iconActive : link.icon}
        <p
          className={`text-xs text-wrap text-center ${
            isActive ? "text-[#161B1D]" : "font-normal text-[#97999B]"
          }`}
        >
          {link.title}
        </p>
      </Link>
    </li>
  );
}
