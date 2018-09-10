export interface Card {
  id: number;
  title: string;
  image: string;
  evaluation: number;
  number: number;
  favorited: boolean;
  movie: {
    id: number;
    type: string;
  };
  distance: string;
}
