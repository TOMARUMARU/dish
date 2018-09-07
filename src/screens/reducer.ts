import { combineReducers } from 'redux';
import StoreListReducer, { State as StoreListState } from './StoreList/reducer';
// import FavoriteReducer, {
//   State as FavoriteState
// } from './screens/FavoriteList/reducer';

export interface ScreensState {
  storeList: StoreListState;
}

export default combineReducers<ScreensState>({
  storeList: StoreListReducer
});
