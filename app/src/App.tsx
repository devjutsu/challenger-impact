
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Main } from './pages/Main';
import { About } from './pages/About';
import { Header } from './pages/Header';

import './App.css';
import { Footer } from './pages/Footer';

function App() {
  return (
    <>
      <Header />
      <main className='App-main'>
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
