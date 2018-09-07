import { Action } from 'redux';

export interface State {
  isRequesting: boolean;
}

const INITIAL_STATE: State = { isRequesting: false };

export default (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case 'FETCH_DEFAULT_CARDS':
      return { isRequesting: true };
    default:
      return state;
  }
};
