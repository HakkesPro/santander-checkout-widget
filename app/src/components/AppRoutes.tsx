import type { FC } from 'react';
import {
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';
import Config from 'pages/Config';
import Classic from 'pages/Classic';
import Modern from 'pages/Modern';
import { Paths } from 'types/global-types';
import { useAppSelector } from 'redux/redux-hooks';

const AppRoutes: FC = (): JSX.Element => {
  const history:any = useHistory();
  const config = useAppSelector(({ context }) => context.config);

  setPath(history, config);

  return (
    <Switch>
      <Route exact path={Paths.CONFIG} component={Config} />
      <Route exact path={Paths.CLASSIC} component={Classic} />
      <Route exact path={Paths.MODERN} component={Modern} />
    </Switch>
  );
};

const setPath = (history: any, config: any) => {
  debugger;
  const currentPath = history.location.pathname;
};

export default AppRoutes;
