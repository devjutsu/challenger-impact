
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Main } from './pages/Main';
import { About } from './pages/About';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path=":code" element={<Main />} />
        <Route path="about" element={<About />} />
      </Routes >
    </BrowserRouter>
  );
}

export default App;
