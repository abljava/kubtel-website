import { BlockWrapper } from '@/components/configurators/block-wrapper';
import { BigRectLink } from '@/components/main-page/big-rect-link';
import { H3 } from '@/components/text/text';

export function ContactsInfo() {
  return (
    <BlockWrapper className='mt-12'>
      <ul>
        <li>
          <H3 className='text-xl text-textGray'>Краснодар,</H3>
          <H3 className='text-xl'>Володи Головатого, 585</H3>
        </li>
        <li className='pt-6'>
          <p className='text-base text-textGray'>Контактный центр:</p>
          <H3 className='text-xl'>8 800 222-17-30</H3>
        </li>
        <li className='pt-6'>
          <p className='text-base text-textGray'>Абонентский отдел:</p>
          <H3 className='text-xl'>8 (861) 200-10-11</H3>
        </li>
        <li className='py-6'>
          <p className='text-base text-textGray'>Техническая поддержка:</p>
          <H3 className='text-xl'>8 (861) 200-10-10</H3>
        </li>
      </ul>
    </BlockWrapper>
  );
}
