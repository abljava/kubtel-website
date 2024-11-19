import React from "react";
import { BigColorBanner, BigColorBannerProps } from "./big-color-banner";
import { BigRectLink, BigRectLinkProps } from "./big-rect-link";

interface RectangleLinksSectionProps {
  bigColorBannerData?: BigColorBannerProps;
  bigRectLinkData?: BigRectLinkProps;
}

export function RectangleLinksSection({
  bigColorBannerData,
  bigRectLinkData,
}: RectangleLinksSectionProps) {
  return (
    <>
      {bigColorBannerData && (
        <BigColorBanner
          className="order-2 sm:col-span-6 lg:order-9"
          banner={bigColorBannerData}
        />
      )}
      {bigRectLinkData && <BigRectLink link={bigRectLinkData} />}
    </>
  );
}
