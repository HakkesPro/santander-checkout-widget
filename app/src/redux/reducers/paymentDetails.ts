import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { PaymentDetailsState, AmountOption } from 'types/global-types';
import { intialAmountOptions } from '../initialStates';

const defaultProductAmount: number = 100888;

const initialState: PaymentDetailsState = {
  months: 0,
  amountOptions: intialAmountOptions(defaultProductAmount),
  selectedAmount: null,
  productAmount: defaultProductAmount,
  totalCost: 0,
  nomInterestRate: 21.00,
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
    setSelectedAmount: (state, action: PayloadAction<null | number>) => {
      state.selectedAmount = action.payload;
    },
    setTotalCost: (state, action: PayloadAction<number>) => {
      state.totalCost = action.payload;
    },
  },
});

export const paymentActions = { ...paymentSlice.actions };

export default paymentSlice.reducer;
