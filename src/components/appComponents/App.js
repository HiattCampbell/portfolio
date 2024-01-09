import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from '../../pages/About';
import Contact from '../../pages/Contact';
import Home from '../../pages/Home';
import Portfolio from '../../pages/Portfolio';
import '../../styles/App.css';
import Footer from './Footer';
import Nav from './Nav';

function App() {
  return (
    <Router>
      <Nav />
      <Routes className="bodyContainer">
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
