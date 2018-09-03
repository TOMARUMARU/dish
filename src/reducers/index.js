import { combineReducers } from 'redux';
import DisplayedReducer from './DisplayedReducer';
import FavoriteReducer from './FavoriteReducer';

export default combineReducers({
  displayedCardId: DisplayedReducer,
  favoriteCards: FavoriteReducer
});
