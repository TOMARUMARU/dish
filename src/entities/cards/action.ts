import actionCreatorFactory from 'typescript-fsa';
import { NormalizedCards } from './interface';
const defaultCardsActionCreator = actionCreatorFactory('Screens/StoreList');

export const defaultCardsActions = {
  fetch: defaultCardsActionCreator('FETCH_DEFAULT_CARDS'),
  success: defaultCardsActionCreator<NormalizedCards>('FETCH_CARD_SUCCESS'),
  failure: defaultCardsActionCreator<string>('FETCH_CARD_FAILURE')
};
