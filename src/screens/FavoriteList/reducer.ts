import { FAVORITE_CARDS } from '../../actions/types';

export interface State extends Array<number> {}

const INITIAL_STATE: State = [];

export default (
  state = INITIAL_STATE,
  action: { type: string; payload: number }
) => {
  switch (action.type) {
    case FAVORITE_CARDS:
      return [...state, action.payload];
    default:
      return state;
  }
};
