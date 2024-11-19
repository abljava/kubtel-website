import React from "react";
import { cn } from "@/lib/utils";
import {
  Form,
  FormAgreement,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormTitle,
} from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { TypeLines } from "@/lib/definitions";
import { PhoneInput } from "../ui/phone-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMaskito } from "@maskito/react";
import amountOptions from "@/lib/masks/amount-mask";
import accountOptions from "@/lib/masks/account-number-mask";

export type TypeFormData = {
  formSchema?: any;
  onSubmit: SubmitHandler<FieldValues>;
  title?: string;
  description?: string;
  agreement?: string;
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
  button: {
    text: string;
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
  };
  fields: {
    type:
      | "text"
      | "password"
      | "tel"
      | "number"
      | "email"
      | "date"
      | "checkbox"
      | "radio"
      | "select";
    name: string;
    placeholder: string;
    label: string;
    defaultValue: string | number;
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
    selectOptions?: {
      value: string;
      option: string;
      icon?: string;
    }[];
  }[];
};

type TypeCustomFormProps = {
  formData: TypeFormData;
} & React.HTMLAttributes<HTMLFormElement>;

export function CustomForm({ formData, className }: TypeCustomFormProps) {
  const defaultValues: Record<string, string | number> = {};
  formData.fields.map((field) => {
    defaultValues[field.name] = field.defaultValue;
  });

  const form = useForm<z.infer<typeof formData.formSchema>>({
    resolver: zodResolver(formData.formSchema),
    defaultValues: defaultValues,
  });

  // Masks
  const accountInput = useMaskito({ options: accountOptions }); // for account number
  const amountInput = useMaskito({ options: amountOptions }); // for money amount

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(formData.onSubmit)}
        className={cn(
          `flex flex-col row-span-1 w-full h-fit gap-4 p-5 bg-gradient-to-br from-grayGradient-start to-grayGradient-end border-none shadow-basic rounded-2xl col-start-${formData.start.mobile} sm:col-start-${formData.start.tablet} lg:col-start-${formData.start.desktop} col-end-${formData.end.mobile} sm:col-end-${formData.end.tablet} lg:col-end-${formData.end.desktop}`,
          className
        )}
      >
        {formData.title && (
          <FormTitle className="col-span-12">{formData.title}</FormTitle>
        )}
        {formData.description && (
          <FormDescription>{formData.description}</FormDescription>
        )}
        <fieldset className="w-full grid grid-cols-12 gap-3">
          {formData.fields.map((item) => (
            <FormField
              key={item.name}
              control={form.control}
              name={item.name}
              render={({ field }) => (
                <FormItem
                  className={`relative flex flex-col col-start-${item.start.mobile} sm:col-start-${item.start.tablet} lg:col-start-${item.start.desktop} col-end-${item.end.mobile} sm:col-end-${item.end.tablet} lg:col-end-${item.end.desktop}`}
                >
                  {["text", "password"].includes(item.type) && (
                    <FormLabel
                      className={`absolute left-[12px] text-muted-foreground/80 transition-all truncate overflow-hidden w-3/4 ${
                        field.value
                          ? "opacity-80 top-[12px] text-xs"
                          : "opacity-1 top-[26px] text-sm"
                      }`}
                    >
                      {item.label}
                    </FormLabel>
                  )}
                  {["text", "password"].includes(item.type) && (
                    <>
                      <FormControl>
                        <Input
                          className="placeholder:opacity-0"
                          {...field}
                          ref={
                            item.name === "accountNumber"
                              ? accountInput
                              : item.name === "amount"
                              ? amountInput
                              : null
                          }
                          placeholder={item.placeholder}
                          type={item.type}
                          onInput={(e) => {
                            form.setValue(item.name, e.currentTarget.value);
                          }}
                        />
                      </FormControl>
                    </>
                  )}
                  {item.type === "tel" && (
                    <>
                      <FormControl>
                        <PhoneInput
                          className="h-14"
                          defaultCountry="RU"
                          placeholder={item.placeholder}
                          type={item.type}
                          {...field}
                        />
                      </FormControl>
                    </>
                  )}
                  {item.type === "select" && item.selectOptions && (
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={
                        typeof item.defaultValue === "string"
                          ? item.defaultValue
                          : ""
                      }
                    >
                      <FormControl>
                        <SelectTrigger className="h-[50px]">
                          <SelectValue placeholder={item.placeholder} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {item.selectOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            <div className="flex gap-2">
                              {option.icon && (
                                <div className="relative w-[24px] h-[22px]">
                                  <Image
                                    className="relative"
                                    src={option.icon}
                                    alt={option.value}
                                    fill={true}
                                    style={{
                                      objectFit: "contain",
                                    }}
                                  />
                                </div>
                              )}

                              <p>{option.option}</p>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button
            className={`w-full ml-auto col-start-${formData.button.start.mobile} sm:col-start-${formData.button.start.tablet} lg:col-start-${formData.button.start.desktop} col-end-${formData.button.end.mobile} sm:col-end-${formData.button.end.tablet} lg:col-end-${formData.button.end.desktop}`}
            variant="kubtel"
            size="lg"
          >
            {formData.button.text}
          </Button>
        </fieldset>
        {formData.agreement && (
          <FormAgreement className="col-span-12">
            {formData.agreement}
          </FormAgreement>
        )}
      </form>
    </Form>
  );
}
