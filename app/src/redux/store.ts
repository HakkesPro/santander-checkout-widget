import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import contextReducer from './contextReducer';

export const store = configureStore({
  reducer: {
    counter: contextReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
