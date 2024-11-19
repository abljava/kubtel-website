import { CustomSection } from '@/components/custom-section';
import { Map } from '@/components/main-page/map';
import { SquareLinksSection } from '@/components/main-page/square-links-section';
import { TopRounder } from '@/components/top-rounder';
import { ContactsInfo } from './contacts-info';
import { BigRectLinkProps } from '@/components/main-page/big-rect-link';
import { BigRectLink } from '@/components/main-page/big-rect-link';
import { HeroSectionStatic } from '@/components/hero/hero-section-static';
import { getContactsPageData } from '@/data/loaders';

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

export default async function Contacts() {
  const strapiData = await getContactsPageData();
  const { blocks } = strapiData.data;

  return (
    <>
      <CustomSection>
        <HeroSectionStatic data={blocks[0]} />
        <TopRounder />
      </CustomSection>
      <Map />
      <CustomSection className='gap-0'>
        <ContactsInfo data={blocks[1]} />
        <BigRectLink link={bigRectLinkData} />
        <SquareLinksSection />
      </CustomSection>
    </>
  );
}
