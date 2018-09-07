import { combineEpics } from 'redux-observable';
import storeListEpic from './screens/StoreList/epic';

export default combineEpics(storeListEpic);
