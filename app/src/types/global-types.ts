/* eslint no-unused-vars: "off" */

export enum LocaleIds {
  SV_SE = 'sv_SE',
  NO_NO = 'no_NO',
  DA_DK = 'da_DK',
  EN_GB = 'en_GB'
}

export enum DisplayMode {
  MODERN = 'modern',
  CLASSIC = 'classic'
}

export interface Config {
  displayMode: DisplayMode,
  font: string,
  headingText: string,
  headingFontSize: string,
  displayLogo: boolean,
  logoUrl: string,
  localeId: LocaleIds,
  containerWidth: number | string,
  containerHeight: number | string
}

export interface Theme {
  background: string,
  border: string,
  text: string,
  logoHeight: string
}

export enum Paths {
  CONFIG = '/config',
  CLASSIC = '/classic',
  MODERN = '/modern'
}

export enum Measures {
  WIDTH = '650px',
  HEIGHT = '300px'
}
