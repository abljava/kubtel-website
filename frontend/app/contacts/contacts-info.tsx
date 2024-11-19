import { BlockWrapper } from '@/components/configurators/block-wrapper';
import { BigRectLink } from '@/components/main-page/big-rect-link';
import { H3 } from '@/components/text/text';

interface ContactItem {
  id: string;
  heading: string;
  number: string;
}

interface ContactData {
  city: string;
  address: string;
  tel: ContactItem[];
}

export function ContactsInfo(data: { data: ContactData }) {
  const { city, address, tel } = data.data;

  return (
    <BlockWrapper className='mt-12'>
      <H3 className='text-xl text-textGray'>{city},</H3>
      <H3 className='text-xl'>{address}</H3>
      <ul>
        {tel.map((item: ContactItem) => (
          <li className='pt-6' key={item.id}>
            <p className='text-base text-textGray'>{item.heading}</p>
            <H3 className='text-xl'>{item.number}</H3>
          </li>
        ))}
      </ul>
    </BlockWrapper>
  );
}
