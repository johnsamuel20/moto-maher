import React from 'react';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact/Contact';
import AboutUs from './components/AboutUs/AboutUs';
import Products from './components/Products';
import ChatBot from './components/ChatBot/ChatBot';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutUs/>
      <Products/>
      <Newsletter />
      <Contact/>
      <ChatBot/>
      <Footer />
    </div>
  );
}

export default App;
