import qs from 'qs';
import { CustomSection } from '@/components/custom-section';
import { HeroSectionStatic } from '@/components/hero/hero-section-static';
import { TopRounder } from '@/components/top-rounder';
import { DevicesList } from '@/components/devices-list';
import { getDevicesPageData } from '@/data/loaders';

export default async function Devices() {
  const strapiData = await getDevicesPageData();
  const { blocks } = strapiData.data;

  return (
    <>
      <CustomSection>
        <HeroSectionStatic data={blocks[0]} />
        <TopRounder />
      </CustomSection>
      <CustomSection className='gap-0'>
        <DevicesList data={blocks[1].devices} />
      </CustomSection>
    </>
  );
}
