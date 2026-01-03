import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/theme.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <Reviews></Reviews>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;