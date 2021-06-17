import type { FC, SyntheticEvent } from 'react';
import { useEffect } from 'react';
import { Grid, Dropdown } from 'semantic-ui-react';
import Logo from '../Logo';
import type { Translations, Theme, AmountOption } from 'types/global-types';
import type { AppDispatch } from 'redux/store';
import { useAppDispatch } from 'redux/redux-hooks';
import { amountOptionsFixed } from 'utils/helpers';
import { paymentActions } from 'redux/actions';

interface Props {
  translations: Translations,
  theme: Theme,
  amountOptions: Array<AmountOption>
}

const Header:FC<Props> = ({ translations, theme, amountOptions: a }): JSX.Element => {
  const dispatch: AppDispatch = useAppDispatch();
  const amountOptions = amountOptionsFixed(a);

  const updateSelectedAmount = (e: SyntheticEvent, { value }: any): void => {
    dispatch(paymentActions.setSelectedAmount(Number(value)));
  };

  const defaultValue = amountOptions[0].value;

  useEffect(() => {
    dispatch(paymentActions.setSelectedAmount(defaultValue));
  }, [dispatch, defaultValue]);

  createStyleTag(theme);

  return (
    <Grid.Row>

      <Grid.Column width={8}>
        <Grid verticalAlign="middle">
          <Grid.Row columns={2}>
            <Grid.Column textAlign="left">
              <p>{ translations.monthlyAmount }:</p>
            </Grid.Column>
            <Grid.Column textAlign="left">
              <Dropdown
                defaultValue={defaultValue}
                scrolling
                options={amountOptions}
                onChange={updateSelectedAmount}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Grid.Column>

      <Grid.Column className="test" width={8}>
        <Logo />
      </Grid.Column>

    </Grid.Row>
  );
};

const createStyleTag = (theme: Theme) => {
  const style = document.createElement('style');
  style.innerText = `
    #classic-container > div > div:nth-child(1) >
    div.eight.wide.column > div > div > div.left.aligned.column > div {
      background: #ffffff;
      width: 90px;
      padding: 1px 5px;
      border: 1px solid ${theme.border};
      border-radius: ${theme.borderRadius};
    }
  `;
  window.self.document.body.appendChild(style);
};

export default Header;
