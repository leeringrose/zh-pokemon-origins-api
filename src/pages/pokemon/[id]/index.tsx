'use client';

import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import PageLayout from '@/layouts/PageLayout';
import { AppContext } from '@/AppContext';
import useAbility from '@/hooks/useAbilityStats';
import Card from '@/components/Card';

const DetailView = () => {
  const router = useRouter();
  const { id } = router.query;

  const { state } = useContext(AppContext);

  useEffect(() => {
    if (state.pokemons.length === 0) {
      void router.push('/');
    }
  }, [state]);

  const { ability, stat } = useAbility(state.pokemons.at(parseInt(id))?.url);

  return (
    <PageLayout title={'Pokemon Detail'}>
      <div className='flex items-stretch w-[80%] justify-around'>
        <div className='flex flex-col items-stretch p-3 flex-1 text-sky-500 bg-yellow-100 min-h-[100vh]'>
          <h4 className='text-5xl font-bold text-center '>Abilities</h4>
          {ability?.map((item, index) => <Card key={index} mode='ability' title={item.ability.name} currentId={id} url={item.ability.url} />)}
        </div>
        <div className='flex flex-col items-stretch p-3 flex-1 text-orange-500 bg-lime-100'>
          <h4 className='text-5xl text-center font-bold '>stats</h4>
          {stat?.map((item, index) => <Card key={index} mode='stat' title={item.stat.name} currentId={id} url={item.stat.url} />)}
        </div>
      </div>
    </PageLayout>
  );
};

export default DetailView;