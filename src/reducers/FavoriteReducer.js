import {
  FAVORITES_LIST
} from '../actions/types';

const INITIAL_STATE = { id: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FAVORITES_LIST:
      return action.payload;
    default:
      return state;
  }
};
