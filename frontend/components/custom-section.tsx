import React from "react";
import { cn } from "@/lib/utils";

interface CustomSectionProps {
  children: React.ReactNode;
  className?: string;
}

export function CustomSection({ children, className }: CustomSectionProps) {
  return (
    <section
      className={cn(
        "grid grid-cols-12 gap-6 grid-flow-dense w-full max-w-[1280px] bg-[#EEF6FF] px-5 mx-auto lg:px-9 xl:px-20",
        className
      )}
    >
      {children}
    </section>
  );
}
