/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSearchParams } from 'next/navigation';
import React from 'react';

import PageLayout from '@/layouts/PageLayout';
import useReference from '@/hooks/useReference';
import CustomSpin from '@/components/core/CustomSpin';

const dataSet = (key: string, value: string) => <div className='flex items-center w-full py-8 yx-20'>
  <span className='text-lg text-red-400 font-bold mr-2 w-60 text-center'>{key}: </span>
  <span className='text-2xl text-lime-600'>{value}</span>
</div>;

const ItemDetail: React.FC = () => {
  const searchParams = useSearchParams();
  const url = searchParams.get('url');
  const mode = searchParams.get('mode');
  const referenceData = useReference(url!) as any;

  return (
    <PageLayout title='Detail View'>
      {referenceData ? <>
        {mode === 'ability' && <>
          {dataSet(
            'Name',
            referenceData.name
          )}
          {dataSet(
            'Names (Also known as)',
            referenceData.names.map(name => name.name).join(', ')
          )}
          {dataSet(
            'Effect Entry',
            referenceData.effect_entries.find(item => item.language?.name === 'en').effect
          )}
          {dataSet(
            'Flavor Text Entry',
            referenceData.flavor_text_entries.find(item => item.language?.name === 'en').flavor_text
          )}
          {dataSet(
            'Is Main Series',
            referenceData.is_main_series.toString()
          )}
          {dataSet(
            'Pokemon',
            referenceData.pokemon.map(pokemon => pokemon.pokemon?.name).join(', ')
          )}
        </>}
        {mode === 'stat' && <>
          {dataSet(
            'Name',
            referenceData.name
          )}
          {dataSet(
            'Game Index',
            referenceData.game_index.toString()
          )}
          {dataSet(
            'Move Damage Class',
            referenceData.move_damage_class?.name
          )}
          {dataSet(
            'Names (Also known as)',
            referenceData.names.map(name => name.name).join(', ')
          )}
        </>}
      </>
        : <div className='flex w-full h-[100vh] p-13 items-center justify-center'>
          <CustomSpin />
        </div>}
    </PageLayout>
  );
};

export default ItemDetail;
