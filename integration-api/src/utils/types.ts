/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
export enum Mode {
  MODERN = 'modern',
  CLASSIC = 'classic'
}

export enum hostedUrls {
  DEVELOPMENT = 'http://localhost:3000/',
  PRODUCTION = 'https://gallant-bhabha-93a576.netlify.app/', // not deployed yet
}

export enum LocaleIds {
  SV_SE = 'sv_SE',
  NO_NO = 'no_NO',
  DA_DK = 'da_DK',
  EN_GB = 'en_GB'
}

export enum Countries {
  SWE = 'SWE',
  NOR = 'NOR',
  DNK = 'DNK',
  GBR = 'GBR'
}

export enum LabelPosition {
  LEFT = 'left',
  RIGHT = 'right'
}

export interface Config {
  mode: Mode,
  font: string,
  headerFontSize: string,
  displayLogo: boolean,
  logoUrl: string,
  logoHeight: string,
  localeId: LocaleIds,
  defaultLocaleId: LocaleIds,
  containerWidth: string,
  containerHeight: string,
  effectiveInterestRate: number,
  country: Countries,
  labelPosition: LabelPosition
}

export interface Theme {
  background: string,
  border: string,
  text: string,
  footerFontSize: string,
  borderRadius: string
}

export enum environment {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production'
}

export interface ApiConfig extends Config {
  heightWithDropdown?: string,
  environment: environment
}
