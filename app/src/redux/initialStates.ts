import { LocaleIds, DisplayMode } from 'types/global-types';

export const initialConfig = () => ({
  displayMode: DisplayMode.CLASSIC,
  font: 'arial',
  heading: {
    text: 'Delbetalning väljs i kassan',
    fontSize: '14px',
  },
  displayLogo: true,
  logoUrl: 'https://static.paymentiq.io/Bambora-Logo.png',
  localeId: LocaleIds.SV_SE,
  containerWidth: '500px',
  containerHeight: '350px',
});

export const initialTheme = () => ({
  background: '#ffffff',
  border: '#f1f1f1',
  text: '#333333',
});
