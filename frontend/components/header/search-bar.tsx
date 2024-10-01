"use client";

import * as React from "react";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Image from "next/image";

export function SearchBar({ className }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <>
      <div className={cn("relative hidden xl:flex ml-2 mr-5", className)}>
        <Image
          className="absolute left-2 top-3 mr-2 h-4 w-4"
          src="/images/icons/magnify-glass.svg"
          alt=""
          width={16}
          height={16}
        />
        <Input className="pl-7 text-black h-10" placeholder="Поиск" disabled />
      </div>

      <Button
        className={cn("relative flex xl:hidden ml-auto  lg:mr-auto", className)}
        variant="outline"
        size="icon"
      >
        <Image
          src="/images/icons/magnify-glass.svg"
          alt=""
          width={16}
          height={16}
        />
      </Button>
    </>
  );
}
