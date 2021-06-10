import type { FC } from 'react';
import { Grid } from 'semantic-ui-react';
import { useAppSelector } from 'redux/redux-hooks';
import type {
  Theme,
  Translations,
  Config,
} from 'types/global-types';
import { getCostFromInterestRate, amountWithCode, getCurrencyCodeByCountry } from 'utils/helpers';

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
  const months: number = useAppSelector(({ paymentDetails }) => paymentDetails.months);
  const selectedAmount: null | number = useAppSelector(({ paymentDetails }) =>
    paymentDetails.selectedAmount);

  const { localeId, effectiveInterestRate, country } = config;

  const cost: number = getCostFromInterestRate({
    amount: selectedAmount || 0,
    months,
    effectiveInterestRate,
  });

  const fixedCost = amountWithCode(localeId, getCurrencyCodeByCountry(country), cost);
  console.log(fixedCost);

  // Need to fix interest calculate rate, the above is not correct I think

  return (
    <Grid.Row columns={1} textAlign="left">
      <Grid.Column>
        <p style={{ fontSize: theme.footerFontSize }}>
          { translations.inTotal }: { fixedCost } | { translations.effectiveInterestRate }:
          <span> { effectiveInterestRate }% | { translations.cost }: { fixedCost } </span>
        </p>
        <p style={{
          fontSize: theme.footerFontSize,
          marginTop: '-10px',
          // marginBottom: '-10px',
        }}
        >
          { translations.footer }
        </p>
      </Grid.Column>
    </Grid.Row>
  );
};

export default Footer;
