import { TypeLines } from "@/lib/definitions";
import React from "react";
import { TextLink, TypeTextLink } from "./text-link";
import { cn } from "@/lib/utils";

type TypeTextLinks = {
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
  links: TypeTextLink[];
};

const textLinks: TypeTextLinks = {
  start: {
    mobile: "1",
    tablet: "1",
    desktop: "1",
  },
  end: {
    mobile: "13",
    tablet: "8",
    desktop: "5",
  },
  links: [
    {
      url: "/",
      title: "Интернет",
      icon: "/images/icons/arrow-to-right-black.svg",
    },
    {
      url: "/",
      title: "Телевидение",
      icon: "/images/icons/arrow-to-right-black.svg",
    },
    {
      url: "/",
      title: "Видеонаблюдение",
      icon: "/images/icons/arrow-to-right-black.svg",
    },
  ],
};

export function TextLinks({ className }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <nav
      className={cn(
        `flex self-center col-start-${textLinks.start.mobile} sm:col-start-${textLinks.start.tablet} lg:col-start-${textLinks.start.desktop} col-end-${textLinks.end.mobile} sm:col-end-${textLinks.end.tablet} lg:col-end-${textLinks.end.desktop}`,
        className
      )}
    >
      <ul className="flex flex-col gap-3">
        {textLinks.links.map((link) => (
          <TextLink key={link.title} link={link} />
        ))}
      </ul>
    </nav>
  );
}
