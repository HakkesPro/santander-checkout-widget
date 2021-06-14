import type { FC, SyntheticEvent } from 'react';
import { useEffect } from 'react';
import { Grid, Input, Dropdown } from 'semantic-ui-react';
import { useAppSelector, useAppDispatch } from 'redux/redux-hooks';
import type { AppDispatch } from 'redux/store';
import type {
  Translations,
  Theme,
} from 'types/global-types';
import { LabelPosition } from 'types/global-types';
import { amountOptionsFixed, toPascalCase } from 'utils/helpers';
import { updatePaymentDetails } from 'utils/payment-helpers';
import { paymentActions } from 'redux/actions';

interface Props {
  translations: Translations,
  theme: Theme,
  labelPosition: LabelPosition
}

const Selections:FC<Props> = ({ translations, theme, labelPosition }) => {
  const dispatch: AppDispatch = useAppDispatch();

  const months: number = useAppSelector(({ paymentDetails }) => paymentDetails.months);
  const productAmount: number = useAppSelector(({ paymentDetails }) => paymentDetails.productAmount);

  const monthsAlias = toPascalCase(translations.monthsAlias);

  const amountOptions = amountOptionsFixed();

  const defaultValue = amountOptions[0].value;

  const updateSelectedAmount = (e: SyntheticEvent, { value }: any): void => {
    updatePaymentDetails(Number(value), dispatch, paymentActions, productAmount);
  };

  useEffect(() => {
    updatePaymentDetails(defaultValue, dispatch, paymentActions, productAmount);
  }, [dispatch, defaultValue, productAmount]);

  createStyleTag(theme.borderRadius, (labelPosition === LabelPosition.RIGHT));

  return (
    <Grid.Row id="selections-modern-container" centered>
      <Grid.Column>
        <Input
          labelPosition={labelPosition === LabelPosition.LEFT ? 'left corner' : 'right corner'}
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
          defaultValue={defaultValue}
          options={amountOptions}
          onChange={updateSelectedAmount}
        />
      </Grid.Column>
    </Grid.Row>
  );
};

const createStyleTag = (borderRadius: string, labelRight?: boolean) => {
  const style = document.createElement('style');
  style.innerText = `
  .ui.input>input,
  .ui.fluid.dropdown {
    border-radius: ${borderRadius}!important;
  }
  ${labelRight ? `
    .ui.corner.label:after {
      position: absolute;
      content: "";
      right: -1px;
      top: 0;
      z-index: -1;
      width: 0;
      height: 0;
      background-color: transparent!important;
      border-top: 0 solid transparent;
      border-right: 6em solid transparent;
      border-bottom: 4em solid transparent;
      border-left: 0 solid transparent;
      border-right-color: inherit;
      transition: border-color .1s ease;
    }
  ` : `
  .ui.left.corner.label:after {
    border-top: 4em solid transparent;
    border-right: 4.8em solid transparent;
    border-bottom: 0 solid transparent;
    border-left: 0 solid transparent;
    border-top-color: inherit;
  }
  `}
  `;
  window.self.document.body.appendChild(style);
};

export default Selections;
