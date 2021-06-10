import type { FC } from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from 'components/AppRoutes';
import { getConfigFromUrl, getThemeFromUrl } from 'utils/helpers';
import { useAppDispatch, useAppSelector } from 'redux/redux-hooks';
import actions from 'redux/actions';
import translations from 'utils/translations.json';
import type { AppDispatch } from 'redux/store';
import type { Config, Theme } from 'types/global-types';
import './styles/App.scss';

console.log('translations');
console.log(translations);

type ConfigParams = Partial<Config>
type ThemeParams = Partial<Theme>

// Add handling for setting config via url params, call action.setConfig
const App: FC = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const localeId = useAppSelector(({ context }) => context.config.localeId);

  // Update redux with new configs from url params, theme and config
  useEffect(() => {
    console.log('useEffect');
    const configFromUrl: ConfigParams = getConfigFromUrl();
    const themeFromUrl: ThemeParams = getThemeFromUrl();
    setConfigsFromUrl(dispatch, configFromUrl, themeFromUrl);
    console.log(configFromUrl);
    console.log('localeId:');
    console.log(localeId);
  }, [dispatch, localeId]);

  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

// App helpers
type SetConfigsFromUrl = (d: AppDispatch, c: ConfigParams, t: ThemeParams) => void
const setConfigsFromUrl: SetConfigsFromUrl = (dispatch, configFromUrl, themeFromUrl) => {
  dispatch(actions.setConfig(configFromUrl));
  dispatch(actions.setTheme(themeFromUrl));
};

export default App;
