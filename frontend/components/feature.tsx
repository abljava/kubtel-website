'use client';

import React, { useEffect, useState } from 'react';
import { BlockWrapper } from '@/components/configurators/block-wrapper';
import { H3 } from '@/components/text/text';
import { CounterButtons } from './configurators/counter-buttons';
import { StrapiImage } from './strapi-image';

export function Feature() {
  const [counter, setCounter] = useState<number>(1);

  function handleChange(update: 1 | -1) {
    setCounter((prevVal) => Math.max(prevVal + update, 1));
  }

  return (
    <BlockWrapper>
      <div>
        <H3 className='text-xl'>ТВ-приставка</H3>
        <H3 className='text-xl text-textGray'>4K IPTV Vermax UHD300X</H3>
        <StrapiImage
          src='\images\devices\Vermax-UHD300X.png'
          alt=''
          width={250}
          height={250}
        />
        <ul></ul>
        <div className='flex'>
          <p>4000 x </p>
          <CounterButtons counter={counter} handleChange={handleChange} />
          <p>шт.</p>
        </div>
      </div>
    </BlockWrapper>
  );
}
