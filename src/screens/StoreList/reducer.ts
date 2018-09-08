import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { defaultCardsActions } from '../../entities/cards/action';

export interface State {
  isRequesting: boolean;
}

const INITIAL_STATE: State = {
  isRequesting: true
};

export default reducerWithInitialState(INITIAL_STATE)
  .case(defaultCardsActions.fetch, state => {
    return { ...state, isRequesting: true };
  })
  .case(defaultCardsActions.success, state => {
    return { ...state, isRequesting: false };
  });
