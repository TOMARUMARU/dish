import { Card } from '../Card';

export interface NormalizedCards {
  result: number[];
  entities: {
    cards: {
      [id: number]: Card;
    };
    movies: {
      [id: number]: {
        id: number;
        type: string;
      };
    };
  };
}

export interface ErrorMessage {
  err: string;
}

export interface CardId {
  cardId: number;
}

export interface DefaultCardsResponse extends Array<Card> {}
