import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/index';
import { updateOffers, setLoadingStatus, updateOffer, updateReviewComments } from '../store/actions/offer-actions';
import { updateLogin, updateAuthorizationStatus, setUserDataLoadingStatus } from '../store/actions/user-actions';
import { CompleteOffer, OfferType } from '../types/offer';
import { Review, ReviewData } from '../types/review';
import { AuthorizationData, UserData } from '../types/user';
import { AuthorizationStatus } from '../const';
import { dropToken, saveToken } from '../types/token';
import { setFavoritesLoadingStatus, updateFavorites } from '../store/actions/favorites-actions';
import { FavouritesData } from '../types/favorites';


export const fetchOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const { data } = await api.get<OfferType[]>('/offers');
      dispatch(updateOffers(data));
      dispatch(setLoadingStatus(true));
    } catch {
      dispatch(updateOffers([]));
    } finally {
      dispatch(setLoadingStatus(false));
    }
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
    try {
      const {data} = await api.get<Review[]>(`/comments/${id}`);
      dispatch(setLoadingStatus(true));
      dispatch(updateReviewComments(data));
    } catch {
      dispatch(updateReviewComments([]));
    } finally {
      dispatch(setLoadingStatus(false));
    }
  },
);

export const checkAuthorization = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/checkAuthorization',
  async (_arg, {dispatch, extra: api}) => {
    try {
      dispatch(setUserDataLoadingStatus(true));
      const {data: {email}} = await api.get<UserData>('/login');
      dispatch(updateLogin(email));
      dispatch(updateAuthorizationStatus(AuthorizationStatus.Authorized));
    } catch {
      dispatch(updateAuthorizationStatus(AuthorizationStatus.NotAuthorized));
    } finally {
      dispatch(setUserDataLoadingStatus(false));
    }
  },
);


export const loginAction = createAsyncThunk<void, AuthorizationData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    try {
      dispatch(setUserDataLoadingStatus(true));
      const {data: {token}} = await api.post<UserData>('/login', {email, password});
      dispatch(updateAuthorizationStatus(AuthorizationStatus.Authorized));
      dispatch(updateLogin(email));
      saveToken(token);
      dispatch(setUserDataLoadingStatus(false));
    } catch {
      dispatch(updateAuthorizationStatus(AuthorizationStatus.NotAuthorized));
      dispatch(setUserDataLoadingStatus(false));
    } finally {
      dispatch(setUserDataLoadingStatus(false));
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setUserDataLoadingStatus(true));
    await api.delete('/logout');
    dropToken();
    dispatch(updateAuthorizationStatus(AuthorizationStatus.NotAuthorized));
    dispatch(setUserDataLoadingStatus(false));
  },
);

export const postReview = createAsyncThunk<void, ReviewData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/login',
  async ({id, comment, rating}, {dispatch, extra: api}) => {
    dispatch(setUserDataLoadingStatus(true));
    await api.post<UserData>(`/comments/${id}`, {comment, rating});
    dispatch(setUserDataLoadingStatus(false));
  },
);


export const fetchFavorites = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'favorites/fetchFavorites',
  async (_arg, {dispatch, extra: api}) => {
    try {
      dispatch(setFavoritesLoadingStatus(true));
      const { data } = await api.get<OfferType[]>('/favorite');
      dispatch(updateFavorites(data));
    } catch {
      dispatch(updateFavorites([]));
    } finally {
      dispatch(setFavoritesLoadingStatus(false));
    }
  },
);

export const updateFavorite = createAsyncThunk<void, FavouritesData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'favorites/updateFavorite',
  async ({id, status}, {dispatch, extra: api}) => {
    dispatch(setFavoritesLoadingStatus(true));
    await api.post<UserData>(`/favorite/${id}/${status}`);
    dispatch(setFavoritesLoadingStatus(false));
  },
);
