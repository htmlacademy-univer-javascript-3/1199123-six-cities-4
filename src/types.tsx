export type Place = {
  title: string;
  preview: string;
  type: 'apartment' | 'room' | 'house' | 'hotel';
  costPerNight: number;
  rating: 1 | 2 | 3 | 4 | 5;
  isFavourites?: boolean;
  isPremium?: boolean;
}
