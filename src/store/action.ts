import {createAction} from '@reduxjs/toolkit';
import { OfferType } from '../types/offer';

export const updateOffers = createAction<OfferType[]>('updateOffers');

export const updateCity = createAction<string>('updateCity');

export const setLoadingStatus = createAction<boolean>('data/setLoadingStatus');

