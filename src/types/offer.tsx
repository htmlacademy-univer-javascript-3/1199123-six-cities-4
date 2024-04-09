import { Review } from '../types/review';
import { City } from './city';

export type OfferType = {
  id: string;
  title: string;
  preview: string;
  description?: string;
  type: 'apartment' | 'room' | 'house' | 'hotel';
  costPerNight: number;
  rating: 1 | 2 | 3 | 4 | 5;
  isFavourites?: boolean;
  isPremium?: boolean;
  city: City;
  reviews: Review[];
  offersNearby: OfferType[];
  onListItemHover?: (listItemName: string) => void;
}
