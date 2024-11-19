import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { BlockWrapper } from "./block-wrapper";
import { cn } from "@/lib/utils";

interface TotalPriceProps {
  subscription: number;
  oneTimePay: number;
  className?: string;
}

export function TotalPrice({ subscription, oneTimePay, className }: TotalPriceProps) {
  const router = useRouter();
  return (
    <BlockWrapper className={cn('', className)}>
      <div>
        <p className="text-xl font-semibold">Абонентская плата:</p>
        <p className="text-3xl text-textGray font-semibold">
          {new Intl.NumberFormat("ru").format(subscription)} ₽
          <small>/мес</small>
        </p>
      </div>
      <div>
        <p className="text-xl font-semibold">Единовременный платёж:</p>
        <p className="text-3xl text-textGray font-semibold">
          {new Intl.NumberFormat("ru").format(oneTimePay)} ₽
        </p>
      </div>
      <Button
        className="w-full"
        variant="kubtel"
        type="submit"
        onClick={() => router.push("/order")}
      >
        Добавить в корзину
      </Button>
    </BlockWrapper>
  );
}
