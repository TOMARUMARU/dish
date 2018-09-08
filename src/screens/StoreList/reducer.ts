import { defaultCardsActions } from '../../action';

export interface State {
  isRequesting: boolean;
  datas: {};
}

const INITIAL_STATE: State = {
  isRequesting: false,
  datas: ''
};

export default (
  state = INITIAL_STATE,
  action: { type: string; payload: [] }
) => {
  switch (action.type) {
    case defaultCardsActions.fetch.type:
      return { ...state, isRequesting: true };
    case defaultCardsActions.success.type:
      return { ...state, isRequesting: false, datas: action.payload };
    default:
      return state;
  }
};
