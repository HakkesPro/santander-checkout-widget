import type { FC } from 'react';
import { Grid } from 'semantic-ui-react';
import { useAppSelector } from 'redux/redux-hooks';
import type {
  Theme,
  Translations,
  PaymentDetailsState,
} from 'types/global-types';
import { getFixedAmount } from 'utils/helpers';

interface Props {
  translations: Translations,
  theme: Theme
}

const Footer:FC<Props> = ({
  translations,
  theme,
}): JSX.Element => {
  const {
    months,
    selectedAmount,
    totalCost,
    nomInterestRate,
  }: PaymentDetailsState = useAppSelector(({ paymentDetails }) => paymentDetails);

  const fixedTotalAmount = getFixedAmount(selectedAmount || 0, months);
  const fixedTotalCost = getFixedAmount(totalCost, 1);

  const resumeFontSize = `${(Number(theme.headerFontSize.split('px')[0]) - 1)}px`;

  return (
    <Grid.Row columns={1} textAlign="left">
      <Grid.Column>
        <p style={{ fontSize: resumeFontSize }}>
          { translations.inTotal }: { fixedTotalAmount } | { translations.effectiveInterestRate }:
          <span> { nomInterestRate }% | { translations.cost }: { fixedTotalCost } </span>
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
