import type { FC, SyntheticEvent } from 'react';
import { Grid, Input, Dropdown } from 'semantic-ui-react';
import { useAppSelector, useAppDispatch } from 'redux/redux-hooks';
import type { AppDispatch } from 'redux/store';
import type {
  Translations,
  Theme,
  PaymentDetailsState,
  Config,
} from 'types/global-types';
import { amountWithCode, getCurrencyCodeByCountry } from 'utils/helpers';
import { paymentActions } from 'redux/actions';

interface Props {
  translations: Translations,
  theme: Theme,
  config: Config
}

const Selections:FC<Props> = ({ translations, theme, config }) => {
  const dispatch: AppDispatch = useAppDispatch();

  const paymentCtx: PaymentDetailsState = useAppSelector(({ paymentDetails }) => paymentDetails);

  const { localeId, country } = config;
  const { months, amountOptions } = paymentCtx;

  const monthsAliasSplit = translations.monthsAlias.split('');
  const monthsAlias = monthsAliasSplit[0].toUpperCase() + monthsAliasSplit.splice(1).join('');

  const amountOptionsFixed = amountOptions.map((option) => ({
    ...option,
    text: amountWithCode(localeId, getCurrencyCodeByCountry(country), option.value),
  }));

  const updateSelectedAmount = (e: SyntheticEvent, { value }: any): void => {
    dispatch(paymentActions.setSelectedAmount(Number(value)));
  };

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
          // defaultValue={amountOptionsFixed[0].value}
          options={amountOptionsFixed}
          onChange={updateSelectedAmount}
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
