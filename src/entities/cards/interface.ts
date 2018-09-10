import { Card } from '../Card';

export interface NormalizedCards {
  result: number[];
  entities: {
    cards: {
      [id: number]: Card;
    };
  };
}

export interface DefaultCardsResponse extends Array<Card> {}
