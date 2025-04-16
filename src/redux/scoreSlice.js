import { createSlice } from '@reduxjs/toolkit';

const storedScore = localStorage.getItem('score');
const storedClicks = localStorage.getItem('clickCount');

const scoreSlice = createSlice({
  name: 'score',
  initialState: {
    value: storedScore ? parseInt(storedScore) : 0,
  },
  reducers: {
    addScore: (state, action) => {
      state.value += action.payload;
      localStorage.setItem('score', state.value);
    },
    resetScore: (state) => {
      state.value = 0;
      localStorage.removeItem('score');
    },
  },
});
const clickSlice = createSlice({
  name: 'click',
  initialState: {
    value: storedClicks ? parseInt(storedClicks) : 0,
  },
  reducers: {
    incrementClick: (state) => {
      state.value += 1;
      localStorage.setItem('clickCount', state.value);
    },
    resetClick: (state) => {
      state.value = 0;
      localStorage.removeItem('clickCount');
    },
  },
});
export const { addScore, resetScore } = scoreSlice.actions;
export default scoreSlice.reducer;

export const { incrementClick, resetClick } = clickSlice.actions;
export const {}=clickSlice.reducer;
