import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { defaultCardsActions } from '../../action';
import { Card } from '../../entities';

export interface State {
  isRequesting: boolean;
  datas: Card[];
}

const INITIAL_STATE: State = {
  isRequesting: false,
  datas: []
};

export default reducerWithInitialState(INITIAL_STATE)
  .case(defaultCardsActions.fetch, (state, payload) => {
    return { ...state, isRequesting: true };
  })
  .case(defaultCardsActions.success, (state, payload) => {
    return { ...state, isRequesting: false, datas: payload };
  });
