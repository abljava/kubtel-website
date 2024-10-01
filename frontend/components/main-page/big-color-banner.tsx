import { TypeLines } from "@/lib/definitions";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface BigColorBannerProps {
  url?: string;
  title: string;
  description: string;
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
  image: {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
  };
}

export function BigColorBanner({
  banner,
  className,
}: {
  banner: BigColorBannerProps;
  className?: string;
}) {
  if (banner.url) {
    return (
      <Link
        href={banner.url}
        className={cn(
          `flex flex-col lg:flex-row lg:gap-5 px-4 py-5 w-full h-fit bg-gradient-to-br`,
          `from-magentaGradient-start to-magentaGradient-end border-none rounded-2xl`,
          `col-start-${banner.start.mobile} sm:col-start-${banner.start.tablet} lg:col-start-${banner.start.desktop} col-end-${banner.end.mobile}`,
          `sm:col-end-${banner.end.tablet} lg:col-end-${banner.end.desktop}`,
          className
        )}
      >
        <div className="flex justify-between items-start">
          <h3 className="text-sm font-bold text-[#FFE3B8] w-1/2 text-wrap mb-3 md:text-base md:w-2/3 lg:text-2xl lg:font-extrabold lg:w-full lg:mb-0">
            {banner.title}
          </h3>
          <div className={`relative lg:hidden w-[9px] h-[17px]`}>
            <Image
              src={banner.image.src}
              alt={banner.image.alt || ""}
              fill={true}
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
        <p className="text-xs text-white font-medium text-wrap w-2/3 lg:w-full lg:text-lg lg:font-medium">
          {banner.description}
        </p>
      </Link>
    );
  }
  return (
    <div
      className={`flex flex-col lg:flex-row lg:gap-5 px-4 py-5 lg:py-6 lg:px-6 w-full h-fit bg-gradient-to-br from-magentaGradient-start to-magentaGradient-end border-none rounded-2xl col-start-${banner.start.mobile} sm:col-start-${banner.start.tablet} lg:col-start-${banner.start.desktop} col-end-${banner.end.mobile} sm:col-end-${banner.end.tablet} lg:col-end-${banner.end.desktop}`}
    >
      <div className="flex justify-between items-start">
        <h3 className="text-sm font-bold text-[#FFE3B8] w-1/2 text-wrap mb-3 md:text-base md:w-2/3 lg:text-2xl lg:font-extrabold lg:w-full lg:mb-0">
          {banner.title}
        </h3>
        <div className={`relative lg:hidden w-[9px] h-[17px]`}>
          <Image
            src={banner.image.src}
            alt={banner.image.alt || ""}
            fill={true}
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      </div>
      <p className="text-xs text-white font-medium text-wrap w-2/3 lg:w-full lg:text-lg lg:font-medium">
        {banner.description}
      </p>
    </div>
  );
}
