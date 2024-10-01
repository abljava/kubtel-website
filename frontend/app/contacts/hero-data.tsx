interface Image {
  src: string;
  srcSmall?: string;
  alt?: string;
}

export interface SimpleHeroDataProps {
  title: string;
  image: Image;
}

export const simpleHeroData: SimpleHeroDataProps = {
  title: 'Контакты',
  image: {
    src: '/images/image3.svg',
    srcSmall: '/images/hero-bg-contacts-sm.svg',
    alt: 'Контакты',
  },
};
