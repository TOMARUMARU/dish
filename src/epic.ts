import { combineEpics } from 'redux-observable';
import entitiesEpic from './entities/epic';

export default combineEpics(entitiesEpic);
