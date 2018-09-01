import { combineReducers } from 'redux';
import FavoriteReducer from './FavoriteReducer';

export default combineReducers({
  favorites: FavoriteReducer
});
