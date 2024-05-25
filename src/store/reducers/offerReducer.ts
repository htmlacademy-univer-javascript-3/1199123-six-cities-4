import { createReducer } from '@reduxjs/toolkit';
import { setLoadingStatus, updateCity, updateOffer, updateOffers, updateReviewComments } from '../actions/offerActions';
import { CompleteOffer, OfferType } from '../../types/offer';
import { Review } from '../../types/review';


export type InitialStateOffer = {
  city: string;
  offers: OfferType[];
  cityOffers: OfferType[];
  isLoading: boolean;
  currentOffer: CompleteOffer | undefined;
  currentOfferReviews: Review[];
}

const initialStateOffer: InitialStateOffer = {
  city: 'Paris',
  offers: [],
  cityOffers: [],
  isLoading: true,
  currentOffer: undefined,
  currentOfferReviews: []
};

const offerReducer = createReducer(initialStateOffer, (builder) => {
  builder
    .addCase(updateCity, (state, action) => {
      state.city = action.payload;
      state.cityOffers = state.offers.filter((obj) => obj.city.name === state.city);
    })
    .addCase(updateOffers, (state, action) => {
      state.offers = action.payload;
      state.cityOffers = state.offers.filter((obj) => obj.city.name === state.city);
    })
    .addCase(setLoadingStatus, (state, action) => {
      state.isLoading = action.payload;
    })
    .addCase(updateOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(updateReviewComments, (state, action) => {
      state.currentOfferReviews = action.payload;
    });
});

export {offerReducer};
