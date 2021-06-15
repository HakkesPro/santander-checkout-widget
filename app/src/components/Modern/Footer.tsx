import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { Grid } from 'semantic-ui-react';
import { useAppSelector, useAppDispatch } from 'redux/redux-hooks';
import type {
  Theme,
  Translations,
  PaymentDetailsState,
} from 'types/global-types';
import { getFixedAmount } from 'utils/helpers';
import calulator from 'utils/calculator';
import type { AppDispatch } from 'redux/store';
import { paymentActions } from 'redux/actions';

interface Props {
  translations: Translations,
  theme: Theme
}

const Footer:FC<Props> = ({
  translations,
  theme,
}): JSX.Element => {
  const {
    selectedAmount,
    loanAmount,
    nomInterestRate,
    termFee,
    startupFee,
  }: PaymentDetailsState = useAppSelector(({ paymentDetails }) => paymentDetails);
  const dispatch: AppDispatch = useAppDispatch();

  const [fixedTotalAmount, setFixedTotalAmount] = useState<string>('0');
  const [fixedTotalCost, setFixedTotalCost] = useState<string>('0');
  const [effectiveInterestRate, setEffectiveInterestRate] = useState<string>('0');

  const resumeFontSize = `${(Number(theme.headerFontSize.split('px')[0]) - 1)}px`;

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
    <Grid.Row columns={1} textAlign="left">
      <Grid.Column>
        <p style={{ fontSize: resumeFontSize }}>
          { translations.inTotal }: { fixedTotalAmount } | { translations.effectiveInterestRate }:
          <span> { effectiveInterestRate }% | { translations.cost }: { fixedTotalCost } </span>
        </p>
        <p style={{
          fontSize: theme.footerFontSize,
          marginTop: '-10px',
        }}
        >
          { translations.footer }
        </p>
      </Grid.Column>
    </Grid.Row>
  );
};

export default Footer;
