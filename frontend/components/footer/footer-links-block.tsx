import Link from 'next/link';
import React from 'react';
import { H3 } from '../text/text';
import { FooterLink } from './footer';

export function FooterLinksBlock({ block }: { block: FooterLink }) {
  return (
    <div>
      <H3 className='mb-2'>{block.title}</H3>
      <nav>
        <ul className='flex flex-col gap-2'>
          {block.links.map((link) => (
            <li key={link.text}>
              <Link
                className='text-lightGray hover:text-lightGray/70 text-base transition-opacity'
                href={link.url}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
