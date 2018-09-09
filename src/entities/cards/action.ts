import actionCreatorFactory from 'typescript-fsa';
import { NormalizedCards } from './interface';
const CardsActionCreator = actionCreatorFactory('entities/cards');

export const CardsActions = {
  fetch: CardsActionCreator('FETCH_DEFAULT_CARDS'),
  success: CardsActionCreator<NormalizedCards>('FETCH_CARD_SUCCESS'),
  failure: CardsActionCreator<string>('FETCH_CARD_FAILURE'),
  favorite: CardsActionCreator<number>('ADD_FAVORITE_CARD')
};
