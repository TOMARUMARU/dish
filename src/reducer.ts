import { combineReducers } from 'redux';
import ScreensReducer, { ScreensState } from './screens/reducer';

export interface RootState {
  screens: ScreensState;
}

export default combineReducers({
  screens: ScreensReducer
});
