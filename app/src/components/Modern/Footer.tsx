import type { FC } from 'react';
import { Grid } from 'semantic-ui-react';
import { useAppSelector } from 'redux/redux-hooks';
import type { Theme, Translations, LocaleIds } from 'types/global-types';
import { getCost } from 'utils/helpers';

interface Props {
  translations: Translations,
  theme: Theme,
  localeId: LocaleIds,
  effectiveInterestRate: number
}

const Footer:FC<Props> = ({
  translations,
  theme,
  localeId,
  effectiveInterestRate,
}): JSX.Element => {
  const months: number = useAppSelector(({ paymentDetails }) => paymentDetails.months);

  const cost = getCost({
    localeId,
    currencyCode: translations.currencyCode,
    months,
    effectiveInterestRate,
  });

  console.log(cost);

  return (
    <Grid.Row columns={1} textAlign="left">
      <Grid.Column>
        <p style={{ fontSize: theme.footerFontSize }}>
          { translations.inTotal }: dsad
        </p>
      </Grid.Column>
    </Grid.Row>
  );
};

export default Footer;
