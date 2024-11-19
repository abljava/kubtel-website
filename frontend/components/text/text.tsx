import React from "react";
import { cn } from "@/lib/utils";

type TypeTextProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export function H1({ children, className }: TypeTextProps) {
  return (
    <h1
      className={cn(
        "text-white text-4xl sm:text-lg md:text-2xl font-bold sm:font-bold",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className }: TypeTextProps) {
  return (
    <h2
      className={cn(
        "text-black text-2xl sm:text-lg md:text-2xl font-bold sm:font-bold",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function H3({ children, className }: TypeTextProps) {
  return (
    <h3
      className={cn(
        "text-foreground text-base sm:text-lg md:text-2xl font-semibold sm:font-bold",
        className
      )}
    >
      {children}
    </h3>
  );
}

export function H4({ children, className }: TypeTextProps) {
  return (
    <h4
      className={cn(
        "text-foreground text-sm sm:text-xl md:text-2xl font-semibold sm:font-bold",
        className
      )}
    >
      {children}
    </h4>
  );
}

export function H5({ children, className }: TypeTextProps) {
  return (
    <h4
      className={cn("text-foreground text-sm sm:text-lg font-bold", className)}
    >
      {children}
    </h4>
  );
}
