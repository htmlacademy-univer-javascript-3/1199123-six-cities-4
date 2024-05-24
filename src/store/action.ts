import {createAction} from '@reduxjs/toolkit';
import { CompleteOffer, OfferType } from '../types/offer';
import { Review } from '../types/review';
import { AuthorizationStatus } from '../const';

export const updateOffers = createAction<OfferType[]>('updateOffers');

export const updateCity = createAction<string>('updateCity');

export const setLoadingStatus = createAction<boolean>('data/setLoadingStatus');

export const updateOffer = createAction<CompleteOffer>('data/updateOffer');

export const updateReviewComments = createAction<Review[]>('data/updateReviewComments');

export const updateAuthorizationStatus = createAction<AuthorizationStatus>('user/updateAuthorizationStatus');

export const setUserDataLoadingStatus = createAction<boolean>('user/setUserDataLoadingStatus');

export const updateLogin = createAction<string | null>('user/updateLogin');
