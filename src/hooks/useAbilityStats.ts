import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

const useAbilityStats = (url: string | undefined) => {

  const [ability, setAbility] = useState<any[]>([]);
  const [stat, setStat] = useState<any[]>([]);

  const fetchAbilityStats = useCallback(async (url: string | undefined) => {
    if (url) {
      const {
        abilities: abilityResult,
        stats: statResult
      } = (await axios.get(url)).data;
      setAbility(abilityResult as any[]);
      setStat(statResult as any[]);
    }
  }, []);

  useEffect(() => {
    fetchAbilityStats(url)
      // eslint-disable-next-line no-console
      .catch(error => console.log(error));
  }, [url]);

  return { ability, stat };
};

export default useAbilityStats;