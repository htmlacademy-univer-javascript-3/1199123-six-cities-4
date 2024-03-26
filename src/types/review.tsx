import { Person } from './person';

export type Review = {
  id: number;
  author: Person;
  rating: number;
  date: Date;
  text: string;
}
