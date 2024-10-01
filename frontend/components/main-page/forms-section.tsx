"use client";

import React from "react";
import { CustomForm, TypeFormData } from "../forms/custom-form";
import { FieldValues } from "react-hook-form";
import { isValidPhoneNumber } from "react-phone-number-input";
import { z } from "zod";

const callbackFormData: TypeFormData = {
  formSchema: z.object({
    phone: z
      .string()
      .trim()
      .min(1, { message: "Обязательное поле" })
      .refine(isValidPhoneNumber, { message: "Введите корректный номер" }),
  }),
  onSubmit: (values: FieldValues) =>
    console.log("callback form values", values),
  title: "Позвонишь — подключим!",
  description:
    "Оставьте свой номер и вам позвонит наш оператор и подключит вас к интернету!",
  start: {
    mobile: "1",
    tablet: "7",
    desktop: "9",
  },
  end: {
    mobile: "13",
    tablet: "13",
    desktop: "13",
  },
  fields: [
    {
      type: "tel",
      name: "phone",
      placeholder: "Введите телефон",
      label: "Введите телефон",
      defaultValue: "+7",
      start: {
        mobile: "1",
        tablet: "1",
        desktop: "1",
      },
      end: {
        mobile: "13",
        tablet: "13",
        desktop: "13",
      },
    },
  ],
  button: {
    text: "Отправить заявку",
    start: {
      mobile: "1",
      tablet: "1",
      desktop: "1",
    },
    end: {
      mobile: "13",
      tablet: "13",
      desktop: "13",
    },
  },
  agreement:
    "Нажимая на кнопку «Отправить», я соглашаюсь с условиями и даю своё согласие на обработку и использование моих персональных данных",
};

const payFormData: TypeFormData = {
  formSchema: z.object({
    accountNumber: z
      .string()
      .trim()
      .min(1, { message: "Обязательное поле" })
      .refine((value) => /^[0-9\s]*$/.test(value), {
        message: "Номер счёта может содержать только цифры",
      }),
    amount: z
      .string()
      .trim()
      .min(1, { message: "Обязательное поле" })
      .refine((value) => /^[0-9\s₽]*$/.test(value.replace(/\D/g, "")), {
        message: "Введите число",
      }),
    paymentSystem: z.union([
      z.literal("sbp"),
      z.literal("card"),
      z.literal("sber"),
      z.literal("youKassa"),
    ]),
  }),
  onSubmit: (values: FieldValues) => console.log("payment form values", values),
  title: "Пополнение счёта",
  agreement:
    "Нажимая на кнопку «Оплатить», я соглашаюсь с условиями и даю своё согласие на обработку и использование моих персональных данных",
  start: {
    mobile: "1",
    tablet: "1",
    desktop: "1",
  },
  end: {
    mobile: "13",
    tablet: "7",
    desktop: "7",
  },
  button: {
    text: "Оплатить",
    start: {
      mobile: "1",
      tablet: "8",
      desktop: "8",
    },
    end: {
      mobile: "13",
      tablet: "13",
      desktop: "13",
    },
  },
  fields: [
    {
      type: "text",
      name: "accountNumber",
      placeholder: "Номер лицевого счёта",
      label: "Номер лицевого счёта",
      defaultValue: "",
      start: {
        mobile: "1",
        tablet: "1",
        desktop: "1",
      },
      end: {
        mobile: "13",
        tablet: "13",
        desktop: "13",
      },
    },
    {
      type: "text",
      name: "amount",
      placeholder: "Сумма, ₽ (от 100 до 10 000)",
      label: "Сумма, ₽ (от 100 до 10 000)",
      defaultValue: "",
      start: {
        mobile: "1",
        tablet: "1",
        desktop: "1",
      },
      end: {
        mobile: "13",
        tablet: "13",
        desktop: "13",
      },
    },
    {
      type: "select",
      name: "paymentSystem",
      placeholder: "Способ оплаты",
      label: "Способ оплаты",
      defaultValue: "sbp",
      start: {
        mobile: "1",
        tablet: "1",
        desktop: "1",
      },
      end: {
        mobile: "13",
        tablet: "8",
        desktop: "8",
      },
      selectOptions: [
        {
          value: "sbp",
          option: "СБП",
          icon: "/images/icons/payment-methods/sbp.svg",
        },
        {
          value: "card",
          option: "Банковская карта",
          icon: "/images/icons/payment-methods/card.svg",
        },
        {
          value: "sber",
          option: "Сбербанк",
          icon: "/images/icons/payment-methods/sber.svg",
        },
        {
          value: "youKassa",
          option: "ЮKassa",
          icon: "/images/icons/payment-methods/youkassa.svg",
        },
      ],
    },
  ],
};

const loginFormData: TypeFormData = {
  formSchema: z.object({
    accountNumber: z
      .string()
      .trim()
      .min(1, { message: "Обязательное поле" })
      .refine((value) => /^[0-9\s]*$/.test(value), {
        message: "Номер счёта может содержать только цифры",
      }),
    password: z.string().trim().min(1, { message: "Обязательное поле" }),
  }),
  onSubmit: (values: FieldValues) => console.log("login form values", values),
  title: "Личный кабинет Кубтел",
  description:
    "Любой абонент Кубтела имеет доступ к своему личному кабинету. Войдите, чтобы получить доступ к вашим персональным данным.",
  start: {
    mobile: "1",
    tablet: "7",
    desktop: "7",
  },
  end: {
    mobile: "13",
    tablet: "13",
    desktop: "13",
  },
  button: {
    text: "Войти",
    start: {
      mobile: "1",
      tablet: "1",
      desktop: "1",
    },
    end: {
      mobile: "13",
      tablet: "13",
      desktop: "13",
    },
  },
  fields: [
    {
      type: "text",
      name: "accountNumber",
      placeholder: "Номер лицевого счёта",
      label: "Номер лицевого счёта",
      defaultValue: "",
      start: {
        mobile: "1",
        tablet: "1",
        desktop: "1",
      },
      end: {
        mobile: "13",
        tablet: "7",
        desktop: "7",
      },
    },
    {
      type: "password",
      name: "password",
      placeholder: "Пароль",
      label: "Пароль",
      defaultValue: "",
      start: {
        mobile: "1",
        tablet: "7",
        desktop: "7",
      },
      end: {
        mobile: "13",
        tablet: "13",
        desktop: "13",
      },
    },
  ],
};

export function FormsSection() {
  return (
    <>
      <CustomForm formData={payFormData} />
      <CustomForm formData={loginFormData} />
      <CustomForm formData={callbackFormData} />
    </>
  );
}
