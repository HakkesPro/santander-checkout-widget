/* eslint no-unused-vars: "off" */

export interface Translations {
  header: string,
  footer: string
  months: string,
  monthsAlias: string,
  monthlyAmount: string,
  effectiveInterestRate: string,
  inTotal: string,
  cost: string,
  currencyCode: string
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

export enum DisplayMode {
  MODERN = 'modern',
  CLASSIC = 'classic'
}

export interface Config {
  displayMode: DisplayMode,
  font: string,
  headerFontSize: string,
  displayLogo: boolean,
  logoUrl: string,
  logoHeight: string,
  localeId: LocaleIds,
  defaultLocaleId: LocaleIds,
  containerWidth: number | string,
  containerHeight: number | string,
  effectiveInterestRate: number,
  country: Countries
}

export interface Theme {
  background: string,
  border: string,
  text: string,
  footerFontSize: string,
  borderRadius: string
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

export interface AmountOption {
  key: number,
  text: string,
  value: number
}

export interface PaymentDetailsState {
  months: number
  amountOptions: Array<AmountOption>,
  selectedAmount: null | number
}
