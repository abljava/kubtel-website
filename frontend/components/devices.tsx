"use client";

import { useRouter } from "next/navigation";
import { Device, IDevice } from "./device";
import { Button } from "./ui/button";
import { useCallback, useEffect, useState } from "react";

const devices: IDevice[] = [
  {
    type: "ТВ-приставка",
    model: "4K IPTV Vermax UHD300X",
    imageUrl: "/images/devices/Vermax-UHD300X.png",
    price: 4000,
    features: [
      {
        title: "Wi-Fi",
        description: "Есть",
        iconUrl: "/images/icons/wi-fi.svg",
      },
      {
        title: "ОС",
        description: "Android 7.1",
        iconUrl: "/images/icons/cpu.svg",
      },
      {
        title: "Карты памяти",
        description: "microSD, SD",
        iconUrl: "/images/icons/ram.svg",
      },
      {
        title: "Разрешение",
        description: "4K UHD",
        iconUrl: "/images/icons/resolution.svg",
      },
      {
        title: "Размеры",
        description: "85×85×16 мм",
        iconUrl: "/images/icons/box.svg",
      },
      {
        title: "Bluetooth",
        description: "Есть",
        iconUrl: "/images/icons/bluetooth.svg",
      },
    ],
  },
  {
    type: "Маршрутизатор",
    model: "SNR-CPE-ME2-Lite",
    imageUrl: "/images/devices/SNR-CPE-ME2-Lite_s.png",
    price: 4100,
    features: [
      {
        title: "Wi-Fi",
        description: "Есть",
        iconUrl: "/images/icons/wi-fi.svg",
      },
      {
        title: "ОС",
        description: "Android 7.1",
        iconUrl: "/images/icons/cpu.svg",
      },
      {
        title: "Карты памяти",
        description: "microSD, SD",
        iconUrl: "/images/icons/ram.svg",
      },
      {
        title: "Разрешение",
        description: "4K UHD",
        iconUrl: "/images/icons/resolution.svg",
      },
      {
        title: "Размеры",
        description: "85×85×16 мм",
        iconUrl: "/images/icons/box.svg",
      },
      {
        title: "Bluetooth",
        description: "Есть",
        iconUrl: "/images/icons/bluetooth.svg",
      },
    ],
  },
];

export function Devices() {
  const [devicesTotal, setDevicesTotal] = useState<Record<string, number>>({});
  const [total, setTotal] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    setTotal(Object.values(devicesTotal).reduce((acc, val) => acc + val, 0));
  }, [devicesTotal]);

  const updateDeviceTotal = useCallback((model: string) => {
    return (value: number) => {
      setDevicesTotal((prevVal) => ({ ...prevVal, [model]: value }));
    };
  }, []);

  return (
    <div className="flex flex-col gap-5 col-span-12">
      <h2 className="text-2xl font-bold ">Устройства</h2>
      <ul className="flex flex-col gap-5">
        {devices.map((device) => (
          <Device
            key={device.model}
            model={device.model}
            type={device.type}
            imageUrl={device.imageUrl}
            price={device.price}
            features={device.features}
            setTotal={updateDeviceTotal(device.model)}
          />
        ))}
      </ul>
      <div className="flex flex-col gap-5 bg-white rounded-md border shadow-basic p-5">
        <div>
          <p className="text-xl font-semibold">Стоимость:</p>
          <p className="text-3xl text-textGray font-semibold">{total} ₽</p>
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
    </div>
  );
}
