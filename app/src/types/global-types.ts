/* eslint no-unused-vars: "off" */
import type { DropdownItemProps } from 'semantic-ui-react';

export interface Translations {
  header: string,
  footer: string
  months: string,
  monthsAlias: string,
  monthlyAmount: string,
  effectiveInterestRate: string,
  inTotal: string,
  cost: string,
  currencyCode: string,
  effectiveInterestRateAlias: string
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

export enum Mode {
  MODERN = 'modern',
  CLASSIC = 'classic'
}

export interface Config {
  mode: Mode,
  displayLogo: boolean,
  logoUrl: string,
  logoHeight: string,
  localeId: LocaleIds,
  defaultLocaleId: LocaleIds,
  containerWidth: string,
  containerHeight: string,
  country: Countries,
  labelPosition: LabelPosition
}

export interface Theme {
  background: string,
  border: string,
  text: string,
  footerFontSize: string,
  borderRadius: string,
  font: string,
  headerFontSize: string,
  raised: number
}

export enum Paths {
  CONFIG = '/config',
  CLASSIC = '/classic',
  MODERN = '/modern'
}

export enum Measures {
  WIDTH = '430px',
  HEIGHT = '150px'
}

export interface AmountOption extends DropdownItemProps {
  key: number,
  text: string,
  value: number
}

export interface FeeAndRate {
  nomInterestRate: number,
  termFee: number,
  startupFee: number,
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
export type CountrySpecifics = Partial<Record<Countries, Partial<FeeAndRate>>>

export interface PaymentDetailsState extends FeeAndRate {
  amountOptions: Array<AmountOption>,
  months: number,
  selectedAmount: null | number,
  loanAmount: number,
  countrySpecifics: null | CountrySpecifics
}

export enum LabelPosition {
  LEFT = 'left',
  RIGHT = 'right'
}

export interface PaymentParams {
  nomInterestRate?: number,
  termFee?: number,
  startupFee?: number,
  loanAmount?: number,
  countrySpecifics?: CountrySpecifics
}
