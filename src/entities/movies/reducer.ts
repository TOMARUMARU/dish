import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { CardsActions } from '../cards/action';

export interface State {
  [id: number]: {
    id: number;
    type: string;
  };
}

const INITIAL_STATE: State = {};

export default reducerWithInitialState(INITIAL_STATE).case(
  CardsActions.success,
  (state, payload) => {
    return { ...state, ...payload.entities.movies };
  }
);
