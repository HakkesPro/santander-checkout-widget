import type { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from 'components/AppRoutes';
import { getConfigFromUrl } from 'utils/helpers';
import { useAppDispatch } from 'redux/redux-hooks';
import actions from 'redux/actions';
import './styles/App.scss';

// Add handling for setting config via url params, call action.setConfig
const App: FC = () => {
  const dispatch = useAppDispatch();

  // Update redux with new configs from url params
  dispatch(actions.setConfig(getConfigFromUrl()));

  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
