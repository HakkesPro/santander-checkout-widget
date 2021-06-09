import type { FC } from 'react';
import {
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';
import Config from 'pages/Config';
import Classic from 'pages/Classic';
import Modern from 'pages/Modern';
import { Paths, DisplayMode } from 'types/global-types';
import { useAppSelector } from 'redux/redux-hooks';

const AppRoutes: FC = (): JSX.Element => {
  const history:any = useHistory();
  const displayMode: DisplayMode = useAppSelector(({ context }) => context.config.displayMode);

  initRoutePush(history, displayMode);

  return (
    <Switch>
      <Route exact path={Paths.CONFIG} component={Config} />
      <Route exact path={Paths.CLASSIC} component={Classic} />
      <Route exact path={Paths.MODERN} component={Modern} />
    </Switch>
  );
};

const initRoutePush = (history: any, displayMode: DisplayMode): void | null => {
  const isConfigPath: boolean = history.location.pathname === Paths.CONFIG;
  if (isConfigPath) return null;

  switch (displayMode) {
    case DisplayMode.MODERN:
      history.push(Paths.MODERN);
      break;
    case DisplayMode.CLASSIC:
    default:
      history.push(Paths.CLASSIC);
      break;
  }
};

export default AppRoutes;
