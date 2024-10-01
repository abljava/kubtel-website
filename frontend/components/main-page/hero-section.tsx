"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { Logo } from "../ui/logo";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { HeroData } from "@/app/(home)/page";

interface HeroSectionProps {
  heroData: HeroData;
  className?: string;
}

export function HeroSection({ heroData, className }: HeroSectionProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <div
      className={cn(
        `relative flex row-span-1 -mx-5 -mb-7 lg:mb-0 bg-gradient-to-b from-[#FF1F70] from-0% via-[#FF3D9A] via-51% to-[#FFC6AD] to-83% lg:mx-0 lg:rounded-2xl overflow-hidden col-start-1 col-start-${heroData.start.mobile} sm:col-start-${heroData.start.tablet} lg:col-start-${heroData.start.desktop} col-end-${heroData.end.mobile} sm:col-end-${heroData.end.tablet} lg:col-end-${heroData.end.desktop}`,
        className
      )}
    >
      <Carousel
        plugins={[plugin.current]}
        opts={{
          loop: true,
        }}
        className="w-full h-full"
      >
        <CarouselContent className="h-full">
          {heroData.slides.map((item) => (
            <CarouselItem className="h-full" key={item.title}>
              <Image
                className="absolute bottom-0 w-screen -z-10 hidden sm:block"
                alt={item.image.alt || ""}
                style={{
                  objectFit: "cover",
                }}
                width={741}
                height={330}
                src={item.image.src}
              />
              {item.image.srcSmall && (
                <Image
                  className="absolute bottom-0 w-screen sm:hidden -z-10"
                  alt={item.image.alt || ""}
                  style={{
                    objectFit: "cover",
                  }}
                  width={360}
                  height={414}
                  src={item.image.srcSmall}
                />
              )}
              <Card className="relative flex flex-col items-start h-[414px] lg:h-full bg-transparent border-none border-r-0 w-screen rounded-none pl-4">
                <CardHeader className="mx-4 p-0 mt-8 mb-9 space-y-0 md:mt-14 lg:mt-10 lg:mx-20">
                  <CardTitle className="text-2xl font-extrabold text-white leading-7 uppercase">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-xl font-normal text-white">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mx-4 p-0 lg:mx-20">
                  {item.contentText && (
                    <p className="cursor-default text-3xl font-normal text-white">
                      {item.contentText}
                    </p>
                  )}
                  {item.contentButton && (
                    <Button variant="outline">{item.contentButton}</Button>
                  )}
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselDots className="absolute bottom-32 left-8 lg:bottom-5 lg:left-[99px]" />
      </Carousel>
      <Logo className="absolute bottom-20 left-0 p-0 mx-8 sm:hidden" />
    </div>
  );
}
