import {
  HomeIcon,
  PersonIcon,
  SettingsIcon,
  ShoppingCartIcon,
  StarIcon,
} from "../icons";
import { BottomMenuLink } from "./bottom-menu-link";
import { JSXElementConstructor, ReactElement } from "react";

export type TypeLink = {
  title: string;
  icon: ReactElement<any, string | JSXElementConstructor<any>>;
  iconActive: ReactElement<any, string | JSXElementConstructor<any>>;
  url: string;
};

const links: TypeLink[] = [
  {
    title: "Главная",
    icon: <HomeIcon />,
    iconActive: <HomeIcon isActive={true} />,
    url: "/",
  },
  {
    title: "Услуги",
    icon: <SettingsIcon />,
    iconActive: <SettingsIcon isActive={true} />,
    url: "/services",
  },
  {
    title: "Корзина",
    icon: <ShoppingCartIcon />,
    iconActive: <ShoppingCartIcon />,
    url: "/cart",
  },
  {
    title: "Помощь",
    icon: <StarIcon />,
    iconActive: <StarIcon isActive={true} />,
    url: "/help",
  },
  {
    title: "Вход",
    icon: <PersonIcon />,
    iconActive: <PersonIcon isActive={true} />,
    url: "https://my.kubtel.ru/login",
  },
];

export function BottomMenu() {
  return (
    <div className="sm:hidden fixed bottom-0 flex items-center w-full h-[70px] bg-white px-2">
      <nav className="w-full mt-[-32px]">
        <ul className="flex flex-row justify-between items-end w-full">
          {links.map((link) => (
            <BottomMenuLink key={link.title} link={link} />
          ))}
        </ul>
      </nav>
    </div>
  );
}
