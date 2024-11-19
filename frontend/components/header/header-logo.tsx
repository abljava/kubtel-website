import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { cn } from '@/lib/utils';
import { StrapiImage } from '../strapi-image';
import { Logo } from './header';

export function HeaderLogo({
  data,
  className,
}: {
  data: Logo;
  className?: string;
}) {
  const { url, icon } = data;

  return (
    <Link
      className={cn(
        'relative hover:opacity-70 transition-opacity w-[79px] h-[37px]',
        className
      )}
      href={url}
    >
      <StrapiImage
        src={icon.url}
        alt='Логотип Кубтел'
        width={79}
        height={38}
        // fill={true}
        style={{
          objectFit: 'cover',
        }}
      />
    </Link>
  );
}
