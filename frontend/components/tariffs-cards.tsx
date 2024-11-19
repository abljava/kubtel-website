import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";

type TypeIcon = {
  alt: string;
  src: string;
};

type TypeTariffsData = {
  title: string;
  description: string;
  icon: TypeIcon;
};

const tariffsData: TypeTariffsData[] = [
  {
    title: "Интернет",
    description: "от 500 р/мес",
    icon: {
      alt: "Интернет",
      src: "/images/icons/internet.svg",
    },
  },
  {
    title: "Телевидение",
    description: "от 600 р/мес",
    icon: {
      alt: "Телевидение",
      src: "/images/icons/television.svg",
    },
  },
  {
    title: "Устройства",
    description: "от 700 р/мес",
    icon: {
      alt: "Устройства",
      src: "/images/icons/devices.svg",
    },
  },
];

export function TariffCards() {
  return (
    <div className="flex overflow-x-scroll pb-8 pt-6">
      {tariffsData.map((card) => (
        <Card
          key={card.title}
          className="flex flex-col first-of-type:ml-4 mr-4 p-4 bg-gradient-to-br from-[#FFFFFF] to-[#EEF6FF]  border-none  shadow-[0px_5px_36px_0px_rgba(0,0,0,0.08)] min-w-[180px] h-[186px]"
        >
          <CardHeader className="p-0 mb-6">
            <CardTitle className="text-sm font-bold text-[#1B2124]">
              {card.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Image
              key={card.icon.src}
              className="p-0 mb-4"
              alt={card.icon.alt}
              width={65}
              height={65}
              src={card.icon.src}
            />
          </CardContent>
          <CardFooter className="p-0">
            <p className="cursor-default text-lg font-light text-[#9D9D9D]">
              {card.description}
            </p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
