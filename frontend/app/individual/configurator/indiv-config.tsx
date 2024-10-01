"use client";

import {
  PaymentType,
  SwitchRegular,
  SwitchWithCounter,
} from "@/components/configurators/switch-with-counter";
import { TotalPrice } from "@/components/configurators/total-price";
import React, { ReactNode, useCallback, useEffect, useState } from "react";
import { RegularConfigBlock } from "@/components/configurators/regular-config-block";
import { OneChooseConfigBlock } from "@/components/configurators/one-choose-config-block";
import Link from "next/link";
import { useScrollY } from "@/lib/hooks/useScrollY";
import { cn } from "@/lib/utils";
import { TotalPriceToolip } from "@/components/configurators/total-price-tooltip";

export interface TotalValue {
  value: number;
  quantity: number;
  type: PaymentType;
  itemName?: string;
}

const tooltips: Record<string, ReactNode> = {
  internetForHouseEquip: (
    <div>
      <p>
        Подключение по технологии <b>PON</b>.<br />
        Комплект абонентского подключения:
      </p>
      <ul className="list-disc ml-3">
        <li>абонентская розетка (корпус)</li>
        <li>проходная розетка</li>
        <li>пигтейл</li>
        <li>патч-корд оптический</li>
        <li>патч-корд медный</li>
        <li>преобразователь оптического интерфейса в медь ONU</li>
        <li>расходные материалы</li>
      </ul>
    </div>
  ),
  tvBasePackage: (
    <div>
      <Link
        className="text-primary-magenta underline decoration-dotted hover:decoration-solid"
        href={"/"}
      >
        Полный список каналов
      </Link>
    </div>
  ),
  filmsPackage: (
    <ul className="list-disc">
      <li>Кинохит,</li>
      <li>Киносемья,</li>
      <li>Киносвидание,</li>
      <li>Мужское Кино,</li>
      <li>Кинопремьера HD</li>
    </ul>
  ),
  premierPackage: (
    <ul className="list-disc">
      <li>Матч! Премьер HD,</li>
      <li>Матч! Премьер</li>
    </ul>
  ),
  footbalPackage: (
    <ul className="list-disc">
      <li>Матч! Футбол 1,</li>
      <li>Матч! Футбол 2,</li>
      <li>Матч! Футбол 3</li>
    </ul>
  ),
  "SNR-CPE-W4N": (
    <p>
      Кубтел TV можно смотреть на Smart TV (LG/Samsung), ТВ-приставке, Мобильном
      устройстве или Компьютере. Базово количество устройств равно 3.
    </p>
  ),
  KubtelDome: (
    <div>
      <ul>
        <li>День/Ночь: Автоматически ИК сенсором</li>
        <li>Разрешение: 1920×1080 FullHD</li>
        <li>Дальность ИК-подсветки: 20—30 м</li>
        <li>Размеры: 96×73 мм</li>
        <li>Оповещения: Движение, потеря сигнала, др.</li>
        <li>Питание: DC12V/POE</li>
      </ul>
      <p>Цена указана с учетом подключеной услуги</p>
    </div>
  ),
  KubtelHome: (
    <div>
      <ul>
        <li>День/Ночь: Автоматически ИК сенсором</li>
        <li>Разрешение: 1920×1080 FullHD</li>
        <li>Дальность ИК-подсветки: 10 м</li>
        <li>Размеры: 65×60×108.5 мм</li>
        <li>Оповещения: Движение, потеря сигнала, др.</li>
        <li>Питание: DC5V/1.5A</li>
        <li>Поворотно-шарнирный механизм</li>
        <li>Аудио: 1 микрофон, 1 динамик</li>
      </ul>
      <p>Цена указана с учетом подключеной услуги</p>
    </div>
  ),
  KubtelBullet: (
    <div>
      <ul>
        <li>День/Ночь: Автоматически ИК сенсором</li>
        <li>Разрешение: 1920×1080 FullHD</li>
        <li>Дальность ИК-подсветки: 20—30 м</li>
        <li>Размеры: 166×60×60 мм</li>
        <li>Оповещения: Движение, потеря сигнала, др.</li>
        <li>Питание: DC12V/POE</li>
      </ul>
      <p>Цена указана с учетом подключеной услуги</p>
    </div>
  ),
  outsideService: (
    <p>
      Настройка WiFi-роутера или ТВ-приставки, восстановление кабеля / разъёма
    </p>
  ),
};

