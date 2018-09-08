export const addFavoriteCards = (cardIndex: number) => {
  return { type: 'ADD_FAVORITE_CARDS', payload: cardIndex };
};
