import { combineReducers } from 'redux';
import ScreensReducer, { ScreensState } from './screens/reducer';
// import FavoriteReducer, {
//   State as FavoriteState
// } from './screens/FavoriteList/reducer';

export interface RootState {
  screens: ScreensState;
  // allCards: AllCardsState;
  // favoriteCardIds: FavoriteState;
}

export default combineReducers({
  screens: ScreensReducer
  // allCards: AllCardsReducer,
  // favoriteCardIds: FavoriteReducer
});
