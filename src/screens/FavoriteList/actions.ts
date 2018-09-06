import { FAVORITE_CARDS } from '../../actions/types';

export const favoriteCards = (cardId: number) => {
  return {
    type: FAVORITE_CARDS,
    payload: cardId
  };
};
