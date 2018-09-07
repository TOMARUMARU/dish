import { combineEpics, Epic } from 'redux-observable';
import { filter, tap, ignoreElements } from 'rxjs/operators';
import { Action } from 'redux';

export const fetchDefaultEpic: Epic<Action> = action$ =>
  action$.pipe(
    filter(action => action.type === 'FETCH_DEFAULT_CARDS'),
    tap(() => console.log('aaaaa')),
    ignoreElements()
  );

export default combineEpics(fetchDefaultEpic);
