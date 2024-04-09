import { OfferType } from '../types/offer';
import { reviews } from './reviews';

export const offers: OfferType[] = [
  {
    id: '1',
    title: 'Beautiful &amp; luxurious apartment at great location',
    preview: 'img/apartment-01.jpg',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    type: 'apartment',
    costPerNight: 120,
    rating: 4,
    isFavourites: false,
    isPremium: true,
    city: {
      name: 'Amsterdam',
      longitude: 4.85309666406198,
      latitude: 52.3909553943508,
      zoom: 5
    },
    reviews: [reviews[0]],
    offersNearby: [
      {
        id: '5',
        title: 'Wood and stone place',
        preview: 'img/apartment-02.jpg',
        type: 'room',
        costPerNight: 80,
        rating: 4,
        isFavourites: true,
        isPremium: false,
        city: {
          name: 'Amsterdam',
          longitude: 4.85309666406198,
          latitude: 52.3609553943508,
          zoom: 5
        },
        reviews: [reviews[0]],
        offersNearby: []
      },
      {
        id: '6',
        title: 'Canal View Prinsengracht',
        preview: 'img/apartment-02.jpg',
        type: 'apartment',
        costPerNight: 132,
        rating: 4,
        isFavourites: false,
        isPremium: false,
        city: {
          name: 'Amsterdam',
          longitude: 4.939309666406198,
          latitude: 52.3809553943508,
          zoom: 5
        },
        reviews: [reviews[0]],
        offersNearby: []
      },
      {
        id: '7',
        title: 'Nice, cozy, warm big bed apartment',
        preview: 'img/apartment-03.jpg',
        type: 'apartment',
        costPerNight: 180,
        rating: 5,
        isFavourites: false,
        isPremium: true,
        city: {
          name: 'Amsterdam',
          longitude: 4.939309666406198,
          latitude: 52.3809553943508,
          zoom: 5
        },
        reviews: [reviews[0]],
        offersNearby: []
      },
    ],
  },
  {
    id: '2',
    title: 'Wood and stone place',
    preview: 'img/apartment-02.jpg',
    type: 'room',
    costPerNight: 80,
    rating: 4,
    isFavourites: true,
    isPremium: false,
    city: {
      name: 'Amsterdam',
      longitude: 4.85309666406198,
      latitude: 52.3609553943508,
      zoom: 5
    },
    reviews: [reviews[0]],
    offersNearby: []
  },
  {
    id: '3',
    title: 'Canal View Prinsengracht',
    preview: 'img/apartment-02.jpg',
    type: 'apartment',
    costPerNight: 132,
    rating: 4,
    isFavourites: false,
    isPremium: false,
    city: {
      name: 'Amsterdam',
      longitude: 4.939309666406198,
      latitude: 52.3809553943508,
      zoom: 5
    },
    reviews: [reviews[0]],
    offersNearby: []
  },
  {
    id: '4',
    title: 'Nice, cozy, warm big bed apartment',
    preview: 'img/apartment-03.jpg',
    type: 'apartment',
    costPerNight: 180,
    rating: 5,
    isFavourites: false,
    isPremium: true,
    city: {
      name: 'Amsterdam',
      longitude: 4.939309666406198,
      latitude: 52.3809553943508,
      zoom: 5
    },
    reviews: [reviews[0]],
    offersNearby: []
  }
];
