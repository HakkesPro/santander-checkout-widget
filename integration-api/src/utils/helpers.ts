import type {
  ApiConfig,
  Theme,
  PaymentDetails,
  FeeAndRate,
} from './types';
import { Countries } from './types';

export const x = {};

export const serialize = (
  obj: Record<string, string | boolean | number>,
  prefix?: string | undefined,
) => {
  const str: string[] = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const KEY = prefix ? `${prefix}.${key}` : key;
      str.push(`${encodeURIComponent(KEY)}=${encodeURIComponent(obj[key])}`);
    }
  }
  return str.join('&');
};

const getPaymentParams = (
  countrySpecifics: PaymentDetails['countrySpecifics'],
  paymentDetails: Partial<PaymentDetails>,
) => {
  const paymentDetailsStripped: Partial<Omit<PaymentDetails, 'countrySpecifics'>> = {
    ...paymentDetails,
  };
  const countrySpecificParams = Object.entries(countrySpecifics)
    .map((
      obj: [ keyof typeof Countries | string, Partial<FeeAndRate> ],
    ) => serialize(obj[1], obj[0]));
  console.log(countrySpecificParams);
  return serialize(paymentDetailsStripped, 'payment');
};

export const buildUrl = (
  origin: string,
  config: Partial<ApiConfig>,
  theme: Partial<Theme>,
  paymentDetails: Partial<PaymentDetails>,
) => {
  const configParams = serialize(config);
  const themeParams = serialize(theme, 'theme');
  const countrySpecifics: PaymentDetails['countrySpecifics'] = {
    ...paymentDetails
      && paymentDetails.countrySpecifics,
  };
  // eslint-disable-next-line no-param-reassign
  delete paymentDetails.countrySpecifics;
  const paymentParams: string = getPaymentParams(countrySpecifics, paymentDetails);
  return `${origin}?${configParams}${themeParams ? `&${themeParams}` : ''}${paymentParams ? `&${paymentParams}` : ''}`;
};
