import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { NavLink } from './header';

export function HeaderNavigation({
  data,
  className,
}: {
  data: NavLink[];
  className?: string;
}) {
  return (
    <nav className={cn('flex', className)}>
      <ul className='flex justify-between w-full'>
        {data.map((link) => (
          <HeaderNavigationLink key={link.id} link={link} />
        ))}
      </ul>
    </nav>
  );
}

function HeaderNavigationLink({ link }: { link: NavLink }) {
  return (
    <li>
      <Link
        className='opacity-100 hover:opacity-70 transition-opacity text-sm font-bold'
        href={link.url}
      >
        {link.text}
      </Link>
    </li>
  );
}
