import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Products from './components/Products/Products';
import Strengths from './components/Strengths/Strengths';
import Vision from './components/Vision/Vision';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Strengths />
      <Vision />
      <Contact />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;

