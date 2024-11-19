import React from 'react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { OrderBtn } from './header';
import { StrapiImage } from '../strapi-image';
import Link from 'next/link';

export function HeaderCart({
  data,
  className,
}: {
  data: OrderBtn;
  className?: string;
}) {
  const { url, icon, text } = data;

  return (
    <Button
      className={cn('p-0 flex gap-2 justify-start ml-auto', className)}
      variant='transparent'
    >
      <Link href={url} className=' flex gap-2 items-center ml-auto'>
        <StrapiImage src={icon.url} alt='' width={31} height={31} />
        <p className='text-muted-foreground font-bold hidden lg:block'>
          {text}
        </p>
      </Link>
    </Button>
  );
}
