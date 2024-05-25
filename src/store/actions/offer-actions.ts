import {createAction} from '@reduxjs/toolkit';
import { CompleteOffer, OfferType } from '../../types/offer';
import { Review } from '../../types/review';

export const updateOffers = createAction<OfferType[]>('updateOffers');

export const updateCity = createAction<string>('updateCity');

export const setLoadingStatus = createAction<boolean>('data/setLoadingStatus');

export const updateOffer = createAction<CompleteOffer>('data/updateOffer');

export const updateReviewComments = createAction<Review[]>('data/updateReviewComments');
