/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
export enum UrlPrefixes {
  PAYMENT = 'payment',
  THEME = 'theme'
}

export enum Mode {
  MODERN = 'modern',
  CLASSIC = 'classic'
}

export enum hostedUrls {
  DEVELOPMENT = 'http://localhost:3000/',
  PRODUCTION = 'https://gallant-bhabha-93a576.netlify.app/', // Change this later
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

export interface FeeAndRate {
  nomInterestRate?: number,
  termFee?: number,
  startupFee?: number,
}
/*
 * string will be a custom COUNTRY code.
 * ex: {
 *  NOR: {
 *   nomInterestRate: 19,
 *   termFee: 10
 *   startupFee: 0
 *  }
 * }
 * All keys in object are partial.
 * Means one could only pass in only one of those keys and leave the rest as default.
 * Object keys, "top level" must be taken from Countries enum.
 */
export type CountrySpecifics = Partial<Record<Countries, FeeAndRate>>

export interface PaymentDetails extends FeeAndRate {
  loanAmount: number,
  countrySpecifics: CountrySpecifics
}
