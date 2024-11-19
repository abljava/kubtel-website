import React from 'react';
import { FooterSocialSection } from './footer-social-section';
import { FooterLinksBlocks } from './footer-links-blocks';
import { FooterAgreement } from './footer-agreement';
import { CustomSection } from '../custom-section';

export type FooterLink = {
  id: number;
  title: string;
  links: {
    id: number;
    url: string;
    text: string;
    isExternal: boolean;
    icon: string | null;
  }[];
};

export type FooterProps = {
  id: number;
  tel: string;
  agreement: string;
  footerLinks: FooterLink[];
};

export function Footer({ data }: { data: FooterProps }) {

  return (
    <footer className='pb-[70px] sm:pb-0'>
      <CustomSection>
        <FooterLinksBlocks data={data} />
        <FooterSocialSection />
        <FooterAgreement data={data} />
      </CustomSection>
    </footer>
  );
}
