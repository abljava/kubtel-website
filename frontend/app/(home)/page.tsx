import { CustomSection } from '@/components/custom-section';
import { BigColorBannerProps } from '@/components/main-page/big-color-banner';
import { BigRectLinkProps } from '@/components/main-page/big-rect-link';
import { FormsSection } from '@/components/main-page/forms-section';
import { HeroSection } from '@/components/main-page/hero-section';
import { MainServices } from '@/components/main-page/main-services';
import { Map } from '@/components/main-page/map';
import { RectangleLinksSection } from '@/components/main-page/rectangle-links-section';
import { SquareLinksSection } from '@/components/main-page/square-links-section';
import { TextLinks } from '@/components/main-page/text-links';
import { TopRounder } from '@/components/top-rounder';
import { getHomePageData } from '@/data/loaders';

// interface Image {
//   url: string;
//   alt?: string;
// }

// interface Slide {
//   title: string;
//   description: string;
//   contentText?: string;
//   contentButton?: string;
//   image: Image;
//   imageSmall: Image;
// }

// export interface HeroLayout {
//   start: {
//     mobile: TypeLines;
//     tablet: TypeLines;
//     desktop: TypeLines;
//   };
//   end: {
//     mobile: TypeLines;
//     tablet: TypeLines;
//     desktop: TypeLines;
//   };
// }

// export const heroLayout: HeroLayout = {
//   start: {
//     mobile: '1',
//     tablet: '1',
//     desktop: '1',
//   },
//   end: {
//     mobile: '13',
//     tablet: '13',
//     desktop: '9',
//   },
// };

const bigColorBannerData: BigColorBannerProps = {
  title: 'Чем больше услуг, тем лучше цена!',
  description: 'Подключите интернет и Кубтел.ТВ, и платите меньше!',
  start: {
    mobile: '1',
    tablet: '1',
    desktop: '1',
  },
  end: {
    mobile: '13',
    tablet: '7',
    desktop: '9',
  },
  image: {
    src: '/images/icons/arrow-to-right.svg',
    width: 9,
    height: 17,
  },
};

const bigRectLinkData: BigRectLinkProps = {
  url: '/legal',
  title: 'Юридическим лицам',
  start: {
    mobile: '1',
    tablet: '1',
    desktop: '9',
  },
  end: {
    mobile: '13',
    tablet: '7',
    desktop: '13',
  },
  image: {
    src: '/images/icons/briefcase.svg',
    alt: 'Юридическим лицам',
    width: 40,
    height: 38,
  },
};

export default async function Home() {
  const strapiData = await getHomePageData();
  const { blocks } = strapiData.data;
  const slider = blocks[0].slide;

  return (
    <>
      <CustomSection>
        <HeroSection heroData={slider} />
        <TopRounder />
        <MainServices />
        <FormsSection />
        <RectangleLinksSection
          bigColorBannerData={bigColorBannerData}
          bigRectLinkData={bigRectLinkData}
        />
        <TextLinks />
        <SquareLinksSection />
      </CustomSection>
      <Map />
    </>
  );
}
