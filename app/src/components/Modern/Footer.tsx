import type { FC } from 'react';
import { Grid } from 'semantic-ui-react';
import { useAppSelector } from 'redux/redux-hooks';
import type {
  Theme,
  Translations,
  Config,
  PaymentDetailsState,
} from 'types/global-types';
import {
  getFixedTotalAmount,
  getFixedTotalCost,
} from 'utils/helpers';

interface Props {
  translations: Translations,
  theme: Theme,
  config: Config
}

const Footer:FC<Props> = ({
  translations,
  theme,
  config,
}): JSX.Element => {
  const { effectiveInterestRate } = config;
  const {
    months,
    selectedAmount,
  }: PaymentDetailsState = useAppSelector(({ paymentDetails }) => paymentDetails);

  const fixedTotalAmount = getFixedTotalAmount(selectedAmount || 0, months);

  return (
    <Grid.Row columns={1} textAlign="left">
      <Grid.Column>
        <p style={{ fontSize: theme.footerFontSize }}>
          { translations.inTotal }: { fixedTotalAmount } | { translations.effectiveInterestRate }:
          <span> { effectiveInterestRate }% | { translations.cost }: { getFixedTotalCost() } </span>
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
