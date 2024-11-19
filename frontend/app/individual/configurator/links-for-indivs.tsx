import { BlockWrapper } from "@/components/configurators/block-wrapper";
import { VividLink } from "@/components/vivid-link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export function LinksForIndivs({ className }: { className?: string }) {
  return (
    <BlockWrapper
      className={cn("lg:col-span-5 lg:h-fit", className)}
      title={"Полезные ссылки"}
    >
      <ul className="flex flex-col gap-2">
        <li>
          <VividLink href={"/individual/termsofuse"}>
            Условия оказания услуг связи (Пользовательское соглашение)
          </VividLink>
        </li>
        <li className="flex gap-3">
          <Image
            className="w-7 h-7"
            src="/images/icons/download.svg"
            alt=""
            width={24}
            height={24}
          />
          <a href="/docs/terms.doc" download="Условия оказания услуг связи.doc">
            Скачать условия оказания услуг связи (Пользовательское соглашение)
          </a>
        </li>
        <li className="flex gap-3">
          <Image
            className="w-7 h-7"
            src="/images/icons/download.svg"
            alt=""
            width={24}
            height={24}
          />
          <a
            href="/docs/Kubtel_dogovor-blank.pdf"
            download="Договор об оказании услуг связи.pdf"
          >
            Скачать образец договора на оказание услуг связи
          </a>
        </li>
      </ul>
    </BlockWrapper>
  );
}
