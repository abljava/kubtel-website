'use client';

import { useRouter } from 'next/navigation';
import { Device, IDevice } from './device';
import { Button } from './ui/button';
import { useCallback, useEffect, useState } from 'react';

export function DevicesList({ data }: { data: IDevice[] }) {
  const [devicesTotal, setDevicesTotal] = useState<Record<string, number>>({});
  const [total, setTotal] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    setTotal(Object.values(devicesTotal).reduce((acc, val) => acc + val, 0));
  }, [devicesTotal]);

  const updateDeviceTotal = useCallback((model: string) => {
    return (value: number) => {
      setDevicesTotal((prevVal) => ({ ...prevVal, [model]: value }));
    };
  }, []);

  return (
    <div className='flex flex-col gap-5 col-span-12'>
      <h2 className='text-2xl font-bold '>Устройства</h2>
      <ul className='flex flex-col gap-5'>
        {data.map((device: IDevice) => {
          return (
            <Device
              key={device.id}
              id={device.id}
              model={device.model}
              title={device.title}
              image={device.image}
              price={device.price}
              features={device.features}
              setTotal={updateDeviceTotal(device.model)}
            />
          );
        })}
      </ul>
      <div className='flex flex-col gap-5 bg-white rounded-md border shadow-basic p-5'>
        <div>
          <p className='text-xl font-semibold'>Стоимость:</p>
          <p className='text-3xl text-textGray font-semibold'>{total} ₽</p>
        </div>
        <Button
          className='w-full'
          variant='kubtel'
          type='submit'
          onClick={() => router.push('/order')}
        >
          Заказать
        </Button>
      </div>
    </div>
  );
}
