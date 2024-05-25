import { User } from './user';

export type ReviewData = {
  id: string;
  comment: string;
  rating: number;
}


export type Review = ReviewData & {
  date: string;
  user: User;
}
