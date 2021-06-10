import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { PaymentDetailsState, AmountOption } from 'types/global-types';
import { intialAmountOptions } from '../initialStates';

const initialState: PaymentDetailsState = {
  months: 12,
  amountOptions: intialAmountOptions(),
};

export const paymentSlice = createSlice({
  name: 'PaymentDetails',
  initialState,
  reducers: {
    setMonths: (state, action: PayloadAction<number>) => {
      state.months = action.payload;
    },
    setAmountOptions: (state, action: PayloadAction<AmountOption[]>) => {
      state.amountOptions = action.payload;
    },
  },
});

export const paymentActions = { ...paymentSlice.actions };

export default paymentSlice.reducer;
