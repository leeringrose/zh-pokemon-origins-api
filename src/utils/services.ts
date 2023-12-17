import { type IPokemon } from '@/shared/types';

// return filtered values which have the search query string inside there name
export const filterPokemons: (pokemons: IPokemon[], filterBy: string) => IPokemon[] = (pokemons, filterBy) => {
  if (filterBy === '') return pokemons;
  const filteredOne = pokemons.filter(pokemon => {
    return pokemon.name.includes(filterBy);
  });
  return filteredOne;
};