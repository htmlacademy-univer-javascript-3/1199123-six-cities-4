import { createReducer } from '@reduxjs/toolkit';
import { offers } from '../mocks/offers';
import { updateOffers } from './action';

const initialState = {
  city: 'Paris',
  offers: offers
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateOffers, (state, action) => {
      state.city = action.payload;
      state.offers = offers;
    });
});

export {reducer};
