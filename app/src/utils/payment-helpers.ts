/* eslint-disable import/prefer-default-export */
import type { AmountOption } from 'types/global-types';
import type { AppDispatch } from 'redux/store';

const generateAmountOptions = (arr: Array<any>) => {
  const amountOptions:Array<AmountOption> = [];
  arr.forEach((val) => {
    amountOptions.push({
      key: val,
      text: val.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,').replace(',', ' '),
      value: val,
    });
  });
  return amountOptions;
};

export const getPaymentIntervals = (totalAmount: number): Array<AmountOption> => {
  if (totalAmount >= 1990 && totalAmount <= 4999) {
    return generateAmountOptions([199, 399, 499]);
  }
  if (totalAmount >= 5000 && totalAmount <= 9965) {
    return generateAmountOptions([299, 499, 699]);
  }
  if (totalAmount >= 9966 && totalAmount <= 15000) {
    return generateAmountOptions([499, 799, 999]);
  }
  if (totalAmount >= 15001 && totalAmount <= 25000) {
    return generateAmountOptions([799, 1499, 2599]);
  }
  if (totalAmount >= 25001 && totalAmount <= 35000) {
    return generateAmountOptions([1099, 1499, 2599]);
  }
  if (totalAmount >= 35001 && totalAmount <= 45000) {
    return generateAmountOptions([1399, 1999, 2599]);
  }
  if (totalAmount >= 45001 && totalAmount <= 55000) {
    return generateAmountOptions([1699, 2199, 2999]);
  }
  if (totalAmount >= 55001 && totalAmount <= 75000) {
    return generateAmountOptions([2299, 3299, 4299]);
  }
  if (totalAmount >= 75001 && totalAmount <= 100000) {
    return generateAmountOptions([3299, 4299, 5299]);
  }
  if (totalAmount >= 100001 && totalAmount <= 150000) {
    return generateAmountOptions([4599, 5299, 6299]);
  }
  // Else
  return generateAmountOptions([0]);
};

export const updatePaymentDetails = (
  selectedAmount: number,
  loanAmount: number,
  dispatch: AppDispatch,
  paymentActions: any,
) => {
  // Need to fix this calculation of total product amount to interest fee and total cost.
  dispatch(paymentActions.setSelectedAmount(selectedAmount));
  dispatch(paymentActions.setMonths(Math.ceil(loanAmount / selectedAmount).toFixed(0)));
};
