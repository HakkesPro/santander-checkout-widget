import {
  LocaleIds,
  Mode,
  Measures,
  Countries,
  LabelPosition,
} from 'types/global-types';
import translations from 'utils/translations.json';
import type { AmountOption } from 'types/global-types';

const defaults = {
  // Sweden as default .. might change to other country
  LOCALE_ID: LocaleIds.SV_SE,
  COUNTRY: Countries.SWE,
};

export const initialConfig = () => ({
  mode: Mode.MODERN,
  font: 'arial',
  headerFontSize: '14px',
  displayLogo: true,
  // eslint-disable-next-line max-len
  logoUrl: 'https://d2o7rqynhxcgmp.cloudfront.net/uploads/images/footer/Sweden/Bambora-footer.svg',
  logoHeight: '30px',
  localeId: defaults.LOCALE_ID,
  defaultLocaleId: defaults.LOCALE_ID, // Need this for some initial re-render issues
  containerWidth: Measures.WIDTH,
  containerHeight: Measures.HEIGHT,
  effectiveInterestRate: 27.49,
  country: defaults.COUNTRY,
  labelPosition: LabelPosition.LEFT,
});

export const initialTheme = () => ({
  background: '#f8f8f8',
  border: 'rgb(202 202 202)',
  text: '#333333',
  footerFontSize: '0.8rem',
  borderRadius: '.28571429rem',
});

export const initTranslations = () => ({
  ...translations[defaults.LOCALE_ID],
});

export const intialAmountOptions = (): Array<AmountOption> => ([
  { key: 2499, text: '2 499', value: 2499 },
  { key: 1999, text: ' 1 999', value: 1999 },
  { key: 1499, text: '1 499', value: 1499 },
  { key: 1299, text: '1 299', value: 1299 },
]);
