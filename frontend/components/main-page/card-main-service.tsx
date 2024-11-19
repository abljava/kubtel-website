import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import { H4 } from "../text/text";

type TypeIcon = {
  alt: string;
  src: string;
};

export type TypeCardMainService = {
  id: string;
  title: string;
  description: string;
  icon: TypeIcon;
  url: string;
};

export function CardMainService({ card }: { card: TypeCardMainService }) {
  return (
    <Link href={card.url}>
      <Card className="relative group grid sm:grid-cols-3 sm:grid-flow-dense sm:px-8 sm:py-6 m-0 p-4 bg-gradient-to-br from-[#FFFFFF] from-0% to-[#EEF6FF] border-none rounded-xl shadow-basic w-[180px] h-[186px] sm:w-[362px] sm:h-[118px] xl:hover:-translate-y-2 xl:hover:shadow-buttonHover transition-all duration-300">
        <CardHeader className="p-0 mb-6 sm:col-start-2 sm:mb-0">
          <H4>{card.title}</H4>
        </CardHeader>
        <CardContent className="relative p-0 sm:col-start-1 sm:row-span-2 w-[65px] h-[65px]">
          <Image
            key={card.icon.src}
            className="p-0 mb-4 sm:mb-0"
            alt={card.icon.alt}
            fill={true}
            style={{
              objectFit: "contain",
            }}
            src={card.icon.src}
          />
        </CardContent>
        <CardFooter className="p-0 sm:col-start-2">
          <p className="text-lg font-light text-[#9D9D9D]">
            {card.description}
          </p>
          <div className="flex items-center gap-1 opacity-0 xl:group-hover:opacity-90 absolute bottom-[10px] right-[20px] transition-opacity">
            <p className="text-[11px] font-light text-[#9D9D9D]">Подробнее</p>
            <Image
              className="w-2 h-2 fill-[#9D9D9D]"
              src="/images/icons/arrow-to-right-2.svg"
              alt=""
              width={24}
              height={24}
            />
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
