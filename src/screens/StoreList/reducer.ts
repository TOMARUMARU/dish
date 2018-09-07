import { Action } from 'redux';

export interface State {
  isRequesting: boolean;
  datas: {};
}

const INITIAL_STATE: State = { isRequesting: false, datas: '' };

export default (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case 'FETCH_DEFAULT_CARDS':
      return { ...state, isRequesting: true };
    case 'FETCH_CARD_SUCCESS':
      return { ...state, isRequesting: false, datas: action.payload };
    default:
      return state;
  }
};
