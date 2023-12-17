import React, { createContext, useReducer, type Dispatch } from 'react';
import { type IPokemon } from './shared/types';
import appReducer from './appReducer';

export type IAction =
  | {
    type: 'UPDATE_POKEMONS',
    pokemons: IPokemon[]
  }

export type IState = {
  pokemons: IPokemon[]
}

const initialAppState: IState = {
  pokemons: []
};

export const AppContext = createContext<{ state: IState, dispatch: Dispatch<IAction> }>({
  state: initialAppState,
  dispatch: () => null
});

export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialAppState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};