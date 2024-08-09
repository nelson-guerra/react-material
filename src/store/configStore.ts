import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { authReducer } from './auth/authSlice';

export const configStore = configureStore({
   reducer: {
      auth: authReducer,
   },
   middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof configStore.getState>;
export type AppDispatch = typeof configStore.dispatch;
export const persistor = persistStore(configStore);
