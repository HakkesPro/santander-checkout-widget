import type { FC } from 'react';
import { Grid, Input, Dropdown } from 'semantic-ui-react';
import { useAppSelector } from 'redux/redux-hooks';
import type { Translations, Theme, PaymentDetailsState } from 'types/global-types';

const Selections:FC = () => {
  const paymentContext: PaymentDetailsState = useAppSelector(({ paymentDetails }) => paymentDetails);
  const translations: Translations = useAppSelector(({ context }) => context.translations);
  const theme: Theme = useAppSelector(({ context }) => context.theme);

  const { months, amountOptions } = paymentContext;

  const monthsAliasSplit = translations.monthsAlias.split('');
  const monthsAlias = monthsAliasSplit[0].toUpperCase() + monthsAliasSplit.splice(1).join('');

  createStyleTag(theme.borderRadius);

  return (
    <Grid.Row id="selections-modern-container" centered>
      <Grid.Column>
        <Input
          labelPosition="left corner"
          label={monthsAlias}
          disabled
          value={`${months} ${translations.months}`}
        />
      </Grid.Column>
      <Grid.Column>
        <Dropdown
          labeled
          placeholder={translations.monthlyAmount}
          fluid
          selection
          options={amountOptions}
        />
      </Grid.Column>
    </Grid.Row>
  );
};

const createStyleTag = (borderRadius: string) => {
  const style = document.createElement('style');
  style.innerText = `
  .ui.input>input,
  .ui.fluid.dropdown {
    border-radius: ${borderRadius}!important;
  }
  `;
  window.self.document.body.appendChild(style);
};

export default Selections;
