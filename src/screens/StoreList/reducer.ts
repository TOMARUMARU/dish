import { DEFAULT_CARDS } from '../../actions/types';

export interface State {
  datas: {};
}

const INITIAL_STATE: State = { datas: '' };

export default (
  state = INITIAL_STATE,
  action: { type: string; payload: {} }
) => {
  switch (action.type) {
    case DEFAULT_CARDS:
      return { datas: action.payload };
    default:
      return state;
  }
};
