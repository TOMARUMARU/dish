import actionCreatorFactory from 'typescript-fsa';
const defaultCardsActionCreator = actionCreatorFactory('screens/StoreList');

export const defaultCardsActions = {
  fetch: defaultCardsActionCreator('FETCH_DEFAULT_CARDS'),
  success: defaultCardsActionCreator('FETCH_CARD_SUCCESS'),
  failure: defaultCardsActionCreator('FETCH_CARD_FAILURE')
};
