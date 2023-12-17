import React, { useContext, useState } from 'react';
import dynamic from 'next/dynamic';

import PageLayout from '@/layouts/PageLayout';
import SearchBar from '@/components/SearchBar';
import { filterPokemons } from '@/utils/services';

import { AppContext } from '@/AppContext';
import usePokemons from '@/hooks/usePokemons';

// Import ListPad Component as a Lazy Component
const ListPad = dynamic(() => import('../components/ListPad'),
  {
    loading: () => <h1>Loading...</h1>
  }
);

export default function Home() {
  const { state, dispatch } = useContext(AppContext);
  const [filterQuery, setFilterQuery] = useState('');
  usePokemons(dispatch);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterQuery(event.target.value);
  };

  return (
    <PageLayout title='Dashboard | Pokemon Api'>
      <SearchBar onQueryChange={handleInputChange} />
      <ListPad items={filterPokemons(state.pokemons, filterQuery)} />
    </PageLayout>
  );
}