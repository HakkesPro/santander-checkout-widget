import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface InitialState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: InitialState = {
  value: 0,
  status: 'idle',
};

export const contextSlice = createSlice({
  name: 'Context',
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const contextActions = { ...contextSlice.actions };

export default contextSlice.reducer;
