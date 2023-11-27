import React from 'react';
import './DarkToggle.css'

const DarkToggle = ({darkMode , toggleDark}) => {


  return (
    <button className="container" aria-label="Toggle color mode" title="Toggle color mode" onClick={toggleDark}>
      <div className={darkMode ? 'sun visible' : 'sun'}></div>
      <div className={darkMode ? 'moon' : 'moon visible'}>
        <div className="star"></div>
        <div className="star small"></div>
      </div>
    </button>
  );
};

export default DarkToggle;
