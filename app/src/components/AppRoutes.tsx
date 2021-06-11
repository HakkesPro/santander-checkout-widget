import type { FC } from 'react';
import { lazy, Suspense } from 'react';
import {
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';
import { Paths, DisplayMode } from 'types/global-types';
import type { Config as ConfigType } from 'types/global-types';
import { useAppSelector } from 'redux/redux-hooks';
import Loader from 'components/Loader';

const Modern = lazy(() => import('pages/Modern'));
const ConfigPage = lazy(() => import('pages/Config'));
const Classic = lazy(() => import('pages/Classic'));

const AppRoutes: FC = (): JSX.Element => {
  const history:any = useHistory();
  const config: ConfigType = useAppSelector(({ context }) => context.config);

  const { displayMode, containerHeight, containerWidth } = config;

  initRoutePush(history, displayMode);

  return (
    <Switch>
      <Suspense fallback={<Loader containerHeight={containerHeight} containerWidth={containerWidth} />}>
        <Route exact path={Paths.CONFIG} component={ConfigPage} />
        <Route exact path={Paths.CLASSIC} component={Classic} />
        <Route exact path={Paths.MODERN} component={Modern} />
      </Suspense>
    </Switch>
  );
};

const initRoutePush = (history: any, displayMode: DisplayMode): void | null => {
  const isConfigPath: boolean = history.location.pathname === Paths.CONFIG;
  if (isConfigPath) return null;

  const historyPush = (path: string) => history.push(path + history.location.search);

  switch (displayMode) {
    case DisplayMode.MODERN:
      historyPush(Paths.MODERN);
      break;
    case DisplayMode.CLASSIC:
    default:
      historyPush(Paths.CLASSIC);
      break;
  }
};

export default AppRoutes;
