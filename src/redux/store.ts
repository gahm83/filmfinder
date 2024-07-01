import type { Action, ThunkAction } from '@reduxjs/toolkit';
import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { counterSlice } from '@/redux/features/counter/counterSlice';
import { quotesApiSlice } from '@/redux/features/quotes/quotesApiSlice';

const rootReducer = combineSlices(counterSlice, quotesApiSlice);
export type RootState = ReturnType<typeof rootReducer>;

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(quotesApiSlice.middleware);
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
