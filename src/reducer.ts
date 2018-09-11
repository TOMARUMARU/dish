import { combineReducers } from 'redux';
import ScreensReducer, { ScreensState } from './screens/reducer';
import EntitiesReducer, { entitiesState } from './entities/reducer';

export interface RootState {
  screens: ScreensState;
  entities: entitiesState;
}

export default combineReducers({
  screens: ScreensReducer,
  entities: EntitiesReducer
});
