// 'use client';

import { Button } from '@/components/ui/button';
import { simpleHeroData } from '@/components/hero/hero-data';
import { CustomSection } from '@/components/custom-section';
import { TopRounder } from '@/components/top-rounder';
import { BigRectLink } from '@/components/main-page/big-rect-link';
import { SquareLinksSection } from '@/components/main-page/square-links-section';
import { H2 } from '@/components/text/text';
import { getStrapiData } from '@/lib/strapi-data';
import { HeroSectionStatic } from '@/components/hero/hero-section-static';

export default async function AboutPage() {
  const strapiData = await getStrapiData('/api/about');
  const { data, heading, text_1, text_2, text_3, text_4, title, hero_image } = strapiData.data;

  return (
    <>
      <section className='w-full max-w-[1280px] bg-[#EEF6FF] px-5 mx-auto lg:px-9 xl:px-20'>
        <HeroSectionStatic heroImage={hero_image} title={title} />
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

// <main>
//   <section className='w-full mt-12 p-6'>
//     <div className='bg-gradient-to-b from-[#FF1F70] from-0% via-[#FF3D9A] via-51% to-[#FFC6AD] to-83%'>
//       <h1 className='mb-8'>{title}</h1>
//       <h3>{heading}</h3>
//       <p>{text}</p>
//       <Button
//         className='w-48'
//         variant='kubtel'
//         type='button'
//         // onClick={() => router.back()}
//       >
//         Получить консультацию
//       </Button>
//     </div>
//   </section>
// </main>
