// 'use client';

import { Button } from '@/components/ui/button';
import { simpleHeroData } from '@/components/hero/hero-data';
import { CustomSection } from '@/components/custom-section';
import { TopRounder } from '@/components/top-rounder';
import { BigRectLink } from '@/components/main-page/big-rect-link';
import { SquareLinksSection } from '@/components/main-page/square-links-section';
import { H2 } from '@/components/text/text';
import { getAboutPageData } from '@/data/loaders';
import { HeroSectionStatic } from '@/components/hero/hero-section-static';


export default async function AboutPage() {
  const strapiData = await getAboutPageData();
  
  const { title, text_1, text_2, text_3, text_4, blocks } = strapiData.data;

  return (
    <>
      <section className='w-full max-w-[1280px] bg-[#EEF6FF] px-5 mx-auto lg:px-9 xl:px-20'>
        <HeroSectionStatic data={blocks[0]} />
        <TopRounder />
        <div className='mt-14'>
          <H2 className='-my-6 px-6 text-foreground'>{title}</H2>
          <div className=' bg-white rounded-lg px-6 py-9 text-xs text-foreground'>
            <p className='text-textGray italic mb-4'>{text_1}</p>
            <p className='text-foreground mb-4'>{text_2}</p>
            <p className='text-foreground mb-4'>{text_3}</p>
            <p className='text-foreground'>{text_4}</p>
          </div>
        </div>
      </section>
      <CustomSection className='gap-0'>
        {/* <BigRectLink link={bigRectLinkData} /> */}
        <SquareLinksSection />
      </CustomSection>
    </>
  );
}
