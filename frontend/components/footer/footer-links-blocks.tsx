import React from "react";
import { FooterLinksBlock, TypeFooterLinksBlock } from "./footer-links-block";

const individualLinks: TypeFooterLinksBlock = {
  title: "Частным лицам",
  links: [
    {
      title: "Стать клиентом «Кубтел»",
      url: "/individual/configurator",
    },
    {
      title: "Интернет",
      url: "/",
    },
    {
      title: "Всё в одном",
      url: "/",
    },
    {
      title: "Финансы и оплата",
      url: "/",
    },
    {
      title: "Помощь",
      url: "/",
    },
    {
      title: "Офисы на карте",
      url: "/",
    },
    {
      title: "Личный кабинет",
      url: "/",
    },
  ],
};

const businessLinks: TypeFooterLinksBlock = {
  title: "Бизнесу",
  links: [
    {
      title: "Интернет",
      url: "/",
    },
    {
      title: "Телефония",
      url: "/",
    },
    {
      title: "Виртуальный сервер",
      url: "/",
    },
    {
      title: "Размещение оборудования",
      url: "/",
    },
    {
      title: "Аренда виртуального рабочего места",
      url: "/",
    },
  ],
};

const aboutLinks: TypeFooterLinksBlock = {
  title: "О компании",
  links: [
    {
      title: "Общая информация",
      url: "/",
    },
    {
      title: "Контакты",
      url: "/contacts",
    },
    {
      title: "Новости",
      url: "/",
    },
    {
      title: "О защите персональных данных",
      url: "/",
    },
  ],
};

export function FooterLinksBlocks() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7 pt-7 col-start-1 col-end-13">
      <FooterLinksBlock block={individualLinks} />
      <FooterLinksBlock block={businessLinks} />
      <FooterLinksBlock block={aboutLinks} />
    </div>
  );
}
