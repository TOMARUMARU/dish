import { combineReducers } from 'redux';
import AllCardsReducer from './AllCardsReducer';
import DisplayedReducer from './DisplayedReducer';
import FavoriteReducer from './FavoriteReducer';

export default combineReducers({
  allCards: AllCardsReducer,
  displayedCardId: DisplayedReducer,
  favoriteCards: FavoriteReducer
});
