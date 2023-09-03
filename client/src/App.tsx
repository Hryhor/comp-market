import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { paths } from './paths';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={ paths.home } element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
