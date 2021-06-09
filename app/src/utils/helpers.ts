import { initialConfig } from 'redux/initialStates';
// import type { Config } from 'types/global-types';

export const parseQueryString = (key: string): string | null =>
  new URL(window.location.href).searchParams.get(key);

export const getConfigFromUrl = () => {
  const config: any = initialConfig(); // Setting any because of the algorithms below
  const allowedConfigs = Object.keys(config);
  const urlConfigs:any = {};

  allowedConfigs.forEach((key: any) => {
    const value = parseQueryString(key);
    if (value) {
      urlConfigs[key] = value;
    }
  });

  return urlConfigs;
};
