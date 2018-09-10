import { schema } from 'normalizr';

const movieSchema = new schema.Entity('movies');
const cardSchema = new schema.Entity('cards', {
  movie: movieSchema
});
export const cardsSchema = [cardSchema];
