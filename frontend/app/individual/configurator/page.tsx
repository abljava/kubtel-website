import { CustomSection } from "@/components/custom-section";
import { HeroSection } from "@/components/main-page/hero-section";
import { heroData } from "../../(home)/page";
import { TopRounder } from "@/components/top-rounder";
import { RectangleLinksSection } from "@/components/main-page/rectangle-links-section";
import { BigColorBannerProps } from "@/components/main-page/big-color-banner";
import { IndivConfig } from "./indiv-config";
import { LinksForIndivs } from "./links-for-indivs";
import { SupportForIndivs } from "./support-for-indivs";

const bigColorBannerData: BigColorBannerProps = {
  url: "/order",
  title: "Конфигуратор услуг",
  description: "Подобрать решение!",
  start: {
    mobile: "1",
    tablet: "1",
    desktop: "8",
  },
  end: {
    mobile: "13",
    tablet: "7",
    desktop: "13",
  },
  image: {
    src: "/images/icons/arrow-to-right.svg",
    width: 9,
    height: 17,
  },
};

export default function IndividualPage() {
  return (
    <CustomSection>
      <HeroSection className="order-0" heroData={heroData} />
      <TopRounder />
      <RectangleLinksSection bigColorBannerData={bigColorBannerData} />
      <IndivConfig />
      <LinksForIndivs className="order-4 lg:order-7" />
      <SupportForIndivs className="order-4 lg:order-1" />
    </CustomSection>
  );
}
