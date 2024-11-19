import React from 'react';
import { FooterLinksBlock } from './footer-links-block';
import { FooterProps } from './footer';

export function FooterLinksBlocks({ data }: { data: FooterProps }) {
  const individualLinks = data.footerLinks[0];
  const businessLinks = data.footerLinks[1];
  const aboutLinks = data.footerLinks[2];

  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-7 pt-7 col-start-1 col-end-13'>
      <FooterLinksBlock block={individualLinks} />
      <FooterLinksBlock block={businessLinks} />
      <FooterLinksBlock block={aboutLinks} />
    </div>
  );
}
