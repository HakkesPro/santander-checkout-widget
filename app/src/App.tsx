import type { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from 'components/AppRoutes';
import { getConfigFromUrl, getThemeFromUrl } from 'utils/helpers';
import { useAppDispatch } from 'redux/redux-hooks';
import actions from 'redux/actions';
import './styles/App.scss';

// Add handling for setting config via url params, call action.setConfig
const App: FC = () => {
  const dispatch = useAppDispatch();

  // Update redux with new configs from url params, theme and config
  dispatch(actions.setConfig(getConfigFromUrl()));
  dispatch(actions.setTheme(getThemeFromUrl()));

  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
