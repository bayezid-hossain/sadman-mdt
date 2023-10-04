'use client';

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './AuthSlice';
import profileReducer from './ProfileSlice';
export const Store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer, // Include the authentication slice
    // Add other reducers as needed
  },
});
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
