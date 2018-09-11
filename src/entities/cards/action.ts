import actionCreatorFactory from 'typescript-fsa';
import { NormalizedCards, ErrorMessage, CardId } from './interface';

const CardsActionCreator = actionCreatorFactory('entities/cards');

export const CardsActions = {
  fetch: CardsActionCreator('FETCH_DEFAULT_CARDS'),
  success: CardsActionCreator<NormalizedCards>('FETCH_CARD_SUCCESS'),
  failure: CardsActionCreator<ErrorMessage>('FETCH_CARD_FAILURE'),
  favorite: CardsActionCreator<CardId>('ADD_FAVORITE_CARD')
};
