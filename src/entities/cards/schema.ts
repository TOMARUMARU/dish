import { schema } from 'normalizr';

const cardSchema = new schema.Entity('cards');
export const cardsSchema = [cardSchema];
