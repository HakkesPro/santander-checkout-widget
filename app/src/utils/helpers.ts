import { initialConfig, initialTheme } from 'redux/initialStates';
import { Countries, LocaleIds } from 'types/global-types';
import translations from 'utils/translations.json';

export const parseQueryString = (key: string): string | null =>
  new URL(window.location.href).searchParams.get(key);

const setAllowedKeys = (keys: string[], addKey: (key: string, value: string) => void) => {
  keys.forEach((key: any) => {
    const value = parseQueryString(key);
    if (value) {
      addKey(key, value);
    }
  });
};

export const getConfigFromUrl = () => {
  const config: any = initialConfig(); // Setting any because of the algorithms below
  const allowedConfigs = Object.keys(config);
  const urlConfigs:any = {};

  const addKey = (key: string, value: string) => { urlConfigs[key] = value; };
  setAllowedKeys(allowedConfigs, addKey);

  return urlConfigs;
};

export const getThemeFromUrl = () => {
  const theme: any = initialTheme(); // Setting any because of the algorithms below
  const allowedKeys = [
    ...Object.keys(theme).map((key) => `theme.${key}`),
  ];
  const urlTheme:any = {};

  const addKey = (key: string, value: string) => {
    const themeProp = key.split('.')[1]; // theme.${themeProps} need to be splitted
    urlTheme[themeProp] = decodeURIComponent(value);
  };
  setAllowedKeys(allowedKeys, addKey);

  return urlTheme;
};

export const isIframed = () => {
  try {
    return window.self.window === window.top.window;
  } catch (e) {
    return false;
  }
};

export const amountWithCode = (localeId: string, currencyCode: string, amount: number) =>
  new Intl.NumberFormat(
    localeId.replace('_', '-'),
    { style: 'currency', currency: currencyCode },
  )
    .format(amount);

type GetCost = ({
  localeId,
  currencyCode,
  months,
  effectiveInterestRate,
}: {
  localeId: LocaleIds
  currencyCode: string,
  months: number
  effectiveInterestRate: number
}) => void
export const getCost: GetCost = ({
  localeId,
  currencyCode,
  months,
  effectiveInterestRate,
}) => {
  console.log('getCost triggered');
};

export const getCurrencyCodeByCountry = (country: Countries) => {
  switch (country) {
    case Countries.NOR:
      return translations[LocaleIds.NO_NO].currencyCode;
    case Countries.DNK:
      return translations[LocaleIds.DA_DK].currencyCode;
    case Countries.GBR:
      return translations[LocaleIds.EN_GB].currencyCode;
    case Countries.SWE:
    default:
      return translations[LocaleIds.SV_SE].currencyCode;
  }
};
