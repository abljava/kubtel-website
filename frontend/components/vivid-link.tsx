import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { ReactNode } from "react";

interface VividLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
}

export function VividLink({
  href,
  className,
  children,
  ...props
}: VividLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "text-primary-magenta underline decoration-dotted hover:decoration-solid w-fit",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
