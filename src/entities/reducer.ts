import { combineReducers } from 'redux';
import CardReducer, { State as CardsState } from './cards/reducer';
import MovieReducer, { State as MovieState } from './movies/reducer';

export interface EntitiesState {
  cards: CardsState;
  movies: MovieState;
}

export default combineReducers({
  cards: CardReducer,
  movies: MovieReducer
});
