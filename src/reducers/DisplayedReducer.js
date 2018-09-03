import {
  CARD_DISPLAYED
} from '../actions/types';

const INITIAL_STATE = { id: 1 };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CARD_DISPLAYED:
      return action.payload;
    default:
      return state;
  }
};