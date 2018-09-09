import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { CardsActions } from '../../entities/cards/action';

export interface State {
  isRequesting: boolean;
}

const INITIAL_STATE: State = {
  isRequesting: true
};

export default reducerWithInitialState(INITIAL_STATE)
  .case(CardsActions.fetch, state => {
    return { ...state, isRequesting: true };
  })
  .case(CardsActions.success, state => {
    return { ...state, isRequesting: false };
  });
