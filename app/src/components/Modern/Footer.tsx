import type { FC } from 'react';
import { Grid } from 'semantic-ui-react';
import { useAppSelector } from 'redux/redux-hooks';
import type {
  Theme,
  Translations,
  Config,
  PaymentDetailsState,
} from 'types/global-types';
import { getFixedAmount } from 'utils/helpers';

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
    totalCost,
  }: PaymentDetailsState = useAppSelector(({ paymentDetails }) => paymentDetails);

  const fixedTotalAmount = getFixedAmount(selectedAmount || 0, months);
  const fixedTotalCost = getFixedAmount(totalCost, 1);

  return (
    <Grid.Row columns={1} textAlign="left">
      <Grid.Column>
        <p style={{ fontSize: theme.footerFontSize }}>
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
