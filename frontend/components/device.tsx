'use client';

import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { StrapiImage } from './strapi-image';

export interface IFeature {
  title: string;
  description: string;
  icon: {
    url: string;
  };
}

export interface IDevice {
  id: number;
  title: string;
  model: string;
  image: {
    url: string;
  };
  price: number;
  features: IFeature[];
}

interface IDeviceProps extends IDevice {
  setTotal: (value: number) => void;
}

export function Device({
  model,
  title,
  image,
  price,
  features,
  setTotal,
}: IDeviceProps) {
  const [counter, setCounter] = useState<number>(0);
  const [sum, setSum] = useState<number>(0);

  useEffect(() => {
    let total = price * counter;
    setSum(total);
    setTotal(total);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter, price]);

  function handleChange(update: 1 | -1) {
    setCounter((prevVal) => Math.max(prevVal + update, 0));
  }

  return (
    <li
      className='bg-white rounded-lg shadow-[0px_5px_36px_0px_rgba(0,0,0,0.08)]'
      key={model}
    >
      <Card>
        <CardHeader className='text-2xl font-bold px-6 pb-1'>{title}</CardHeader>
        <CardDescription className='px-6 text-xl font-semibold text-[#97999B]'>
          {model}
        </CardDescription>
        <CardContent className='flex flex-col'>
          <StrapiImage
            src={image.url}
            alt={model}
            width={250}
            height={250}
            className='self-center'
          />
          <ul className='flex flex-col gap-6 mb-5'>
            {features.map((feature) => (
              <li key={feature.title} className='flex items-start gap-2'>
                <StrapiImage
                  src={feature.icon.url}
                  alt={feature.title}
                  width={24}
                  height={24}
                  className='self-center'
                />
                <div>
                  <p className='text-xl font-semibold leading-none'>
                    {feature.title}
                  </p>
                  <p className='text-base text-[#97999B]'>
                    {feature.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <Button className='w-full mb-5'>Подробнее</Button>
          <div className='flex gap-1 items-center mb-3'>
            <p className='text-xl font-semibold'>
              {price} ₽ <span className='text-sm font-normal'>x</span>
            </p>
            <div className='flex justify-between items-center w-24 h-12 px-1 border rounded-lg'>
              <Button
                className='w-7 h-7 p-0'
                variant='outline'
                datatype='123'
                aria-label='minus'
                onClick={() => handleChange(-1)}
              >
                -
              </Button>
              <p>{counter}</p>
              <Button
                className='w-7 h-7 p-0'
                variant='outline'
                datatype='321'
                onClick={() => handleChange(1)}
              >
                +
              </Button>
            </div>
            <p className='text-xl font-semibold'>шт</p>
          </div>
          {!!sum && <p className='text-xl font-semibold'>{sum} ₽</p>}
        </CardContent>
      </Card>
    </li>
  );
}
