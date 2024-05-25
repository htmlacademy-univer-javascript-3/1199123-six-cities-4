import { createReducer } from '@reduxjs/toolkit';
import { setUserDataLoadingStatus, updateAuthorizationStatus, updateLogin } from '../actions/userActions';
import { AuthorizationStatus } from '../../const';


export type InitialStateUser = {
  authorizationStatus: AuthorizationStatus;
  isUserDataLoading: boolean;
  userLogin: string | null;
}

const initialStateUser: InitialStateUser = {
  authorizationStatus: AuthorizationStatus.NOT_AUTHORIZED,
  isUserDataLoading: false,
  userLogin: null
};

const userReducer = createReducer(initialStateUser, (builder) => {
  builder
    .addCase(updateAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserDataLoadingStatus, (state, action) => {
      state.isUserDataLoading = action.payload;
    })
    .addCase(updateLogin, (state, action) => {
      state.userLogin = action.payload;
    });
});

export {userReducer};
