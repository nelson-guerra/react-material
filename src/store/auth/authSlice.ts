import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { IAuthState } from './types';

const initialAuthState: IAuthState = {
   user: null,
   accessToken: null,
};

const authSlice = createSlice({
   name: 'auth',
   initialState: initialAuthState,
   reducers: {
      actionLogin: (state, action) => {
         state.user = action.payload.user;
         state.accessToken = action.payload?.token;
      },
      actionLogout: () => initialAuthState,
   },
});

const persistConfig = {
   key: 'v100-demo-auth',
   storage,
   whitelist: ['user', 'accessToken'],
   blacklist: [],
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);

export const { actionLogin, actionLogout } = authSlice.actions;
