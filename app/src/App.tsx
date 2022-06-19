
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Main } from './blocks/Main';
import { About } from './pages/About';
import { Header } from './blocks/Header';

import './App.css';
import { Footer } from './blocks/Footer';
import { Auth } from './pages/Auth';

function App() {
  return (
    <>
      <Auth />
      <Header />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path=":code" element={<Main />} />
            <Route path="about" element={<About />} />
          </Routes >
        </BrowserRouter>
      </main>
      <footer className='App-footer' >
        <Footer />
      </footer>
    </>

  );
}

export default App;
