import actionCreatorFactory from 'typescript-fsa';
const favoriteActionCreator = actionCreatorFactory('screens/FavoriteList');

export const favoriteActions = {
  add: favoriteActionCreator<number>('ADD_FAVORITE_CARDS')
};
