import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import HomePage from './pages/HomePage/HomePage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import Single from './pages/Single/Single';
import NoMatch from './pages/NoMatch/NoMatch';
import Modal from './components/Modal/Modal';

import useFPService from './services/FPService';

import './assets/style/reset.scss';
import './assets/style/style.scss';

function App() {

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/catalog' element={<CatalogPage />} />
        <Route path='/catalog/:productID' element={<Single />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
