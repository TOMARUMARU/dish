import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { CardsActions } from './action';
import { Card } from '../../entities';

export interface State {
  [id: number]: Card;
}

const INITIAL_STATE: State = {};

export default reducerWithInitialState(INITIAL_STATE)
  .case(CardsActions.success, (state, payload) => {
    return { ...state, ...payload.entities.cards };
  })
  .case(CardsActions.favorite, (state, payload) => {
    state[payload].favorited = true;
    return { ...state };
  });
