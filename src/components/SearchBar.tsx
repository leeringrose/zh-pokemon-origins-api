import React from 'react';
import { debounce } from 'lodash';

import styles from '@/styles/SearchBar.module.css';

interface SearchBarProps {
  onQueryChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onQueryChange }) => {

  const handleChange = debounce((event: React.ChangeEvent<HTMLInputElement>) => {
    onQueryChange(event);
  }, 800);

  return (<div className='flex justify-center w-full items-center sticky top-0 bg-yellow-100'>
    <div className='relative p-8 w-full sm:max-w-2xl sm:mx-auto'>
      <div className='overflow-hidden z-0 rounded-full relative p-3'>
        <form role='form' className='relative flex z-50 bg-white rounded-full'>
          <input type='text' onChange={handleChange} placeholder={'Find Pokemon\'s name'} className='rounded-full flex-1 px-6 py-4 text-gray-700 focus:outline-none' />
        </form>
        <div className={`${styles.glow} ${styles.glow_1} z-10 bg-pink-400 absolute`}></div>
        <div className={`${styles.glow} ${styles.glow_2} z-20 bg-purple-400 absolute`}></div>
        <div className={`${styles.glow} ${styles.glow_3} z-30 bg-yellow-400 absolute`}></div>
        <div className={`${styles.glow} ${styles.glow_4} z-40 bg-blue-400 absolute'`}></div>
      </div>
    </div>
  </div>);
};

export default SearchBar;