import { combineReducers } from 'redux';
import StoreListReducer, { State as StoreListState } from './StoreList/reducer';

export interface ScreensState {
  storeList: StoreListState;
}

export default combineReducers<ScreensState>({
  storeList: StoreListReducer
});
