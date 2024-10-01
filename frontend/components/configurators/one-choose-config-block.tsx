import React, { useEffect, useState } from "react";
import { SwitchRegular } from "./switch-with-counter";
import { HoverCard } from "../ui/hover-card";
import { Switch } from "../ui/switch";
import { BlockWrapper } from "./block-wrapper";
import { CounterButtons } from "./counter-buttons";
import { ConfigTooltip } from "./config-tooltip";
import { cn } from "@/lib/utils";

interface OneChooseConfigBlockProps {
  title: string;
  items: SwitchRegular[];
  setTotal: (value: number, quantity: number, itemName?: string) => void;
  className?: string;
}

export function OneChooseConfigBlock({
  title,
  items,
  setTotal,
  className,
}: OneChooseConfigBlockProps) {
  const [counter, setCounter] = useState<number>(1);
  const [checkedItem, setCheckedItem] = useState<string | undefined>("");

  useEffect(() => {
    const checkedPrice =
      items.find((item) => item.name === checkedItem)?.price || 0;
    const totalPrice = checkedPrice * counter;
    setTotal(totalPrice, counter, checkedItem);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkedItem, counter]);

  function handleChange(update: 1 | -1) {
    setCounter((prevVal) => Math.max(prevVal + update, 1));
  }

  function handleSwitchClick(e: React.MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLButtonElement;
    if (target.ariaChecked === "false") {
      setCheckedItem(target.id);
    } else setCheckedItem("");
  }

  return (
    <BlockWrapper
      className={cn("sm:gap-8 lg:col-span-7", className)}
      title={title}
    >
      <div className="flex flex-row items-center gap-2">
        <p className="text-xl font-semibold">Количество камер</p>
        <CounterButtons handleChange={handleChange} counter={counter} />
      </div>
      {items.map((item) => (
        <HoverCard key={item.name}>
          <div className="flex flex-row items-center gap-2">
            <Switch
              onClick={(e) => handleSwitchClick(e)}
              name={item.name}
              id={item.name}
              checked={checkedItem === item.name}
            />
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-[6fr_1fr_2fr] sm:items-center sm:w-full">
              <li className="sm:order-0">
                <p className="text-xl font-semibold">{item.title}</p>
                {(item.description || item.tooltip) && (
                  <>
                    {item.tooltip ? (
                      <ConfigTooltip
                        title={item.tooltip.title}
                        content={item.tooltip.content}
                      />
                    ) : (
                      <p className="text-base text-textGray">
                        {item.description}
                      </p>
                    )}
                  </>
                )}
              </li>
              <li
                className={cn(
                  "sm:col-start-3 sm:col-end-4 sm:flex sm:justify-end sm:order-2"
                )}
              >
                <p className="text-xl text-textGray">
                  {new Intl.NumberFormat("ru").format(item.price * counter)} ₽
                </p>
              </li>
            </ul>
          </div>
        </HoverCard>
      ))}
    </BlockWrapper>
  );
}