const basicTariffs: SwitchWithCounter[] = [
  {
    type: "subscription",
    name: "internetBasePackage",
    title: "Базовый тариф",
    description: "Абонентская плата",
    price: 550,
    isDefaultChecked: true,
    isDisabled: true,
  },
  {
    type: "subscription",
    name: "internetForHouse",
    title: "Итернет в частный дом",
    description: "Абонентская плата",
    price: 440,
  },
  {
    type: "oneTimePay",
    name: "internetForHouseEquip",
    title: "Итернет в частный дом",
    description: "Комплект оборудования",
    price: 4990,
    isDisabled: true,
    bindedField: "internetForHouse",
    tooltip: {
      title: "Комплект оборудования",
      content: tooltips.internetForHouseEquip,
    },
  },
];

const devices: SwitchWithCounter[] = [
  {
    type: "oneTimePay",
    name: "SNR-CPE-ME2-Lite",
    title: "Маршрутизатор SNR-CPE-ME2-Lite",
    price: 4000,
    isWithCounter: true,
  },
  {
    type: "oneTimePay",
    name: "SNR-CPE-W4N",
    title: "Маршрутизатор SNR-CPE-W4N 2.4ГГц",
    price: 2300,
    isWithCounter: true,
  },
];

const tvPackages: SwitchWithCounter[] = [
  {
    type: "subscription",
    name: "tvBasePackage",
    title: "Базовый пакет",
    price: 100,
    tooltip: {
      title: "172 канала",
      content: tooltips.tvBasePackage,
    },
  },
  {
    type: "subscription",
    name: "filmsPackage",
    title: "Настрой кино",
    price: 319,
    parentField: "tvBasePackage",
    tooltip: {
      title: "5 каналов",
      content: tooltips.filmsPackage,
    },
  },
  {
    type: "subscription",
    name: "premierPackage",
    title: "Матч Премьер",
    price: 219,
    parentField: "tvBasePackage",
    tooltip: {
      title: "2 канала",
      content: tooltips.premierPackage,
    },
  },
  {
    type: "subscription",
    name: "footbalPackage",
    title: "Матч Футбол",
    price: 380,
    parentField: "tvBasePackage",
    tooltip: {
      title: "3 канала",
      content: tooltips.footbalPackage,
    },
  },
];

const devicesForTv: SwitchWithCounter[] = [
  {
    type: "oneTimePay",
    name: "Vermax-UHD300X",
    title: "ТВ-приставка 4K IPTV Vermax UHD300X",
    price: 4000,
    isWithCounter: true,
  },
  {
    type: "subscription",
    name: "SNR-CPE-W4N",
    title: "Увеличить количество устройств до 5-ти",
    price: 89,
    tooltip: {
      title: "подробнее",
      content: tooltips["SNR-CPE-W4N"],
    },
  },
];

const videoMonitoring: SwitchRegular[] = [
  {
    type: "subscription",
    name: "onlineWatch",
    title: "Онлайн просмотр (без записи)",
    price: 150,
  },
  {
    type: "subscription",
    name: "3DayStoring",
    title: "Хранение записей 3 дня",
    price: 300,
  },
  {
    type: "subscription",
    name: "7DayStoring",
    title: "Хранение записей 7 дней",
    price: 500,
  },
  {
    type: "subscription",
    name: "13DayStoring",
    title: "Хранение записей 14 дней",
    price: 600,
  },
  {
    type: "subscription",
    name: "30DayStoring",
    title: "Хранение записей 30 дней",
    price: 800,
  },
];

