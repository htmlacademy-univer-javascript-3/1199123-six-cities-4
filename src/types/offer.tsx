import { Review } from '../types/review';

export type OfferType = {
  id: number;
  title: string;
  preview: string;
  description?: string;
  type: 'apartment' | 'room' | 'house' | 'hotel';
  costPerNight: number;
  rating: 1 | 2 | 3 | 4 | 5;
  isFavourites?: boolean;
  isPremium?: boolean;
  city: string;
  reviews: Review[];
}
