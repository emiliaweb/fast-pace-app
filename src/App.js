import { Routes, Route,useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import HomePage from './pages/HomePage/HomePage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import Single from './pages/Single/Single';
import NoMatch from './pages/NoMatch/NoMatch';

import './assets/style/reset.scss';
import './assets/style/style.scss';

function App() {
  const location = useLocation();

  const lang = window.navigator.language.replace(/[^a-z]/g, '');

  console.log(lang);

  return (
    <>
      <Header />

      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<HomePage />} />
          <Route path='/catalog' element={<CatalogPage />} />
          <Route path='/catalog/:productID' element={<Single />} />
          <Route path='*' element={<NoMatch />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </>
  );
}

export default App;
