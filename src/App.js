import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import './bootstrap.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import LandingPage from './pages/landingPage';
import Editor from './pages/Editor';
import Records from './pages/Records';
import Coding from './pages/Coding';
import Solution from './pages/Solution';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} /> 
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/records" element={<Records />} />
        <Route path="/coding/:assignmentId" element={<Solution />} />
      </Routes>

      {/*<TestEnv /> */}
    </div>
  );
}

export default App;
