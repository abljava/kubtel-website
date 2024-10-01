"use client";

import { Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import { useState } from "react";

type TypeLocation = {
  value: string;
  label: string;
};

const locations: TypeLocation[] = [
  {
    value: "Krasnodar",
    label: "Краснодар",
  },
  {
    value: "Dinskaya",
    label: "Динская",
  },
  {
    value: "Slavyansk-na-Kubani",
    label: "Славянск-на-Кубани",
  },
  {
    value: "Anapa",
    label: "Анапа",
  },
  {
    value: "Kanevskaya",
    label: "Каневская",
  },
  {
    value: "Timashevsk",
    label: "Тимашевск",
  },
  {
    value: "Arkhipo-Osipovka",
    label: "Архипо-Осиповка",
  },
  {
    value: "Yablonovskiy",
    label: "Яблоновский",
  },
  {
    value: "Tlyustenhabl",
    label: "Тлюстенхабль",
  },
  {
    value: "Agronom",
    label: "Агроном",
  },
  {
    value: "Druzhelyubnyy",
    label: "Дружелюбный",
  },
  {
    value: "Novominskaya",
    label: "Новоминская",
  },
  {
    value: "Novaya Adygeya",
    label: "Новая Адыгея",
  },
  {
    value: "Tugurgoi",
    label: "Тугургой",
  },
  {
    value: "Krepostnaya",
    label: "Крепостная",
  },
  {
    value: "Staroderevyankovskaya",
    label: "Стародеревянковская",
  },
];

export function LocationSelector({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(locations[0].value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className={cn("flex w-full", className)} asChild>
        <Button
          variant="transparent"
          size="default"
          role="combobox"
          aria-expanded={open}
          aria-label="Select Department"
          className="w-full p-0 justify-start gap-3 text-muted-foreground font-bold"
        >
          <Image
            src="/images/icons/position.svg"
            alt=""
            width={24}
            height={24}
          />
          <p className="hidden lg:inline truncate">
            {value
              ? locations.find((location) => location.value === value)?.label
              : "Местоположение"}
          </p>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] p-0">
        <Command>
          <CommandInput placeholder="Найти населённый пункт..." />
          <CommandList>
            <CommandEmpty>Ничего не найдено</CommandEmpty>
            <CommandGroup>
              {locations.map((location) => (
                <CommandItem
                  key={location.value}
                  value={location.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === location.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {location.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
