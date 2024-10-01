import { CustomSection } from "@/components/custom-section";
import { BigColorBannerProps } from "@/components/main-page/big-color-banner";
import { BigRectLinkProps } from "@/components/main-page/big-rect-link";
import { FormsSection } from "@/components/main-page/forms-section";
import { HeroSection } from "@/components/main-page/hero-section";
import { MainServices } from "@/components/main-page/main-services";
import { Map } from "@/components/main-page/map";
import { RectangleLinksSection } from "@/components/main-page/rectangle-links-section";
import { SquareLinksSection } from "@/components/main-page/square-links-section";
import { TextLinks } from "@/components/main-page/text-links";
import { TopRounder } from "@/components/top-rounder";
import { TypeLines } from "@/lib/definitions";

interface Image {
  src: string;
  srcSmall?: string;
  alt?: string;
}

interface Slide {
  title: string;
  description: string;
  contentText: string;
  contentButton: string;
  image: Image;
}

export interface HeroData {
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
  slides: Slide[];
}

export const heroData: HeroData = {
  start: {
    mobile: "1",
    tablet: "1",
    desktop: "1",
  },
  end: {
    mobile: "13",
    tablet: "13",
    desktop: "9",
  },
  slides: [
    {
      title: "Скоростной интернет",
      description: "в частный дом",
      contentText: "900 ₽/мес",
      contentButton: "",
      image: {
        src: "/images/hero-bg-0.svg",
        srcSmall: "/images/hero-bg-0-sm.svg",
        alt: "Скоростной интернет",
      },
    },
    {
      title: "Поддержка. Общение.",
      description: "всегда на связи",
      contentText: "",
      contentButton: "Подробности",
      image: {
        src: "/images/hero-bg-0.svg",
        srcSmall: "/images/hero-bg-0-sm.svg",
        alt: "Скоростной интернет",
      },
    },
    {
      title: "Информация",
      description: "на расстоянии клика",
      contentText: "",
      contentButton: "Читать",
      image: {
        src: "/images/hero-bg-0.svg",
        srcSmall: "/images/hero-bg-0-sm.svg",
        alt: "Скоростной интернет",
      },
    },
    {
      title: "Телевидение",
      description: "по доступной цене",
      contentText: "",
      contentButton: "Заказать",
      image: {
        src: "/images/hero-bg-0.svg",
        srcSmall: "/images/hero-bg-0-sm.svg",
        alt: "Скоростной интернет",
      },
    },
    {
      title: "Сначала пробуй",
      description: "потом плати",
      contentText: "",
      contentButton: "Оставить заявку",
      image: {
        src: "/images/hero-bg-0.svg",
        srcSmall: "/images/hero-bg-0-sm.svg",
        alt: "Скоростной интернет",
      },
    },
    {
      title: "Дарим",
      description: "1000 рублей",
      contentText: "",
      contentButton: "Подробнее",
      image: {
        src: "/images/hero-bg-0.svg",
        srcSmall: "/images/hero-bg-0-sm.svg",
        alt: "Скоростной интернет",
      },
    },
  ],
};

const bigColorBannerData: BigColorBannerProps = {
  title: "Чем больше услуг, тем лучше цена!",
  description: "Подключите интернет и Кубтел.ТВ, и платите меньше!",
  start: {
    mobile: "1",
    tablet: "1",
    desktop: "1",
  },
  end: {
    mobile: "13",
    tablet: "7",
    desktop: "9",
  },
  image: {
    src: "/images/icons/arrow-to-right.svg",
    width: 9,
    height: 17,
  },
};

const bigRectLinkData: BigRectLinkProps = {
  url: "/legal",
  title: "Юридическим лицам",
  start: {
    mobile: "1",
    tablet: "1",
    desktop: "9",
  },
  end: {
    mobile: "13",
    tablet: "7",
    desktop: "13",
  },
  image: {
    src: "/images/icons/briefcase.svg",
    alt: "Юридическим лицам",
    width: 40,
    height: 38,
  },
};

export default async function Home() {
  return (
    <>
      <CustomSection>
        <HeroSection heroData={heroData} />
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
