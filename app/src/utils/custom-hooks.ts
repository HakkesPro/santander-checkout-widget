/* eslint-disable import/prefer-default-export */
import { useState, useEffect } from 'react';
import calulator from 'utils/calculator';
import { getFixedAmount } from 'utils/helpers';
import { paymentActions } from 'redux/actions';
import { store } from 'redux/store';

interface UseCalulate {
  selectedAmount: null | number,
  loanAmount: number,
  nomInterestRate: number,
  startupFee: number,
  termFee: number
}
export const useCalulate = ({
  selectedAmount,
  loanAmount,
  nomInterestRate,
  startupFee,
  termFee,
}: UseCalulate) => {
  const initialState = {
    fixedTotalAmount: '0',
    fixedTotalCost: '0',
    effectiveInterestRate: '0',
  };
  const [state, setState] = useState(initialState);

  useEffect(() => {
    if (selectedAmount) {
      // We want to update this whenever selectedAmount is changed
      const result = calulator.Calculate(
        loanAmount,
        nomInterestRate,
        selectedAmount,
        startupFee,
        termFee,
      );
      const totalPurchaseCost = Number(result.totalPurchaseCost.replace(' ', ''));
      setState({
        fixedTotalAmount: getFixedAmount(totalPurchaseCost, 1),
        fixedTotalCost: getFixedAmount((totalPurchaseCost - loanAmount), 1),
        effectiveInterestRate: result.effectiveRate,
      });
      store.dispatch(paymentActions.setMonths(result.months));
    }
  }, [selectedAmount, loanAmount, nomInterestRate, startupFee, termFee]);

  return state;
};
