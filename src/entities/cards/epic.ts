import { CardsActions } from './action';
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
import {
  DefaultCardsResponse,
  NormalizedCards,
  ErrorMessage
} from './interface';

const fetchDefaultCardsEpic: Epic<Action> = action$ =>
  action$.pipe(
    filter(CardsActions.fetch.match),
    mergeMap(() =>
      ajax.getJSON<DefaultCardsResponse>('http://localhost:3000/dish').pipe(
        map((response: DefaultCardsResponse) =>
          normalize(response, cardsSchema)
        ),
        map((normalizedCards: NormalizedCards) => ({
          type: CardsActions.success.type,
          payload: normalizedCards
        })),
        catchError((err: Error) =>
          of({
            type: CardsActions.failure.type,
            payload: err.message
          })
        )
      )
    )
  );

const failureFetchDefaultCardsEpic: Epic<Action> = action$ =>
  action$.pipe(
    filter(CardsActions.failure.match),
    tap(action => Alert.alert(action.payload.err)),
    ignoreElements()
  );

export default combineEpics(
  fetchDefaultCardsEpic,
  failureFetchDefaultCardsEpic
);
