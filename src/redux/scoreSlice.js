import { createSlice } from '@reduxjs/toolkit';

// 嘗試從 localStorage 初始化
const storedScore = localStorage.getItem('score');
const initialState = {
  value: storedScore ? parseInt(storedScore) : 0,
};

const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    addScore: (state, action) => {
      state.value += action.payload;
      localStorage.setItem('score', state.value); // 儲存到 localStorage
    },
    resetScore: (state) => {
      state.value = 0;
      localStorage.removeItem('score');
    },
  },
});

export const { addScore, resetScore } = scoreSlice.actions;
export default scoreSlice.reducer;
