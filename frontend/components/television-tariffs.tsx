"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";

type TypeTelevisionTariff = {
  name:
    | "basePackage"
    | "kino"
    | "matchPremier"
    | "matchFootball"
    | "tvTuner"
    | "powerAdaptor"
    | "remoteControl";
  title: string;
  description?: string;
  price: number;
  isChecked: boolean;
};

const televisionTariffs: TypeTelevisionTariff[] = [
  {
    name: "basePackage",
    title: "Базовый тариф",
    description: "172 канала",
    price: 0,
    isChecked: true,
  },
  {
    name: "kino",
    title: "Настрой кино",
    description: "5 каналов",
    price: 319,
    isChecked: false,
  },
  {
    name: "matchPremier",
    title: "Матч! Премьер",
    description: "2 канала",
    price: 299,
    isChecked: false,
  },
  {
    name: "matchFootball",
    title: "Матч! Футбол",
    description: "3 канала",
    price: 380,
    isChecked: false,
  },
];

const tvTunerTariffs: TypeTelevisionTariff[] = [
  {
    name: "tvTuner",
    title: "ТВ-приставка 4K IPTV Vermax UHD300X",
    price: 4000,
    isChecked: true,
  },
  {
    name: "powerAdaptor",
    title: "Блок питания ТВ-приставки",
    description: "Взамен вышедшему из строя",
    price: 900,
    isChecked: false,
  },
  {
    name: "remoteControl",
    title: "Пульт дистанционного управления",
    description: "Взамен вышедшему из строя",
    price: 500,
    isChecked: false,
  },
];

const formSchema = z.object({
  basePackage: z.boolean().default(true).optional(),
  kino: z.boolean().default(false).optional(),
  matchPremier: z.boolean().default(false).optional(),
  matchFootball: z.boolean().default(false).optional(),
  tvTuner: z.boolean().default(false).optional(),
  powerAdaptor: z.boolean().default(false).optional(),
  remoteControl: z.boolean().default(false).optional(),
});

export function TelevisionTariffs() {
  const [regularPayment, setRegularPayment] = useState<number>(189);
  const [oneTimePayment, setOneTimePayment] = useState<number>(4000);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      basePackage: true,
      kino: false,
      matchPremier: false,
      matchFootball: false,
      tvTuner: true,
      powerAdaptor: false,
      remoteControl: false,
    },
  });

  function calculate(
    fields: TypeTelevisionTariff[],
    field: any,
    setter: Dispatch<SetStateAction<number>>
  ) {
    const foundItem = fields.find((item) => item.name === field.name);
    let multy = field.value === false ? 1 : -1;
    if (foundItem) {
      setter((prevVal) => prevVal + foundItem.price * multy);
    }
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 col-span-12"
      >
        <h2 className="text-2xl font-bold">Телевидение</h2>
        <fieldset className="flex flex-col bg-white rounded-md border shadow-[0px_5px_36px_0px_rgba(0,0,0,0.08)]">
          <legend className="ml-5">
            <h3 className="text-xl font-medium">Тариф и пакеты</h3>
          </legend>
          {televisionTariffs.map((tariff) => (
            <FormField
              key={tariff.title}
              control={form.control}
              name={tariff.name}
              render={({ field }) => (
                <FormItem className="flex flex-row items-center space-x-3 space-y-0 p-4">
                  <FormControl>
                    <Switch
                      className=""
                      checked={field.value}
                      onCheckedChange={(e) => {
                        calculate(televisionTariffs, field, setRegularPayment);
                        field.onChange(e);
                      }}
                    />
                  </FormControl>
                  <ul className="flex flex-col gap-2">
                    <li>
                      <FormLabel className="text-xl font-semibold">
                        {tariff.title}
                      </FormLabel>
                    </li>
                    <li>
                      <FormLabel className="text-base text-[#97999B]">
                        {tariff.description}
                      </FormLabel>
                    </li>
                    <li>
                      <FormLabel className="text-xl text-[#97999B]">
                        {tariff.price} ₽
                      </FormLabel>
                    </li>
                  </ul>
                </FormItem>
              )}
            />
          ))}
        </fieldset>
        <fieldset className="flex flex-col bg-white rounded-md border shadow-[0px_5px_36px_0px_rgba(0,0,0,0.08)]">
          <legend className="ml-5">
            <h3 className="text-xl font-medium">ТВ приставка</h3>
          </legend>
          {tvTunerTariffs.map((tariff) => (
            <FormField
              key={tariff.title}
              control={form.control}
              name={tariff.name}
              render={({ field }) => (
                <FormItem className="flex flex-row items-center space-x-3 space-y-0 p-4">
                  <FormControl>
                    <Switch
                      className="data-[state=checked]:bg-[#EC008C]"
                      checked={field.value}
                      onCheckedChange={(e) => {
                        calculate(tvTunerTariffs, field, setOneTimePayment);
                        field.onChange(e);
                      }}
                    />
                  </FormControl>
                  <ul className="flex flex-col gap-2">
                    <li>
                      <FormLabel className="text-xl font-semibold">
                        {tariff.title}
                      </FormLabel>
                    </li>
                    <li>
                      <FormLabel className="text-base text-[#97999B]">
                        {tariff.description}
                      </FormLabel>
                    </li>
                    <li>
                      <FormLabel className="text-xl text-[#97999B]">
                        {tariff.price} ₽
                      </FormLabel>
                    </li>
                  </ul>
                </FormItem>
              )}
            />
          ))}
        </fieldset>
        <div className="flex flex-col gap-5 bg-white rounded-md border shadow-[0px_5px_36px_0px_rgba(0,0,0,0.08)] p-5">
          <div>
            <p className="text-xl font-semibold">Абонентская плата:</p>
            <p className="text-3xl text-[#97999B] font-semibold">
              {regularPayment} ₽
            </p>
          </div>
          <div>
            <p className="text-xl font-semibold">Единовременный платёж</p>
            <p className="text-3xl text-[#97999B] font-semibold">
              {oneTimePayment} ₽
            </p>
          </div>
          <Button
            className="w-full"
            variant="kubtel"
            type="submit"
            onClick={() => router.push("/order")}
          >
            Заказать
          </Button>
        </div>
      </form>
    </Form>
  );
}
