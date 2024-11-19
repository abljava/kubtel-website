import { cn } from "@/lib/utils";
import React from "react";

interface BlockWrapperProps {
  title?: string;
  className?: string;
  children: React.ReactNode;
}

export function BlockWrapper({
  title,
  className,
  children,
}: BlockWrapperProps) {
  return (
    <div
      className={cn(
        "col-span-12 flex flex-col bg-white border shadow-basic p-4 gap-4 rounded-2xl",
        className
      )}
    >
      {title && (
        <h3 className="text-xl font-medium mt-[-30px] ml-5">{title}</h3>
      )}

      {children}
    </div>
  );
}
