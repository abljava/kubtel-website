import { cn } from "@/lib/utils";
import React from "react";

interface TotalPriceTooltipProps {
  subscription: number;
  oneTimePay: number;
  className?: string;
}

export function TotalPriceToolip({
  subscription,
  oneTimePay,
  className,
}: TotalPriceTooltipProps) {
  return (
    <div
      className={cn(
        "fixed z-50 w-1/2 sm:w-[230px] bottom-24 right-4 lg:right-8 xl:right-[20%] bg-white rounded-2xl shadow-basic opacity-90 visible p-5 transition-all duration-500",
        className
      )}
    >
      <div>
        <p className="text-base font-semibold text-right">Абонентская плата:</p>
        <p className="text-xl text-textGray font-semibold text-right">
          {new Intl.NumberFormat("ru").format(subscription)} ₽
          <small>/мес</small>
        </p>
      </div>
      <div>
        <p className="text-base font-semibold text-right">
          Единовременный платёж:
        </p>
        <p className="text-xl text-textGray font-semibold text-right">
          {new Intl.NumberFormat("ru").format(oneTimePay)} ₽
        </p>
      </div>
    </div>
  );
}
