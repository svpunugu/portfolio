import logo from './logo.svg';
import './App.css';
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import Header from './components/Header';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          {/* Add routes for other components */}
        </Routes>
    </Router>
  );
}

export default App;
