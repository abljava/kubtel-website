import { TypeLines } from "@/lib/definitions";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { H4 } from "../text/text";
import { cn } from "@/lib/utils";

export interface BigRectLinkProps {
  url: string;
  title: string;
  start: {
    mobile: TypeLines;
    tablet: TypeLines;
    desktop: TypeLines;
  };
  end: {
    mobile: TypeLines;
    tablet: TypeLines;
    desktop: TypeLines;
  };
  image: {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
  };
}

export function BigRectLink({
  link,
  className,
}: {
  link: BigRectLinkProps;
  className?: string;
}) {
  return (
    <Link
      href={link.url}
      className={cn(
        `group flex justify-between items-center px-6 py-6 w-full h-fit transition-all duration-300 bg-gradient-to-br`,
        `to-grayGradient-start via-grayGradient-end from-grayGradient-start bg-[length:200%_200%] bg-pos-0 hover:bg-pos-100`,
        `border-none shadow-basic rounded-2xl col-start-${link.start.mobile} sm:col-start-${link.start.tablet} lg:col-start-${link.start.desktop}`,
        `col-end-${link.end.mobile} sm:col-end-${link.end.tablet} lg:col-end-${link.end.desktop}`,
        className
      )}
    >
      <H4>{link.title}</H4>
      <Image
        className="group-hover:scale-105 transition-all"
        src={link.image.src}
        alt={link.image.alt || ""}
        width={link.image.width}
        height={link.image.height}
      />
    </Link>
  );
}
