import React from 'react';
// import Analytics from './components/Analytics';
// import Cards from './components/Cards';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
// import Newsletter from './components/Newsletter';
import Contact from './components/Contact/Contact';
import AboutUs from './components/AboutUs/AboutUs';
import Products from './components/Products';
import ChatBot from './components/ChatBot/ChatBot';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      {/* <Analytics /> */}
      <AboutUs/>
      <Products/>
      {/* <Newsletter /> */}
      {/* <Cards /> */}
      <Contact/>
      <ChatBot/>
      <Footer />
    </div>
  );
}

export default App;
