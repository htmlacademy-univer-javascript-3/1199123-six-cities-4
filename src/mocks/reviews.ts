import { people } from './people';
import { Review } from '../types/review';

export const reviews: Review[] = [
  {
    id: 1,
    author: people[1],
    rating: 4,
    date: new Date('26/03/2024'),
    text: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.'
  },
];
