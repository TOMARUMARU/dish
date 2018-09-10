import { combineReducers } from 'redux';
import ScreensReducer, { ScreensState } from './screens/reducer';
import CardReducer, { State as CardsState } from './entities/cards/reducer';

export interface RootState {
  screens: ScreensState;
  entities: CardsState;
}

export default combineReducers({
  screens: ScreensReducer,
  entities: CardReducer
});
