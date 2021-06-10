import type { FC } from 'react';
import { Grid, Input, Dropdown } from 'semantic-ui-react';
import { useAppSelector } from 'redux/redux-hooks';
import type { Translations, Theme, PaymentDetailsState } from 'types/global-types';
import { amountWithCode } from 'utils/helpers';

interface Props {
  translations: Translations,
  theme: Theme,
  localeId: string
}

const Selections:FC<Props> = ({ translations, theme, localeId }) => {
  const paymentContext: PaymentDetailsState = useAppSelector(({ paymentDetails }) => paymentDetails);

  const { months, amountOptions } = paymentContext;

  const monthsAliasSplit = translations.monthsAlias.split('');
  const monthsAlias = monthsAliasSplit[0].toUpperCase() + monthsAliasSplit.splice(1).join('');

  const amountOptionsFixed = amountOptions.map((option) => ({
    ...option,
    text: amountWithCode(localeId, translations.currencyCode, option.value),
  }));

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
          options={amountOptionsFixed}
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
