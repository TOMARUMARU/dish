import { combineEpics, Epic } from 'redux-observable';
import { Alert } from 'react-native';
import {
  filter,
  mergeMap,
  map,
  tap,
  catchError,
  ignoreElements
} from 'rxjs/operators';
import { Action } from 'redux';
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';

const fetchDefaultCardsEpic: Epic<Action> = action$ =>
  action$.pipe(
    filter(action => action.type === 'FETCH_DEFAULT_CARDS'),
    mergeMap(action =>
      ajax.getJSON('http://localhost:3000/dish').pipe(
        map(response => ({ type: 'FETCH_CARD_SUCCESS', payload: response })),
        catchError((err: Error) =>
          of({
            type: 'FETCH_CARD_FAILURE',
            payload: err.message
          })
        )
      )
    )
  );

const failureFetchDefaultCardsEpic: Epic<Action> = action$ =>
  action$.pipe(
    filter(action => action.type === 'FETCH_CARD_FAILURE'),
    tap((action: any) => Alert.alert(action.payload)),
    ignoreElements()
  );

const addFavoriteCardsEpic: Epic<Action> = action$ =>
  action$.pipe(
    filter(action => action.type == 'ADD_FAVORITE_CARDS'),
    tap(() => console.log('tests')),
    ignoreElements()
  );

export default combineEpics(
  fetchDefaultCardsEpic,
  failureFetchDefaultCardsEpic,
  addFavoriteCardsEpic
);
