import { createReducer } from '@reduxjs/toolkit';
import { setLoadingStatus, setUserDataLoadingStatus, updateAuthorizationStatus, updateCity, updateLogin, updateOffer, updateOffers, updateReviewComments } from './action';
import { CompleteOffer, OfferType } from '../types/offer';
import { Review } from '../types/review';
import { AuthorizationStatus } from '../const';


export type InitialState = {
  city: string;
  offers: OfferType[];
  cityOffers: OfferType[];
  isLoading: boolean;
  currentOffer: CompleteOffer | undefined;
  currentOfferReviews: Review[];
  authorizationStatus: AuthorizationStatus;
  isUserDataLoading: boolean;
  userLogin: string | null;
}

const initialState: InitialState = {
  city: 'Paris',
  offers: [],
  cityOffers: [],
  isLoading: true,
  currentOffer: undefined,
  currentOfferReviews: [],
  authorizationStatus: AuthorizationStatus.NOT_AUTHORIZED,
  isUserDataLoading: false,
  userLogin: null
};

const reducer = createReducer(initialState, (builder) => {
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
    })
    .addCase(updateAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserDataLoadingStatus, (state, action) => {
      state.isUserDataLoading = action.payload;
    })
    .addCase(updateLogin, (state, action) => {
      state.userLogin = action.payload;
    });
});

export {reducer};
