import { useEffect, type Dispatch } from 'react';
import axios from 'axios';
import { type IPokemon } from '@/shared/types';
import { type IAction } from '@/AppContext';
import { env } from '../env';

const remoteUrl = env.NEXT_PUBLIC_POKEMON_API_URL;

interface IPokemonsResult {
  count: number;
  next: string;
  previous: string;
  results: IPokemon[];
}

const usePokemons = (dispatch: Dispatch<IAction>) => {
  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonResult: IPokemonsResult = (await axios.get(remoteUrl)).data;
      dispatch({
        type: 'UPDATE_POKEMONS',
        pokemons: pokemonResult.results
      });
    };
    fetchPokemons().catch(e => {
      // eslint-disable-next-line no-console
      console.log('An error occurred while fetching original pokemons: ', e);
    });
  }, [dispatch]);
};

export default usePokemons;