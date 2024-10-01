import Link from "next/link";
import React from "react";
import { H3 } from "../text/text";

type TypeFooterLink = {
  title: string;
  url: string;
};

export type TypeFooterLinksBlock = {
  title: string;
  links: TypeFooterLink[];
};

export function FooterLinksBlock({ block }: { block: TypeFooterLinksBlock }) {
  return (
    <div>
      <H3 className="mb-2">{block.title}</H3>
      <nav>
        <ul className="flex flex-col gap-2">
          {block.links.map((link) => (
            <li key={link.title}>
              <Link
                className="text-lightGray hover:text-lightGray/70 text-base transition-opacity"
                href={link.url}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
