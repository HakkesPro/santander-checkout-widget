import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { Config, Theme } from 'types/global-types';
import { initialConfig, initialTheme } from './initialStates';

export interface InitialState {
  config: Config,
  theme: Theme
}

const initialState: InitialState = {
  config: initialConfig(),
  theme: initialTheme(),
};

export const contextSlice = createSlice({
  name: 'Context',
  initialState,
  reducers: {
    setConfig: (state, action: PayloadAction<Partial<Config>>) => {
      state.config = {
        ...state.config,
        ...action.payload,
      };
    },
    setTheme: (state, action: PayloadAction<Partial<Theme>>) => {
      state.theme = {
        ...state.theme,
        ...action.payload,
      };
    },
  },
});

export const contextActions = { ...contextSlice.actions };

export default contextSlice.reducer;
