import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface NavigationLink {
  title: string;
  url: string;
}

const links: NavigationLink[] = [
  {
    title: "Частным лицам",
    url: "/individual/configurator",
  },
  {
    title: "Бизнесу",
    url: "/",
  },
  {
    title: "О компании",
    url: "/about",
  },
];

export function HeaderNavigation({ className }: { className?: string }) {
  return (
    <nav className={cn("flex", className)}>
      <ul className="flex justify-between w-full">
        {links.map((link) => (
          <HeaderNavigationLink key={link.title} link={link} />
        ))}
      </ul>
    </nav>
  );
}

function HeaderNavigationLink({ link }: { link: NavigationLink }) {
  return (
    <li>
      <Link
        className="opacity-100 hover:opacity-70 transition-opacity text-sm font-bold"
        href={link.url}
      >
        {link.title}
      </Link>
    </li>
  );
}
