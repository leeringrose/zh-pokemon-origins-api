import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { type IAbility, type IStat } from '@/shared/types';

const useDetail = (url: string | undefined) => {

  const [abilities, setAbilities] = useState<IAbility[]>([]);
  const [stats, setstats] = useState<IStat[]>([]);

  const fetchDetail = useCallback(async (url: string | undefined) => {
    if (url) {
      const { abilities: abilityResults, stats: statResults } = (await axios.get(url)).data;
      setAbilities(abilityResults as IAbility[]);
      setstats(statResults as IStat[]);
    }
  }, []);

  useEffect(() => {
    fetchDetail(url)
      // eslint-disable-next-line no-console
      .catch(error => console.log(error));
  }, [url]);

  return { abilities, stats };
};

export default useDetail;