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

export interface DefaultCardsResponse extends Array<Card> {}
