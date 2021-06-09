import { LocaleIds, DisplayMode, Measures } from 'types/global-types';

export const initialConfig = () => ({
  displayMode: DisplayMode.MODERN,
  font: 'arial',
  headingText: 'Delbetalning väljs i kassan',
  headingFontSize: '14px',
  displayLogo: true,
  // eslint-disable-next-line max-len
  logoUrl: 'https://d2o7rqynhxcgmp.cloudfront.net/uploads/images/footer/Sweden/Bambora-footer.svg',
  logoHeight: '30px',
  localeId: LocaleIds.SV_SE,
  containerWidth: Measures.WIDTH,
  containerHeight: Measures.HEIGHT,
});

export const initialTheme = () => ({
  background: '#f8f8f8',
  border: '#777777',
  text: '#333333',
});
