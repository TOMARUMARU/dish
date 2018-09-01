import { combineReducers } from 'redux';
import DisplayedReducer from './DisplayedReducer';

export default combineReducers({
  displayedCardId: DisplayedReducer
});
