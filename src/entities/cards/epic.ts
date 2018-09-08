import { defaultCardsActions } from './action';
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
import { normalize } from 'normalizr';
import { cardsSchema } from './schema';
import { DefaultCardsResponse, NormalizedCards } from './interface';

const fetchDefaultCardsEpic: Epic<Action> = action$ =>
  action$.pipe(
    filter(defaultCardsActions.fetch.match),
    mergeMap(() =>
      ajax.getJSON<DefaultCardsResponse>('http://localhost:3000/dish').pipe(
        map((response: DefaultCardsResponse) =>
          normalize(response, cardsSchema)
        ),
        map((normalizedCards: NormalizedCards) => ({
          type: defaultCardsActions.success.type,
          payload: normalizedCards
        })),
        catchError((err: Error) =>
          of({
            type: defaultCardsActions.failure.type,
            payload: err.message
          })
        )
      )
    )
  );

const failureFetchDefaultCardsEpic: Epic<Action> = action$ =>
  action$.pipe(
    filter(defaultCardsActions.failure.match),
    tap(action => Alert.alert(action.payload)),
    ignoreElements()
  );

export default combineEpics(
  fetchDefaultCardsEpic,
  failureFetchDefaultCardsEpic
);
