import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    theme : 'light'
  },
  reducers: {
    increment: (state) => {
      state.value += 10;
    },
    decrement: (state) => {
      state.value -= 10;
    },
    changeTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    }
  },
});

export const { increment, decrement ,changeTheme } = counterSlice.actions;

export default counterSlice.reducer;