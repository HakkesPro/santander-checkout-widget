import { LocaleIds, DisplayMode, Measures } from 'types/global-types';
import translations from 'utils/translations.json';

const defaultLocaleId = LocaleIds.SV_SE;

export const initialConfig = () => ({
  displayMode: DisplayMode.MODERN,
  font: 'arial',
  headerFontSize: '14px',
  displayLogo: true,
  // eslint-disable-next-line max-len
  logoUrl: 'https://d2o7rqynhxcgmp.cloudfront.net/uploads/images/footer/Sweden/Bambora-footer.svg',
  logoHeight: '30px',
  localeId: defaultLocaleId,
  containerWidth: Measures.WIDTH,
  containerHeight: Measures.HEIGHT,
});

export const initialTheme = () => ({
  background: '#f8f8f8',
  border: 'rgb(202 202 202)',
  text: '#333333',
  footerFontSize: '0.8rem',
});

export const initTranslations = () => ({
  ...translations[defaultLocaleId],
});
