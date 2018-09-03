import {
  FAVORITE_CARDS
}
 from './types';

export const favoriteCards = (cardId) => {
  return {
    type: FAVORITE_CARDS,
    payload: cardId
  };
};
