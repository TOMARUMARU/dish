import { combineReducers } from "redux";
import AllCardsReducer from "./screens/StoreList/reducer";
import FavoriteReducer from "./screens/FavoriteList/reducer";

export default combineReducers({
  allCards: AllCardsReducer,
  favoriteCardIds: FavoriteReducer
});
