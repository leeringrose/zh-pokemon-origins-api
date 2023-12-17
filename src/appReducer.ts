import { type IState, type IAction } from './AppContext';

const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'UPDATE_POKEMONS':
      return {
        ...state,
        pokemons: action.pokemons
      };
    default:
      return state;
  }
};

export default reducer;