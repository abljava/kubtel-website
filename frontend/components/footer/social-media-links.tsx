import Link from "next/link";
import React from "react";

export type TypeSocialMedia = {
  icon: React.ReactNode;
  url: string;
};

export default function SocialMediaLinks({
  links,
}: {
  links: TypeSocialMedia[];
}) {
  return (
    <nav>
      <ul className="flex gap-2">
        {links.map((link) => (
          <li key={link.url}>
            <Link className="block w-7 h-7" href={link.url}>
              {link.icon}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
