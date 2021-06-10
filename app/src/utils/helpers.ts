import { initialConfig, initialTheme } from 'redux/initialStates';
// import type { Config } from 'types/global-types';

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
