import React from 'react'
import Footer from "../components/Footer";
import Home from "../components/Home";
import Contact from "../components/Contact/Contact";
import AboutUs from "../components/AboutUs/AboutUs";
import ChatBot from "../components/ChatBot/ChatBot";
import Vehicles from "../components/Vehicles/Vehicles";

const HomePage = ({darkMode , t}) => {
  return (
    <div>
      <Home t={t} darkMode={darkMode} />
      <AboutUs t={t} darkMode={darkMode} />
      {/* <Products t={t} darkMode={darkMode}/> */}
      {/* <Newsletter /> */}
      <Vehicles t={t} darkMode={darkMode} />
      <Contact t={t} darkMode={darkMode} />
      <ChatBot t={t} />
      <Footer t={t} darkMode={darkMode} />
    </div>
  )
}

export default HomePage
