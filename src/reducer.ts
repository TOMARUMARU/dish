import { combineReducers } from 'redux';
import ScreensReducer, { ScreensState } from './screens/reducer';
import EntitiesReducer, { EntitiesState } from './entities/reducer';

export interface RootState {
  screens: ScreensState;
  entities: EntitiesState;
}

export default combineReducers({
  screens: ScreensReducer,
  entities: EntitiesReducer
});
