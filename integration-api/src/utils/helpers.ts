import type { ApiConfig, Theme } from './types';

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

export const buildUrl = (origin: string, config: Partial<ApiConfig>, theme: Partial<Theme>) => {
  const configParams = serialize(config);
  const themeParams = serialize(theme, 'theme');
  return `${origin}?${configParams}${themeParams ? `&${themeParams}` : ''}`;
};
