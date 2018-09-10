import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { CardsActions } from './action';
import { Card } from '../../entities';

export interface State {
  cards: {
    [id: number]: Card;
  };
}

const INITIAL_STATE: State = { cards: {} };

export default reducerWithInitialState(INITIAL_STATE)
  .case(CardsActions.success, (state, payload) => {
    return { ...state, ...payload.entities };
  })
  .case(CardsActions.favorite, (state, payload) => {
    state.cards[payload].favorited = true;
    return { ...state };
  });
