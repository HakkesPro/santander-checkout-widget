import type { FC } from 'react';
import { Grid } from 'semantic-ui-react';
import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from 'redux/redux-hooks';
import type { AppDispatch } from 'redux/store';
import type { Translations, PaymentDetailsState } from 'types/global-types';
import {
  toPascalCase,
  getFixedAmount,
} from 'utils/helpers';
import calulator from 'utils/calculator';
import { paymentActions } from 'redux/actions';

interface Props {
  translations: Translations
}

const Body:FC<Props> = ({ translations }): JSX.Element => {
  const {
    selectedAmount,
    loanAmount,
    nomInterestRate,
    startupFee,
    termFee,
  }: PaymentDetailsState = useAppSelector(({ paymentDetails }) => paymentDetails);
  const dispatch: AppDispatch = useAppDispatch();
  const months: number = useAppSelector(({ paymentDetails }) => paymentDetails.months);

  const [fixedTotalAmount, setFixedTotalAmount] = useState<string>('0');
  const [fixedTotalCost, setFixedTotalCost] = useState<string>('0');
  const [effectiveInterestRate, setEffectiveInterestRate] = useState<string>('0');

  useEffect(() => {
    if (selectedAmount) {
      const result = calulator.Calculate(
        loanAmount,
        nomInterestRate,
        selectedAmount,
        startupFee,
        termFee,
      );
      const totalPurchaseCost = Number(result.totalPurchaseCost.replace(' ', ''));
      setEffectiveInterestRate(result.effectiveRate);
      setFixedTotalAmount(getFixedAmount(totalPurchaseCost, 1));
      setFixedTotalCost(getFixedAmount((totalPurchaseCost - loanAmount), 1));
      dispatch(paymentActions.setMonths(result.months));
    }
  }, [dispatch, loanAmount, selectedAmount, nomInterestRate, startupFee, termFee]);

  return (
    <>
      <Grid.Row>
        <Grid.Column width={8}>
          <Grid verticalAlign="middle">
            <Grid.Row columns={2}>
              <Grid.Column textAlign="left">
                <p>{ toPascalCase(translations.months) }:</p>
              </Grid.Column>
              <Grid.Column textAlign="left">
                <p>{ months } { translations.monthsAlias }</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>

        <Grid.Column width={8}>
          <Grid verticalAlign="middle">
            <Grid.Row columns={2}>
              <Grid.Column width={8} textAlign="left">
                <p>{ translations.effectiveInterestRateAlias }:</p>
              </Grid.Column>
              <Grid.Column width={8} textAlign="left">
                <p>{ effectiveInterestRate }%</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={8}>
          <Grid verticalAlign="middle">
            <Grid.Row columns={2}>
              <Grid.Column textAlign="left">
                <p>{ translations.inTotal }:</p>
              </Grid.Column>
              <Grid.Column textAlign="left">
                <p>{ fixedTotalAmount }</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>

        <Grid.Column width={8}>
          <Grid verticalAlign="middle">
            <Grid.Row columns={9}>
              <Grid.Column width={8} textAlign="left">
                <p>{ translations.cost }:</p>
              </Grid.Column>
              <Grid.Column width={8} textAlign="left">
                <p>{ fixedTotalCost }</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid.Row>
    </>
  );
};

export default Body;
