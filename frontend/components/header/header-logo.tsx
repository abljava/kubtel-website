import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

export function HeaderLogo({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Link
      className={cn(
        "relative hover:opacity-70 transition-opacity w-[79px] h-[37px]",
        className
      )}
      href="/"
    >
      <Image
        src="/images/logo-colored.svg"
        alt="Логотип Кубтел"
        fill={true}
        style={{
          objectFit: "cover",
        }}
      />
    </Link>
  );
}
