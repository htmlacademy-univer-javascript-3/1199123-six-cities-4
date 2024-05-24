import { createReducer } from '@reduxjs/toolkit';
import { setLoadingStatus, updateCity, updateOffers } from './action';
import { OfferType } from '../types/offer';


export type InitialState = {
  city: string;
  offers: OfferType[];
  cityOffers: OfferType[];
  isLoading: boolean;
}

const initialState: InitialState = {
  city: 'Paris',
  offers: [],
  cityOffers: [],
  isLoading: true
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
    });
});

export {reducer};
