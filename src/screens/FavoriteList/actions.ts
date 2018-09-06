import { FAVORITE_CARDS } from '../../actions/types';

export const favoriteCards = cardId => {
  return {
    type: FAVORITE_CARDS,
    payload: cardId
  };
};
