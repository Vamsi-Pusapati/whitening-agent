import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import Navbar from './components/Navigation/Navbar';
import Disadvantages from './components/Tabs/Disadvantages';
import Replacement from './components/Tabs/Replacement';
import './App.css';

const App = () => (
  <Router>
    <Header />
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" element={<Disadvantages />} />
        <Route path="/replacement" element={<Replacement />} />
      </Routes>
    </div>
  </Router>
);

export default App;
