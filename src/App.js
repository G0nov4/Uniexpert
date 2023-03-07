import './App.css';

import HomePage from './pages/HomePage';
import ScrollToTop from './components/ScrollToTop';
import { HashRouter } from 'react-router-dom';
function App() {
  return (
    <HashRouter>
      <HomePage />
    </HashRouter>
  );
}

export default App;
