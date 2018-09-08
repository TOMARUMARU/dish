import { combineEpics } from 'redux-observable';
import cardsEpic from './cards/epic';

export default combineEpics(cardsEpic);
