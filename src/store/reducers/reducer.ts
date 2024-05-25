import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './userReducer';
import { offerReducer } from './offerReducer';

export const reducer = combineReducers({
  offer: offerReducer,
  user: userReducer
});
