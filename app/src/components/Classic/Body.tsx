import type { FC } from 'react';
import { Grid } from 'semantic-ui-react';
import { useAppSelector } from 'redux/redux-hooks';
import type { Translations, Config, PaymentDetailsState } from 'types/global-types';
import {
  toPascalCase,
  getFixedAmount,
} from 'utils/helpers';

interface Props {
  translations: Translations
  config: Config
}

const Body:FC<Props> = ({ translations, config }): JSX.Element => {
  const {
    months,
    selectedAmount,
    totalCost,
  }: PaymentDetailsState = useAppSelector(({ paymentDetails }) => paymentDetails);
  const fixedTotalAmount: string = getFixedAmount(selectedAmount || 0, months);
  const fixedTotalCost = getFixedAmount(totalCost, 0);

  return (
    <>
      <Grid.Row>
        <Grid.Column width={9}>
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

        <Grid.Column width={7}>
          <Grid verticalAlign="middle">
            <Grid.Row columns={2}>
              <Grid.Column width={8} textAlign="left">
                <p>{ translations.effectiveInterestRateAlias }:</p>
              </Grid.Column>
              <Grid.Column width={8} textAlign="left">
                <p>{ config.effectiveInterestRate.toString().replace('.', ',') }%</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={9}>
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

        <Grid.Column width={7}>
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
