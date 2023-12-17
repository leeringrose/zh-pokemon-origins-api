'use client';

import React from 'react';

import { type IPokemon } from '@/shared/types';
import ListItem from './ListItem';

const ListPad: React.FC<{ items: IPokemon[], filter?: string }> = ({ items, ...rest }) => <section className='flex flex-col justify-center max-w-7xl px-4 py-10 w-full sm:px-6' {...rest}>
  <h1 className='mb-6 text-2xl font-extrabold text-gray-700 md:text-5xl text-center leading-3'>Pokemons</h1>
  <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 px-3 w-full'>
    {items.map((item, index) => <ListItem id={index} key={index} name={item.name} url={item.url} />)}
  </div>
</section>;

export default ListPad;