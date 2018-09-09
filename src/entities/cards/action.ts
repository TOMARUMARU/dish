import actionCreatorFactory from 'typescript-fsa';
import { NormalizedCards } from './interface';
const CardsActionCreator = actionCreatorFactory('Screens/StoreList');

export const CardsActions = {
  fetch: CardsActionCreator('FETCH_DEFAULT_CARDS'),
  success: CardsActionCreator<NormalizedCards>('FETCH_CARD_SUCCESS'),
  failure: CardsActionCreator<string>('FETCH_CARD_FAILURE'),
  failure: CardsActionCreator<number>('ADD_FAVORITE_CARD')
};
