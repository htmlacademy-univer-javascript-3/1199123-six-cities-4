import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducers/reducer';
import { createAPI } from '../api/api';

const api = createAPI();
export const store = configureStore({ reducer, middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    }
  })
});
