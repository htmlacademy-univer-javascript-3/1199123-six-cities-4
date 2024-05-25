import {createAction} from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../const';

export const updateAuthorizationStatus = createAction<AuthorizationStatus>('user/updateAuthorizationStatus');

export const setUserDataLoadingStatus = createAction<boolean>('user/setUserDataLoadingStatus');

export const updateLogin = createAction<string | null>('user/updateLogin');
