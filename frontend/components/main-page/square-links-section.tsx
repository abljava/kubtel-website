import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { TypeLines } from "@/lib/definitions";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type TypeLink = {
  title: string;
  description: string;
  url: string;
  icon: string;
};

type TypeSquareLinks = {
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
  links: TypeLink[];
};

const squareLinks: TypeSquareLinks = {
  start: {
    mobile: "1",
    tablet: "1",
    desktop: "5",
  },
  end: {
    mobile: "13",
    tablet: "13",
    desktop: "13",
  },
  links: [
    {
      title: "Оплатить",
      description: "Оплатить услуги компании",
      url: "https://pay.kubtel.ru/",
      icon: "/images/icons/purse.svg",
    },
    {
      title: "Управлять",
      description: "Подключение и отключение услуг",
      url: "/order",
      icon: "/images/icons/menu.svg",
    },
    {
      title: "Изучать",
      description: "Войти в личный кабинет",
      url: "https://my.kubtel.ru/login",
      icon: "/images/icons/checkbox-rounded.svg",
    },
    {
      title: "Деловым людям",
      description: "Услуги бизнесу",
      url: "/legal",
      icon: "/images/icons/briefcase.svg",
    },
  ],
};

export function SquareLinksSection({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <ScrollArea
      className={cn(
        `w-auto whitespace-nowrap flex -mx-5 lg:-mx-9 col-start-${squareLinks.start.mobile} sm:col-start-${squareLinks.start.tablet} lg:col-start-${squareLinks.start.desktop} col-end-${squareLinks.end.mobile} sm:col-end-${squareLinks.end.tablet} lg:col-end-${squareLinks.end.desktop}`,
        className
      )}
    >
      <ul className="flex w-max gap-5 py-8 lg:ml-auto">
        {squareLinks.links.map((link) => (
          <li
            key={link.title}
            className="first-of-type:ml-5 last-of-type:mr-5 lg:first-of-type:ml-9 lg:last-of-type:mr-9"
          >
            <LinkSquare link={link} />
          </li>
        ))}
      </ul>
      <ScrollBar className="hidden" orientation="horizontal" />
    </ScrollArea>
  );
}

function LinkSquare({ link }: { link: TypeLink }) {
  return (
    <Link
      href={link.url}
      className="group flex flex-col w-32 h-[138px] p-4  from-0% shadow-basic border-none rounded-xl  transition-all duration-300 bg-gradient-to-br to-grayGradient-start via-grayGradient-end from-grayGradient-start bg-[length:200%_200%] bg-pos-0 hover:bg-pos-100"
    >
      <div className="relative w-[30px] h-[25px] mb-3 group-hover:scale-105 transition-all duration-300">
        <Image
          className=""
          src={link.icon}
          alt={link.title}
          fill={true}
          style={{
            objectFit: "contain",
          }}
        />
      </div>
      <h4 className="text-sm font-bold w-full text-wrap mb-1">{link.title}</h4>
      <p className="text-[11px] font-light text-[#9D9D9D] w-full text-wrap">
        {link.description}
      </p>
    </Link>
  );
}
