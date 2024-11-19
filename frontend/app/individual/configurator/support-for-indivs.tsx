import { BlockWrapper } from "@/components/configurators/block-wrapper";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface SupportLink {
  href: string;
  iconSrc: string;
  title: string;
}

const supportLinks: SupportLink[] = [
  {
    href: "/help",
    iconSrc: "/images/icons/question-mark.svg",
    title: "Часто задаваемые вопросы",
  },
  {
    href: "/docs",
    iconSrc: "/images/icons/exclaim-mark.svg",
    title: "Документы для заключения договора",
  },
  {
    href: "/help/call",
    iconSrc: "/images/icons/ellipsis-mark.svg",
    title: "Задать вопрос",
  },
];

export function SupportForIndivs({ className }: { className?: string }) {
  return (
    <BlockWrapper
      className={cn(
        "col-span-12 lg:col-span-4 lg:h-[322px]",
        className
      )}
      title={"Помощь и поддержка"}
    >
      <div className="flex flex-col gap-3 sm:flex-row-reverse lg:flex-col">
        <ul className="flex flex-col gap-3 sm:w-1/2 lg:w-full">
          {supportLinks.map((link) => (
            <SupportLink
              key={link.title}
              href={link.href}
              iconSrc={link.iconSrc}
              title={link.title}
            />
          ))}
        </ul>
        <Separator
          className="hidden sm:block lg:hidden"
          orientation="vertical"
        />
        <Separator className="sm:hidden lg:block" orientation="horizontal" />
        <p className="sm:w-1/2 lg:w-full">
          У вас остались вопросы или что-то пошло не так? Звоните: 
          <b className="text-nowrap">8 800 222-17-30</b>
        </p>
      </div>
    </BlockWrapper>
  );
}

function SupportLink({ href, iconSrc, title }: SupportLink) {
  return (
    <li>
      <Link className="flex gap-2 items-center" href={href}>
        <Image
          className="w-12 h-12"
          src={iconSrc}
          alt=""
          width={47}
          height={47}
        />
        <p className="font-medium">{title}</p>
      </Link>
    </li>
  );
}
