import React from 'react'
import Footer from "../components/Footer";
import Home from "../components/Home";
import Contact from "../components/Contact/Contact";
import AboutUs from "../components/AboutUs/AboutUs";
import Vehicles from "../components/Vehicles/Vehicles";

const HomePage = ({darkMode , t}) => {
  return (
    <div id="home">
      <Home t={t} darkMode={darkMode} />
      <AboutUs t={t} darkMode={darkMode} />
      {/* <Products t={t} darkMode={darkMode}/> */}
      {/* <Newsletter /> */}
      <Vehicles t={t} darkMode={darkMode} />
      <Contact t={t} darkMode={darkMode} />
      <Footer t={t} darkMode={darkMode} />
    </div>
  )
}

export default HomePage
