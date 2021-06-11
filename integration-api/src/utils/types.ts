/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
export enum DisplayMode {
  MODERN = 'modern',
  CLASSIC = 'classic'
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

export interface Theme {
  background: string,
  border: string,
  text: string,
  footerFontSize: string,
  borderRadius: string
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
  containerWidth: string,
  containerHeight: string,
  effectiveInterestRate: number,
  country: Countries
}

export interface ApiConfig extends Config {
  heightWithDropdown?: string
}
