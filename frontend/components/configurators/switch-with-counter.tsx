import { ReactNode, useEffect, useState } from "react";
import { Switch } from "../ui/switch";
import { CounterButtons } from "./counter-buttons";
import { HoverCard } from "../ui/hover-card";
import { ConfigTooltip } from "./config-tooltip";
import { cn } from "@/lib/utils";

export type PaymentType = "subscription" | "oneTimePay";

interface Tooltip {
  title: string;
  content: ReactNode;
}

export interface SwitchRegular {
  type: PaymentType;
  name: string;
  title: string;
  description?: string;
  price: number;
  isDefaultChecked?: boolean;
  isDisabled?: boolean;
  bindedField?: string;
  parentField?: string;
  tooltip?: Tooltip;
}

export interface SwitchWithCounter extends SwitchRegular {
  isWithCounter?: boolean;
}

interface SwitchWithCounterProps extends SwitchWithCounter {
  setTotal: (value: number, quantity: number) => void;
  isBindedChecked?: boolean;
  isParentChecked?: boolean;
}

export function SwitchWithCounter({
  name,
  title,
  description,
  price,
  isDefaultChecked = false,
  setTotal,
  isWithCounter,
  isDisabled,
  isBindedChecked,
  isParentChecked,
  tooltip,
}: SwitchWithCounterProps) {
  const [isChecked, setIsChecked] = useState<boolean>(isDefaultChecked);
  const [counter, setCounter] = useState<number>(1);
  const [sum, setSum] = useState<number>(0);

  useEffect(() => {
    if (isParentChecked === false) {
      setIsChecked(false);
    }
  }, [isParentChecked]);

  useEffect(() => {
    const total = price * counter;
    setSum(total);
    setTotal(
      isChecked || isBindedChecked ? total : 0,
      isChecked || isBindedChecked ? counter : 0
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter, price, isChecked, isBindedChecked]);

  function handleChange(update: 1 | -1) {
    setCounter((prevVal) => Math.max(prevVal + update, 1));
  }

  return (
    <HoverCard>
      <div className="flex flex-row items-center gap-2">
        <Switch
          name={name}
          id={name}
          checked={isBindedChecked ? isBindedChecked : isChecked}
          disabled={isDisabled || isParentChecked === false}
          onCheckedChange={(e) => {
            setIsChecked(!isChecked);
          }}
        />
        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-[6fr_1fr_2fr] sm:items-center sm:w-full">
          <li className="sm:order-0">
            <p className="text-xl font-semibold">{title}</p>
            {(description || tooltip) && (
              <>
                {tooltip ? (
                  <ConfigTooltip
                    title={tooltip.title}
                    content={tooltip.content}
                  />
                ) : (
                  <p className="text-base text-textGray">{description}</p>
                )}
              </>
            )}
          </li>
          {isWithCounter && (
            <li
              className={cn(
                "sm:col-start-2 sm:col-end-3 sm:flex sm:justify-end sm:order-1"
              )}
            >
              <CounterButtons
                isDisabled={!isChecked}
                handleChange={handleChange}
                counter={counter}
              />
            </li>
          )}
          <li
            className={cn(
              "sm:col-start-3 sm:col-end-4 sm:flex sm:justify-end sm:order-2"
            )}
          >
            <p className="text-xl text-textGray sm:ml-auto">
              {new Intl.NumberFormat("ru").format(sum)} ₽
            </p>
          </li>
        </ul>
      </div>
    </HoverCard>
  );
}
