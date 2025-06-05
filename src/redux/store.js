import { configureStore } from '@reduxjs/toolkit';
import scoreReducer from './scoreSlice';
import todayListReducer from './todayListSlice';

export const store = configureStore({
  reducer: {
    score: scoreReducer,
    todayList: todayListReducer,
  },
});
