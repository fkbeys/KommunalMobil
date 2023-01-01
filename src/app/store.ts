import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import LoginSlice from '../Slices/LoginSlice';

export const store = configureStore({
  reducer: {
    LoginSlice: LoginSlice.reducer,

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
