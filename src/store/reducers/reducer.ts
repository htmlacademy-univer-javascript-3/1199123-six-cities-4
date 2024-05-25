import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './userReducer';
import { offerReducer } from './offerReducer';
import { favoritesReducer } from './favoritesReducer';

export const reducer = combineReducers({
  offer: offerReducer,
  user: userReducer,
  favorites: favoritesReducer
});
