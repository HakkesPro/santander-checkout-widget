import {
  LocaleIds,
  DisplayMode,
  Measures,
  Countries,
} from 'types/global-types';
import translations from 'utils/translations.json';
import type { AmountOption } from 'types/global-types';

const defaults = {
  // Sweden as default .. might change to other country
  LOCALE_ID: LocaleIds.SV_SE,
  COUNTRY: Countries.SWE,
};

export const initialConfig = () => ({
  displayMode: DisplayMode.MODERN,
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
  // extra
  { key: 24991, text: '2 4991', value: 24991 },
  { key: 19991, text: ' 1 9991', value: 19991 },
  { key: 14991, text: '1 4991', value: 14991 },
  { key: 12991, text: '1 2991', value: 12991 },
  { key: 249912, text: '2 49921', value: 249921 },
  { key: 199912, text: ' 1 99921', value: 199291 },
  { key: 149921, text: '1 49912', value: 149912 },
  { key: 129921, text: '1 29921', value: 129921 },
]);