const cameras: SwitchWithCounter[] = [
  {
    type: "oneTimePay",
    name: "KubtelDome",
    title: "Kubtel.Dome",
    price: 4000,
    isWithCounter: true,
    tooltip: {
      title: "подробнее",
      content: tooltips.KubtelDome,
    },
  },
  {
    type: "oneTimePay",
    name: "KubtelHome",
    title: "Kubtel.Home",
    price: 6000,
    isWithCounter: true,
    tooltip: {
      title: "подробнее",
      content: tooltips.KubtelHome,
    },
  },
  {
    type: "oneTimePay",
    name: "KubtelBullet",
    title: "Kubtel.Bullet",
    price: 4000,
    isWithCounter: true,
    tooltip: {
      title: "подробнее",
      content: tooltips.KubtelBullet,
    },
  },
];

const additionalServices: SwitchWithCounter[] = [
  {
    type: "subscription",
    name: "staticIP",
    title: "Статический IP адрес",
    price: 300,
    isWithCounter: true,
  },
  {
    type: "oneTimePay",
    name: "outsideService",
    title: "Выездные работы",
    price: 500,
    tooltip: {
      title: "подробнее",
      content: tooltips.outsideService,
    },
  },
];

export function IndivConfig() {
  const [total, setTotal] = useState<Record<string, TotalValue>>({});
  const [subscriptionPayment, setSubscriptionPayment] = useState<number>(0);
  const [oneTimePayment, setOneTimePayment] = useState<number>(0);
  const [scrollY] = useScrollY();

  useEffect(() => {
    const subscriptionPayment = Object.values(total)
      .filter((i) => i.type === "subscription")
      .map((i) => i.value)
      .reduce((acc, val) => acc + val, 0);

    const oneTimePayment = Object.values(total)
      .filter((i) => i.type === "oneTimePay")
      .map((i) => i.value)
      .reduce((acc, val) => acc + val, 0);

    setSubscriptionPayment(subscriptionPayment);
    setOneTimePayment(oneTimePayment);
  }, [total]);

  const updateTotal = useCallback((service: string, type: PaymentType) => {
    return (value: number, quantity: number, itemName?: string) => {
      setTotal((prevVal) => ({
        ...prevVal,
        [service]: { value, quantity, type, itemName },
      }));
    };
  }, []);

  return (
    <>
      <h2 className="text-2xl font-bold col-span-12 order-4 lg:order-3">
        Выберите тариф
      </h2>
      <RegularConfigBlock
        className="order-4 lg:order-4"
        title={"Доступ в сеть Интернет"}
        items={basicTariffs}
        total={total}
        updateTotal={updateTotal}
      />
      <RegularConfigBlock
        className="order-4 lg:order-6"
        title={"Устройства"}
        items={devices}
        total={total}
        updateTotal={updateTotal}
      />
      <RegularConfigBlock
        className="order-4 lg:order-8"
        title={"Интерактивное ТВ"}
        items={tvPackages}
        total={total}
        updateTotal={updateTotal}
      />
      <RegularConfigBlock
        className="order-4 lg:order-10"
        title={"Устройства для ТВ"}
        items={devicesForTv}
        total={total}
        updateTotal={updateTotal}
      />
      <OneChooseConfigBlock
        className="order-4 lg:order-10"
        title={"Видеонаблюдение"}
        items={videoMonitoring}
        setTotal={updateTotal("videoMonitoring", videoMonitoring[0].type)}
      />
      <RegularConfigBlock
        className="order-4 lg:order-10"
        title={"Камеры видеонаблюдения"}
        items={cameras}
        total={total}
        updateTotal={updateTotal}
      />
      <RegularConfigBlock
        className="order-4 lg:order-10"
        title={"Дополнительные услуги"}
        items={additionalServices}
        total={total}
        updateTotal={updateTotal}
      />
      <TotalPrice
        className={cn(
          "order-3 sm:col-span-6 lg:order-5 lg:col-span-5 lg:justify-center transition-all"
        )}
        subscription={subscriptionPayment}
        oneTimePay={oneTimePayment}
      />
      <TotalPriceToolip
        className={cn(
          "",
          (scrollY < 500 ||
            (subscriptionPayment <= 550 && oneTimePayment === 0)) &&
            "opacity-0 invisible"
        )}
        subscription={subscriptionPayment}
        oneTimePay={oneTimePayment}
      />
    </>
  );
}
