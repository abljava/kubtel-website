'use client';

import { TypeLines } from '@/lib/definitions';
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from '../ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import Image from 'next/image';
import { Logo } from '../ui/logo';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { StrapiImage } from '../strapi-image';
// import { data } from "@/app/(home)/page";
import { getHomePageData } from '@/data/loaders';

interface ImageHero {
  url: string;
  alternativeText?: string;
}

interface Slide {
  title: string;
  description: string;
  contentText?: string;
  contentButton?: string;
  image: ImageHero;
  imageSmall: ImageHero;
}

export interface HeroLayout {
  start: {
    mobile: TypeLines;
    tablet: TypeLines;
    desktop: TypeLines;
  };
  end: {
    mobile: TypeLines;
    tablet: TypeLines;
    desktop: TypeLines;
  };
}

export const heroLayout: HeroLayout = {
  start: {
    mobile: '1',
    tablet: '1',
    desktop: '1',
  },
  end: {
    mobile: '13',
    tablet: '13',
    desktop: '9',
  },
};

interface HeroSectionProps {
  data: Slide[];
  className?: string;
}

export async function HeroSection({ data, className }: HeroSectionProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  const strapiData = await getHomePageData();
  const { blocks } = strapiData.data;
  const slider = blocks[0].slide;


  return (
    <div
      className={cn(
        `relative flex row-span-1 -mx-5 -mb-7 lg:mb-0 bg-gradient-to-b from-[#FF1F70] from-0% via-[#FF3D9A] via-51% to-[#FFC6AD] to-83% lg:mx-0 lg:rounded-2xl overflow-hidden col-start-1 col-start-${heroLayout.start.mobile} sm:col-start-${heroLayout.start.tablet} lg:col-start-${heroLayout.start.desktop} col-end-${heroLayout.end.mobile} sm:col-end-${heroLayout.end.tablet} lg:col-end-${heroLayout.end.desktop}`,
        className
      )}
    >
      <Carousel
        plugins={[plugin.current]}
        opts={{
          loop: true,
        }}
        className='w-full h-full'
      >
        <CarouselContent className='h-full'>
          {data.map((item) => (
            <CarouselItem className='h-full' key={item.title}>
              <StrapiImage
                className='absolute bottom-0 w-screen -z-10 hidden sm:block'
                alt={item.image.alternativeText || ''}
                style={{
                  objectFit: 'cover',
                }}
                width={741}
                height={330}
                src={item.image.url}
              />
              {item.imageSmall && (
                <StrapiImage
                  className='absolute bottom-0 w-screen sm:hidden -z-10'
                  alt={item.image.alternativeText || ''}
                  style={{
                    objectFit: 'cover',
                  }}
                  width={360}
                  height={414}
                  src={item.imageSmall.url}
                />
              )}
              <Card className='relative flex flex-col items-start h-[414px] lg:h-full bg-transparent border-none border-r-0 w-screen rounded-none pl-4'>
                <CardHeader className='mx-4 p-0 mt-8 mb-9 space-y-0 md:mt-14 lg:mt-10 lg:mx-20'>
                  <CardTitle className='text-2xl font-extrabold text-white leading-7 uppercase'>
                    {item.title}
                  </CardTitle>
                  <CardDescription className='text-xl font-normal text-white'>
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className='mx-4 p-0 lg:mx-20'>
                  {item.contentText && (
                    <p className='cursor-default text-3xl font-normal text-white'>
                      {item.contentText}
                    </p>
                  )}
                  {item.contentButton && (
                    <Button variant='outline'>{item.contentButton}</Button>
                  )}
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselDots className='absolute bottom-32 left-8 lg:bottom-5 lg:left-[99px]' />
      </Carousel>
      <Logo className='absolute bottom-20 left-0 p-0 mx-8 sm:hidden' />
    </div>
  );
}
