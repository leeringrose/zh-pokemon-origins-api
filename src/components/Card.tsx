import React from 'react';
import Link from 'next/link';

import Button from './core/Button';
import { useRouter } from 'next/router';

interface CardProps {
  title: string;
  currentId: string | string[] | undefined;
  url?: string;
  mode: 'ability' | 'stat';
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, url, mode, ...rest }) => {

  const router = useRouter();
  const { id } = router.query;

  return (<div className='rounded overflow-hidden shadow-lg px-6 py-4 min-h-[200px]' {...rest}>
    <h3 className='font-bold text-4xl text-slate-700 leading-15 p-3 text-center'>{title}</h3>
    <p className='text-gray-700 text-base text-center'>
      <span className='font-bold text-2xl text-red-600 mr-1'>Reference:</span> {url}
    </p>
    <Link href='/pokemon/[id]/reference?url=[url]&mode=[mode]' as={`/pokemon/${id.toString()}/reference?url=${encodeURIComponent(url.toString())}&mode=${mode}`}>
      <div className='flex items-center justify-center mt-8 text-sm w-full'>
        <Button>See reference</Button>
      </div>
    </Link>
  </div >);
};

export default Card;