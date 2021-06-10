import type { FC } from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from 'components/AppRoutes';
import { getConfigFromUrl, getThemeFromUrl } from 'utils/helpers';
import { useAppDispatch, useAppSelector } from 'redux/redux-hooks';
import { contextActions } from 'redux/actions';
import translations from 'utils/translations.json';
import type { AppDispatch } from 'redux/store';
import type { Config, Theme, LocaleIds } from 'types/global-types';
import './styles/App.scss';

type ConfigParams = Partial<Config>
type ThemeParams = Partial<Theme>

const urlConfig: ConfigParams = getConfigFromUrl();
const urlTheme: ThemeParams = getThemeFromUrl();

const App: FC = () => {
  const dispatch: AppDispatch = useAppDispatch();

  /**
   * @constant { string } localeId in store only serves as a
   * default locale if no localeId is set, it never gets updated in store.
   * Faced some re-render issues here
   * localeId and translations is set from either default
    * localeId or from passed in locale here at initial load.
   */
  const localeId: LocaleIds = useAppSelector(({ context }) => context.config.localeId);

  // Update redux with new configs from url params, theme and config
  useEffect(() => {
    setStore(dispatch, localeId);
  }, [dispatch, localeId]);

  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

// App helpers
type SetStore = (d: AppDispatch, l: LocaleIds) => void
const setStore: SetStore = (dispatch, localeId) => {
  const urlLocaleId: Partial<Record<'localeId', LocaleIds>> = {
    ...urlConfig.localeId && { localeId: urlConfig.localeId },
  };

  delete urlConfig.localeId;

  setUrlConfigs(dispatch);
  setTranslations(dispatch, urlLocaleId.localeId, localeId);
};

type SetConfigsFromUrl = (d: AppDispatch) => void
const setUrlConfigs: SetConfigsFromUrl = (dispatch) => {
  dispatch(contextActions.setConfig(urlConfig));
  dispatch(contextActions.setTheme(urlTheme));
};

type SetTranslations = (d: AppDispatch, u: undefined | LocaleIds, s: LocaleIds) => void
const setTranslations: SetTranslations = (dispatch, urlLocaleId, storeLocaleId) => {
  const localeId: LocaleIds = urlLocaleId || storeLocaleId;
  dispatch(contextActions.setTranslations(translations[localeId]));
};

export default App;
