import React from 'react';
import { useState } from 'react';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
// import Newsletter from './components/Newsletter';
import Contact from './components/Contact/Contact';
import AboutUs from './components/AboutUs/AboutUs';
import Products from './components/Products';
import ChatBot from './components/ChatBot/ChatBot';
import { useTranslation } from 'react-i18next';

function App() {
  const [t,i18n] = useTranslation("global")
  const handleChangeLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };
  const [darkMode, setDarkMode] = useState(true);
  const toggleDark = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <Navbar t={t} i18n={i18n} handleChangeLanguage={handleChangeLanguage} darkMode={darkMode}  toggleDark={toggleDark}/>
      <Home t={t} darkMode={darkMode} />
      <AboutUs t={t} darkMode={darkMode}/>
      <Products t={t} darkMode={darkMode}/>
      {/* <Newsletter /> */}
      <Contact t={t} darkMode={darkMode}/>
      <ChatBot t={t}/>
      <Footer t={t} darkMode={darkMode}/>
    </div>
  );
}

export default (App);
