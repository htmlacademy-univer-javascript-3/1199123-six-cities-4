import { createReducer } from '@reduxjs/toolkit';
import { OfferType } from '../../types/offer';
import { setFavoritesLoadingStatus, updateFavorites, updateFavoritesCount } from '../actions/favoritesActions';

export type InitialStateFavorite = {
  favorites: OfferType[];
  favoritesCount: number;
  isFavoriteLoading: boolean;
}

const initialStateFavorite = {
  favorites: [] as OfferType[],
  favoritesCount: 0,
  isFavoriteLoading: true
};

const favoritesReducer = createReducer(initialStateFavorite, (builder) => {
  builder
    .addCase(setFavoritesLoadingStatus, (state, action) => {
      state.isFavoriteLoading = action.payload;
    })
    .addCase(updateFavorites, (state, action) => {
      state.favorites = action.payload;
      state.favoritesCount = state.favorites.length;
    })
    .addCase(updateFavoritesCount, (state, action) => {
      state.favoritesCount = action.payload;
    });
});

export {favoritesReducer};
