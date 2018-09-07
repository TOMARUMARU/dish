import { combineReducers } from 'redux';
import AllCardsReducer, {
  State as AllCardsState
} from './screens/StoreList/reducer';
import FavoriteReducer, {
  State as FavoriteState
} from './screens/FavoriteList/reducer';

export interface RootState {
  allCards: AllCardsState;
  favoriteCardIds: FavoriteState;
}

export default combineReducers({
  allCards: AllCardsReducer,
  favoriteCardIds: FavoriteReducer
});
