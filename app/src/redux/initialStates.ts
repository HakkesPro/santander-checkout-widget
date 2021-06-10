import { LocaleIds, DisplayMode, Measures } from 'types/global-types';

export const initialConfig = () => ({
  displayMode: DisplayMode.MODERN,
  font: 'arial',
  headerText: 'Delbetalning väljs i kassan',
  headerFontSize: '14px',
  displayLogo: true,
  // eslint-disable-next-line max-len
  logoUrl: 'https://d2o7rqynhxcgmp.cloudfront.net/uploads/images/footer/Sweden/Bambora-footer.svg',
  logoHeight: '30px',
  localeId: LocaleIds.SV_SE,
  containerWidth: Measures.WIDTH,
  containerHeight: Measures.HEIGHT,
  footerText: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, 
  molestiae quas vel sint commodi`,
});

export const initialTheme = () => ({
  background: '#f8f8f8',
  border: 'rgb(202 202 202)',
  text: '#333333',
  footerFontSize: '0.8rem',
});
