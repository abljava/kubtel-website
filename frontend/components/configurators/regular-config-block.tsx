import {
  PaymentType,
  SwitchWithCounter,
} from "@/components/configurators/switch-with-counter";
import React from "react";
import { TotalValue } from "../../app/individual/configurator/indiv-config";
import { BlockWrapper } from "./block-wrapper";
import { cn } from "@/lib/utils";

interface RegularConfigBlockProps {
  title: string;
  items: SwitchWithCounter[];
  total: Record<string, TotalValue>;
  updateTotal: (
    service: string,
    type: PaymentType
  ) => (value: number, quantity: number) => void;
  className?: string;
}

export function RegularConfigBlock({
  title,
  items,
  total,
  updateTotal,
  className
}: RegularConfigBlockProps) {
  return (
    <BlockWrapper className={cn('sm:gap-8 lg:col-span-7', className)}  title={title}>
      {items.map((item) => (
        <SwitchWithCounter
          key={item.name}
          type={item.type}
          name={item.name}
          title={item.title}
          description={item.description}
          price={item.price}
          isDefaultChecked={item.isDefaultChecked}
          isWithCounter={item.isWithCounter}
          isDisabled={item.isDisabled}
          isBindedChecked={
            item.bindedField ? !!total[item.bindedField]?.value : false
          }
          isParentChecked={
            item.parentField ? !!total[item.parentField]?.value : undefined
          }
          setTotal={updateTotal(item.name, item.type)}
          tooltip={item.tooltip}
        />
      ))}
    </BlockWrapper>
  );
}
