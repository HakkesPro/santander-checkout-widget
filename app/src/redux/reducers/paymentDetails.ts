import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { PaymentDetailsState, AmountOption } from 'types/global-types';
import { intialAmountOptions } from '../initialStates';

const defaultLoanAmount: number = 4222;

const initialState: PaymentDetailsState = {
  amountOptions: intialAmountOptions(defaultLoanAmount),
  months: 0,
  selectedAmount: null,
  loanAmount: defaultLoanAmount,
  nomInterestRate: 21.00,
  termFee: 50,
  startupFee: 50,
  countrySpecifics: null,
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
    setLoanAmount: (state, action: PayloadAction<number>) => {
      state.loanAmount = action.payload;
    },
  },
});

export const paymentActions = { ...paymentSlice.actions };

export default paymentSlice.reducer;
