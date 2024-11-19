import React from "react";
import { H3 } from "../text/text";
import SocialMediaLinks, { TypeSocialMedia } from "./social-media-links";
import {
  TelegramLogoIcon,
  VkLogoIcon,
  WhatsappLogoIcon,
  YouTubeLogoIcon,
} from "../icons";
import { getGlobalData } from '@/data/loaders';


const socialMediaLinks: TypeSocialMedia[] = [
  {
    icon: <VkLogoIcon />,
    url: "https://vk.com/kubtel",
  },
  {
    icon: <YouTubeLogoIcon />,
    url: "https://www.youtube.com/channel/UC8kUFDdm_5jRu2g4hx4uIFA",
  },
  {
    icon: <TelegramLogoIcon />,
    url: "https://t.me/kubantelecom",
  },
  {
    icon: <WhatsappLogoIcon />,
    url: "https://wa.me/79284201020",
  },
];

export async function FooterSocialSection() {
  const strapiData = await getGlobalData();
  const tel = strapiData.data.footer.tel

  return (
    <div className="flex flex-col gap-5 col-start-1 col-end-13">
      <SocialMediaLinks links={socialMediaLinks} />
      <H3>{tel}</H3>
    </div>
  );
}
