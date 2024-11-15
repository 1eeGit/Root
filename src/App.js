import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import './bootstrap.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import UserCenter from './pages/userCenter';
import LandingPage from './pages/landingPage';
import Python from './pages/Python';
import Editor from './pages/Editor';
import TestEnv from './components/TestEnv';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} /> 
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/userCenter" element={<UserCenter />} />
        <Route path="/python" element={<Python />} />
        <Route path="/editor" element={<Editor />} />
      </Routes>

      {/*<TestEnv /> */}
    </div>
  );
}

export default App;
