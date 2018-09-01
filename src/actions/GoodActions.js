import FAVORITES_LIST from './types';

export const favoriteList = ({ id }) => {
  return {
    type: FAVORITES_LIST,
    payload: { id }
  };
};
