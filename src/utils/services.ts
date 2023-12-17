import { type IPokemon } from '@/shared/types';

export const filterPokemons: (pokemons: IPokemon[], filterBy: string) => IPokemon[] = (pokemons, filterBy) => {
  if (filterBy === '') return pokemons;
  const filteredOne = pokemons.filter(pokemon => {
    return pokemon.name.includes(filterBy);
  });

  return filteredOne;
};