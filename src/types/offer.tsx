import { Review } from '../types/review';
import { City } from './city';

export type OfferType = {
  id: string;
  title: string;
  preview: string[];
  description: string;
  type: string;
  costPerNight: number;
  rating: number;
  isFavourites: boolean;
  isPremium: boolean;
  city: City;
  reviews: Review[];
  offersNearby: OfferType[];
  onListItemHover?: (listItemName: string) => void;
}
