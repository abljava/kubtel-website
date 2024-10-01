import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export function HeaderCart({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Button
      className={cn("p-0 flex gap-2 justify-start ml-auto", className)}
      variant="transparent"
    >
      <Image src="/images/icons/cart.svg" alt="" width={31} height={31} />
      <p className="text-muted-foreground font-bold hidden lg:block">Заказ</p>
    </Button>
  );
}
