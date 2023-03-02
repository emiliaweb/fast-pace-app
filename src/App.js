import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import HomePage from './pages/HomePage/HomePage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import Single from './pages/Single/Single';

import './assets/style/reset.scss';
import './assets/style/style.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/catalog' element={<CatalogPage />} />
        <Route path='/single' element={<Single />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
