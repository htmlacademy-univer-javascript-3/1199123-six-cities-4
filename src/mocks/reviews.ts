import { people } from './people';
import { Review } from '../types/review';

export const reviews: Review[] = [
  {
    id: 1,
    author: people[1],
    rating: 4,
    date: new Date('26/03/2024'),
    text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.'
  },
];
