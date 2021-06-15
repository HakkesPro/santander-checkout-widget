import type { FC } from 'react';
import { Grid } from 'semantic-ui-react';
import { useAppSelector } from 'redux/redux-hooks';
import type { Translations, PaymentDetailsState } from 'types/global-types';
import { toPascalCase } from 'utils/helpers';
import { useCalulate } from 'utils/custom-hooks';

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
  const months: number = useAppSelector(({ paymentDetails }) => paymentDetails.months);

  const {
    fixedTotalAmount,
    fixedTotalCost,
    effectiveInterestRate,
  } = useCalulate({
    selectedAmount,
    loanAmount,
    nomInterestRate,
    startupFee,
    termFee,
  });

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
