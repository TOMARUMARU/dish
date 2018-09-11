import { combineReducers } from 'redux';
import CardReducer, { State as CardsState } from './cards/reducer';

export interface EntitiesState {
  datas: CardsState;
}

export default combineReducers({
  datas: CardReducer
});
