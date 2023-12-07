import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TwoWheelPage from "./pages/TwoWheelPage";

function App() {
  const [t, i18n] = useTranslation("global");
  const handleChangeLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };
  const [darkMode, setDarkMode] = useState(true);
  const toggleDark = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <Navbar
        t={t}
        i18n={i18n}
        handleChangeLanguage={handleChangeLanguage}
        darkMode={darkMode}
        toggleDark={toggleDark}
      />
      <Routes>
        <Route
          exact
          path="/moto-maher"
          element={<HomePage darkMode={darkMode} t={t} />}
        />
        <Route
          exact
          path="/moto-maher/two-wheel"
          element={<TwoWheelPage darkMode={darkMode} t={t} />}
        />
        <Route
          exact
          path="/moto-maher/three-wheel"
          element={<TwoWheelPage darkMode={darkMode} t={t} />}
        />
        <Route
          exact
          path="/moto-maher/electric-bike"
          element={<TwoWheelPage darkMode={darkMode} t={t} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
