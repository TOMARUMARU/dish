import {
  DEFAULT_CARDS
} from '../actions/types';

const INITIAL_STATE = { datas: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DEFAULT_CARDS:
      return { datas: action.payload };
    default:
      return state;
  }
};
