import actionCreatorFactory from 'typescript-fsa';
import { Card } from '../../entities';
const defaultCardsActionCreator = actionCreatorFactory('Screens/StoreList');

export const defaultCardsActions = {
  fetch: defaultCardsActionCreator('FETCH_DEFAULT_CARDS'),
  success: defaultCardsActionCreator<Card[]>('FETCH_CARD_SUCCESS'),
  failure: defaultCardsActionCreator<string>('FETCH_CARD_FAILURE')
};
