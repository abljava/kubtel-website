import { CustomSection } from '../custom-section';
import { HeaderNavigation } from './header-navigation';
import { HeaderCart } from './header-cart';
import { SearchBar } from './search-bar';
import { LocationSelector } from './location-selector';
import { HeaderLogo } from './header-logo';

export type Logo = {
  id: number;
  url: string;
  text: string | null;
  isExternal: boolean;
  icon: {
    alternativeText?: string;
    url: string;
  };
};

export type OrderBtn = {
  id: number;
  url: string;
  text: string;
  isExternal: boolean;
  icon: {
    alternativeText?: string;
    url: string;
  };
};

export type NavLink = {
  id: number;
  url: string;
  text: string;
  isExternal: boolean;
};

export type HeaderProps = {
  id: number;
  logo: Logo;
  orderBtn: OrderBtn;
  navLink: NavLink[];
};

export function Header({data}: { data: HeaderProps }) {
  const { orderBtn, navLink, logo } = data;

  return (
    <header className='hidden sm:flex h-20'>
      <CustomSection className='items-center'>
        <HeaderLogo data={logo} className='col-start-1 col-end-3' />
        <HeaderNavigation data={navLink} className='w-full col-start-3 col-end-9 lg:col-start-3 lg:col-end-7' />
        <HeaderCart data={orderBtn} className='col-start-10 col-end-11 lg:col-start-8 lg:col-end-9' />
        <SearchBar className='col-start-11 col-end-12 md:col-start-11 md:col-end-12 lg:col-start-9 lg:col-end-11' />
        <LocationSelector className='col-start-12 lg:col-start-11 col-end-13' />
      </CustomSection>
    </header>
  );
}
