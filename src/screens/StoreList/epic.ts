import { combineEpics, Epic } from 'redux-observable';
import { filter, mergeMap, map, tap, ignoreElements } from 'rxjs/operators';
import { Action } from 'redux';
import { ajax } from 'rxjs/ajax';

export const fetchDefaultEpic: Epic<Action> = action$ =>
  action$.pipe(
    filter(action => action.type === 'FETCH_DEFAULT_CARDS'),
    mergeMap(action =>
      ajax
        .getJSON('http://localhost:3000/dish')
        .pipe(
          map(response => ({ type: 'FETCH_CARD_SUCCESS', payload: response }))
        )
    )
  );

export default combineEpics(fetchDefaultEpic);
