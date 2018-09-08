import { combineReducers } from 'redux';
import CardReducer, { State as CardsState } from './cards/reducer';

export interface EntitiesState {
  cards: CardsState;
}

export default combineReducers({
  cards: CardReducer
});
