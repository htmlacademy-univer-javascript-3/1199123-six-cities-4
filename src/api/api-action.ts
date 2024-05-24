import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/index';
import { updateOffers, setLoadingStatus, updateOffer, updateReviewComments } from '../store/action';
import { CompleteOffer, OfferType } from '../types/offer';
import { Review } from '../types/review';


export const fetchOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setLoadingStatus(true));

    const { data } = await api.get<OfferType[]>('/offers');
    dispatch(updateOffers(data));

    dispatch(setLoadingStatus(false));
  },
);


export const fetchSingleOffer = createAsyncThunk<void, { id: string | undefined }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchSingleOffer',
  async ({ id }, {dispatch, extra: api}) => {
    dispatch(setLoadingStatus(true));
    const { data } = await api.get<CompleteOffer>(`/offers/${id}`);
    dispatch(updateOffer(data));
    dispatch(setLoadingStatus(false));
  },
);

export const fetchReviewComments = createAsyncThunk<void, { id: string | undefined}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchReviewComments',
  async ({ id }, {dispatch, extra: api}) => {
    dispatch(setLoadingStatus(true));
    const {data} = await api.get<Review[]>(`/comments/${id}`);
    dispatch(updateReviewComments(data));
    dispatch(setLoadingStatus(false));
  },
);
