export const x = {};

export const serialize = (config: Record<string, string | boolean | number>) => {
  const str: string[] = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const key in config) {
    if (Object.prototype.hasOwnProperty.call(config, key)) {
      str.push(`${encodeURIComponent(key)}=${encodeURIComponent(config[key])}`);
    }
  }
  return str.join('&');
};
