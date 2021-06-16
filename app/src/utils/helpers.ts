import { initialConfig, initialTheme } from 'redux/initialStates';
import { Countries, LocaleIds } from 'types/global-types';
import type { AmountOption } from 'types/global-types';
import translations from 'utils/translations.json';
import { store } from 'redux/store';

export const parseQueryString = (key: string): string | null =>
  new URL(window.location.href).searchParams.get(key);

const setAllowedKeys = (keys: string[], addKey: (key: string, value: string) => void) => {
  keys.forEach((key: any) => {
    const val: any = parseQueryString(key);
    if (val) {
      let value = val;
      if (val === 'false') value = false;
      if (val === 'true') value = true;
      addKey(decodeURIComponent(key), typeof value === 'string' ? decodeURIComponent(value) : value);
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
    urlTheme[themeProp] = value;
  };
  setAllowedKeys(allowedKeys, addKey);

  return urlTheme;
};

export const getPaymentParamsFromUrl = () => {
  return {};
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
    { style: 'currency', currency: currencyCode, minimumFractionDigits: 0 },
  )
    .format(amount);

// Effective interest calculation function
interface GetCostArgs {
  amount: number,
  months: number
  nomInterestRate: number
}
type GetCostFromInterestRate = ({ amount, months, nomInterestRate }: GetCostArgs) => number
export const getCostFromInterestRate: GetCostFromInterestRate = ({
  amount,
  months,
  nomInterestRate,
}) => {
  const interestRate = ((nomInterestRate / 100) + 1);
  const years = months / 12;
  // eslint-disable-next-line no-restricted-properties
  return Number(((amount || 0) * Math.pow(interestRate, years)).toFixed(0));
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

export const amountOptionsFixed = (): Array<AmountOption> => {
  const { paymentDetails, context } = store.getState();
  return paymentDetails.amountOptions.map((option) => ({
    ...option,
    text: amountWithCode(
      context.config.localeId,
      getCurrencyCodeByCountry(context.config.country),
      option.value,
    ),
  }));
};

export const toPascalCase = (str: string) => {
  const split = str.split('');
  const toPascal = split[0].toUpperCase() + split.splice(1).join('');
  return toPascal;
};

export const getTotalAmount = (selectedAmount: number, months: number) => (selectedAmount || 0) * months;

export const getFixedAmount = (selectedAmount: number, months: number): string => {
  const { context } = store.getState();
  return amountWithCode(
    context.config.localeId,
    getCurrencyCodeByCountry(context.config.country),
    getTotalAmount(selectedAmount, months),
  );
};
