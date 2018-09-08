import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { favoriteActions } from '../../action';

export interface State {
  favorites: number[];
}

const INITIAL_STATE: State = {
  favorites: []
};

export default reducerWithInitialState(INITIAL_STATE).case(
  favoriteActions.add,
  (state, payload) => {
    return { ...state, favorites: [...state.favorites, payload] };
  }
);
