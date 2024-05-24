import { Review } from '../types/review';
import { City } from './city';

export type OfferType = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  reviews: Review[];
  onListItemHover?: (listItemName: string) => void;
}
