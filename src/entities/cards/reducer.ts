import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { defaultCardsActions } from './action';
import { Card } from '../../entities';

export interface State {
  [id: number]: Card;
}

const INITIAL_STATE: State = {};

export default reducerWithInitialState(INITIAL_STATE).case(
  defaultCardsActions.success,
  (state, payload) => {
    return { ...state, ...payload.entities.cards };
  }
);
