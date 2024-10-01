import React from "react";
import { FooterSocialSection } from "./footer-social-section";
import { FooterLinksBlocks } from "./footer-links-blocks";
import FooterAgreement from "./footer-agreement";
import { CustomSection } from "../custom-section";

export function Footer() {
  return (
    <footer className="pb-[70px] sm:pb-0">
      <CustomSection>
        <FooterLinksBlocks />
        <FooterSocialSection />
        <FooterAgreement />
      </CustomSection>
    </footer>
  );
}
