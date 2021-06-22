import type { FC, ReactNode } from 'react';
import { useAppSelector, useAppDispatch } from 'redux/redux-hooks';
import type { Theme, Config, PaymentDetailsState } from 'types/global-types';
import { Mode } from 'types/global-types';
import { isIframed } from 'utils/helpers';
import { paymentActions } from 'redux/actions';
import type { AppDispatch } from 'redux/store';
import { getPaymentIntervals } from 'utils/payment-helpers';

const getBoxShadow = (raised: number) => {
  const boxShadowOne = '0 1px 2px 0 rgb(34 36 38 / 15%)';
  const boxShadowTwo = '0 2px 4px 0 rgb(34 36 38 / 12%), 0 2px 10px 0 rgb(34 36 38 / 15%)';
  return raised === 1 ? boxShadowOne : boxShadowTwo;
};

const sectionStyles = (theme: Theme, config: Config) => {
  const raised = Number(theme.raised) ? getBoxShadow(Number(theme.raised)) : '';
  const width = Number(theme.raised) > 0 ? '98.5vw' : '99vw';
  return {
    maxHeight: config.containerHeight,
    maxWidth: config.containerWidth,
    height: '100vh',
    width,
    border: '1px solid',
    borderColor: theme.border,
    margin: isIframed() ? '15px' : '3px',
    padding: config.mode === Mode.MODERN ? '10px' : '5px 0',
    background: theme.background,
    color: theme.text,
    borderRadius: theme.borderRadius,
    WebkitBoxShadow: raised,
    boxShadow: raised,
  };
};

interface Props {
  children: ReactNode,
  id: string
}

const WidgetContainer: FC<Props> = ({ children, id }) => {
  const dispatch: AppDispatch = useAppDispatch();
  const theme: Theme = useAppSelector(({ context }) => context.theme);
  const config: Config = useAppSelector(({ context }) => context.config);
  const loanAmount: PaymentDetailsState['loanAmount'] = useAppSelector(({ paymentDetails }) =>
    paymentDetails.loanAmount);

  dispatch(paymentActions.setAmountOptions(getPaymentIntervals(loanAmount)));

  return (
    <section id={id} style={sectionStyles(theme, config)}>
      { children }
    </section>
  );
};

export default WidgetContainer;
