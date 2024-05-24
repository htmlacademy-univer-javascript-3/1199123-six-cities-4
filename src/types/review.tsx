import { User } from './person';

export type Review = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
}
