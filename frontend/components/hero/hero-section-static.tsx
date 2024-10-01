'use client';

import React from 'react';

import Image from 'next/image';
import { Logo } from '@/components/ui/logo';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { H1 } from '@/components/text/text';
import { SimpleHeroDataProps } from './hero-data';
import { getStrapiData } from '@/lib/strapi-data';

interface HeroSectionStaticProps {
  heroImage: any;
  title?: string;
  className?: string;
}



export function HeroSectionStatic({ heroImage, title, className }: HeroSectionStaticProps) {
  return (
    <div
      className={cn(
        `relative flex flex-col row-span-1 -mx-5 -mb-7 lg:mb-0 bg-gradient-to-b from-[#FF1F70] from-0% via-[#FF3D9A] via-51% to-[#FFC6AD] to-83% lg:mx-0 lg:rounded-2xl overflow-hidden col-start-1 col-start-1 sm:col-start-1 lg:col-start-1 col-end-13 sm:col-end-13 lg:col-end-13`,
        className
      )}
    >
      <div className='relative flex flex-col h-[414px] mx-6 mt-8 justify-between'>
        <H1 className='relative z-10 ml-2'>{title}</H1>
        <div className='absolute w-full h-full  inset-0 p-5 '>
          <Image
            src={heroImage}
            alt='hero'
            style={{
              objectFit: 'cover',
            }}
            className='w-full h-full mix-blend-multiply sm:object-contain'
            width={283}
            height={283}
          />
        </div>
        <Button
          variant='kubtel'
          size='md'
          className='relative mb-40 w-full md:w-60'
        >
          Получить консультацию
          <Image
            className='ml-2'
            src='/images/icons/arrow-to-right-3.svg'
            alt='arrow-icon'
            width={24}
            height={24}
          />
        </Button>
      </div>

      <Logo className='absolute bottom-20 left-0 p-0 mx-6 sm:hidden' />
    </div>
  );
}
