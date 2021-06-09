import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from 'components/AppRoutes';
import './styles/App.scss';

const App = () => (
  <Router>
    <AppRoutes />
  </Router>
);

export default App;
