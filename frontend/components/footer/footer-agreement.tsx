import React from 'react';
import { FooterProps } from './footer';

export  function FooterAgreement({data}: {data: FooterProps}) {

  return (
    <div className='pb-8 col-start-1 col-end-13'>
      <p className='text-lightGray text-[10px]'>{data.agreement}</p>
    </div>
  );
}
