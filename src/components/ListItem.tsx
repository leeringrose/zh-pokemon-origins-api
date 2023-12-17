import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

import useDetail from '@/hooks/useDetail';
import CustomSpin from './core/CustomSpin';

const LazyloadedItem: React.FC<{ name: string, url?: string, key: number, id: number }> = ({ name, url, id, ...rest }) => {

  const [isPending, setIsPending] = useState(true);
  const { ref, inView } = useInView({ threshold: 0.7, initialInView: true, triggerOnce: true });
  const { abilities, stats } = useDetail(url);

  useEffect(() => {
    if (abilities !== null || stats !== null) {
      setIsPending(false);
    }
  }, [abilities, stats]);

  return (
    <div ref={ref} {...rest} className='cursor-pointer hover:bg-gray-300'>
      <Link href='/pokemon/[id]' as={`/pokemon/${id}`}>
        {inView && <div className='p-4 flex flex-col justify-between border rounded-lg shadow-md min-h-[200px]'>
          {!isPending ? <><a className='block mb-2 text-xl font-semibold text-purple-700 hover:underline' href=''>
            {name}
          </a>
            <div className='flex flex-wrap gap-2 text-sm text-gray-600'>
              {abilities.map((item, index) => <span key={index}>
                {item.ability.name}
              </span>)}
            </div>
            <div className='flex items-center justify-between mt-4 text-sm'>
              <a href='' className='text-green-700 hover:underline'>
                See detail
              </a>
            </div>
          </>
            : <CustomSpin />}
        </div>}
      </Link>
    </div >);
};

export default LazyloadedItem;