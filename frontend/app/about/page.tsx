// 'use client';

import qs from 'qs';

import { Button } from '@/components/ui/button';
import { simpleHeroData } from '@/components/hero/hero-data';
import { CustomSection } from '@/components/custom-section';
import { TopRounder } from '@/components/top-rounder';
import { BigRectLink } from '@/components/main-page/big-rect-link';
import { SquareLinksSection } from '@/components/main-page/square-links-section';
import { H2 } from '@/components/text/text';
import { getStrapiData } from '@/lib/strapi-data';
import { HeroSectionStatic } from '@/components/hero/hero-section-static';

const aboutPageQuery = qs.stringify({
  populate: {
    blocks: {
      // asking to populate the blocks dynamic zone
      on: {
        // using a detailed population strategy to explicitly define what you want
        'layout.hero-section': {
          populate: {
            image: {
              fields: ['url', 'alternativeText'],
            },
            link: {
              populate: true,
            },
          },
        },
      },
    },
  },
});

export default async function AboutPage() {
  const strapiData = await getStrapiData('/api/about', aboutPageQuery);
  // console.dir(strapiData, {depth: null});

  const { heading, text_1, text_2, text_3, text_4, blocks } = strapiData.data;

  return (
    <>
      <section className='w-full max-w-[1280px] bg-[#EEF6FF] px-5 mx-auto lg:px-9 xl:px-20'>
        <HeroSectionStatic data={blocks[0]} />
        <TopRounder />
        <div className='mt-14'>
          <H2 className='-my-6 px-6 text-foreground'>{heading}</H2>
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
