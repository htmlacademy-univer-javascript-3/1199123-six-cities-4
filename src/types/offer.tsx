import { City } from './city';
import { Location } from './city';

export type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

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
}

export type CompleteOffer = OfferType & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
}
