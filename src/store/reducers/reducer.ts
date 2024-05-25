import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './user-reducer';
import { offerReducer } from './offer-reducer';
import { favoritesReducer } from './favorites-reducer';

export const reducer = combineReducers({
  offer: offerReducer,
  user: userReducer,
  favorites: favoritesReducer
});
