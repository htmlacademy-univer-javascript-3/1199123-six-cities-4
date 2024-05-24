import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/index';
import { updateOffers, setLoadingStatus } from '../store/action';
import { OfferType } from '../types/offer';


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
