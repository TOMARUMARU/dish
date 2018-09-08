import { combineReducers } from 'redux';
import StoreListReducer, { State as StoreListState } from './StoreList/reducer';
import FavoriteListReducer, {
  State as FavorieListState
} from './FavoriteList/reducer';

export interface ScreensState {
  storeList: StoreListState;
  favoriteList: FavorieListState;
}

export default combineReducers<ScreensState>({
  storeList: StoreListReducer,
  favoriteList: FavoriteListReducer
});
