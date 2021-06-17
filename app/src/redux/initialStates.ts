import {
  LocaleIds,
  Mode,
  Measures,
  Countries,
  LabelPosition,
} from 'types/global-types';
import translations from 'utils/translations.json';
import type { PaymentDetailsState } from 'types/global-types';
import { getPaymentIntervals } from 'utils/payment-helpers';

const defaults = {
  // Sweden as default .. might change to other country
  LOCALE_ID: LocaleIds.SV_SE,
  COUNTRY: Countries.SWE,
};

export const initialConfig = () => ({
  mode: Mode.MODERN,
  displayLogo: true,
  logoUrl: 'https://static.paymentiq.io/santander.svg',
  logoHeight: '25px',
  localeId: defaults.LOCALE_ID,
  defaultLocaleId: defaults.LOCALE_ID, // Need this for some initial re-render issues
  containerWidth: Measures.WIDTH,
  containerHeight: Measures.HEIGHT,
  country: defaults.COUNTRY,
  labelPosition: LabelPosition.LEFT,
});

export const initialTheme = () => ({
  background: '#f8f8f8',
  border: 'rgb(202 202 202)',
  text: '#333333',
  footerFontSize: '10px',
  headerFontSize: '14px',
  borderRadius: '4px',
  font: 'arial',
  raised: 2,
});

export const initTranslations = () => ({
  ...translations[defaults.LOCALE_ID],
});

const defaultLoanAmount: number = 0;
export const paymentDetailsAcceptedAsParams = () => ({
  loanAmount: defaultLoanAmount,
  nomInterestRate: 21.00,
  termFee: 50,
  startupFee: 0,
  countrySpecifics: null,
});
export const initialPaymentDetails: () => PaymentDetailsState = () => ({
  amountOptions: getPaymentIntervals(defaultLoanAmount),
  months: 0,
  selectedAmount: null,
  ...paymentDetailsAcceptedAsParams(),
});
