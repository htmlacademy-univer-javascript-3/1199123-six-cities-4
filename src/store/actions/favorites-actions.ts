import { createAction } from '@reduxjs/toolkit';
import { OfferType } from '../../types/offer';

export const setFavoritesLoadingStatus = createAction<boolean>('favorites/setFavoritesLoadingStatus');

export const updateFavorites = createAction<OfferType[]>('favorites/updateFavorites');

export const updateFavoritesCount = createAction<number>('favorites/updateFavoritesCount');
