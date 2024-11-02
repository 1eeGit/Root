import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './App';  
import Home from './pages/Home';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/Home" element={<Home />} />
  </Routes>
);

export default AppRoutes;
