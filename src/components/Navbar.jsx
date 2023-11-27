import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Logo from '../assets/image.png'
import DarkToggle from './DarkToggle/DarkToggle';

const Navbar = ({t,i18n,handleChangeLanguage , darkMode , toggleDark}) => {
  const [nav, setNav] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div
      className={`sticky top-0 w-full ${
        scrolling ? 'bg-black transition-all duration-500' : ''
      }`} style={{ zIndex: "10000" }}
    >
      <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white '>
        <div className='flex flex-col justify-center items-center' >
        <img  src={Logo} style={{ width: '100px' }} alt=""   />
        {/* <h1 className='text-[#00df9a] font-bold text-xs'>El Maher Trade Company</h1> */}
        </div>
        <ul className='hidden md:flex cursor-pointer'>
          <li className='p-4 hover:text-[#00df9a] duration-300'>Home</li>
          <li className='p-4 hover:text-[#00df9a] duration-300'>Company</li>
          <li className='p-4 hover:text-[#00df9a] duration-300'>Resources</li>
          <li className='p-4 hover:text-[#00df9a] duration-300'>About</li>
          <li className='p-4 hover:text-[#00df9a] duration-300'>Contact</li>
      <button className="bg-[#00df9a] px-3 py-2 text-black rounded-xl" onClick={handleChangeLanguage}>
      {i18n.language === 'en' ? 'عربي' : 'English'}
        </button>
        <li className='flex justify-center items-center w-12 ml-4'>
        <DarkToggle toggleDark={toggleDark} darkMode={darkMode}/>
        </li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul
          className={`${
            nav
              ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
              : 'ease-in-out duration-500 top-0 w-[60%] h-full fixed left-[-100%] '
          }`}
        >
        <div className='w-1/2 mt-3 mb-3 ml-2 flex ' >
        <img src={Logo} style={{ width: '100px' }} alt=""/>
        <div className='flex justify-center items-center w-12 ml-10'>
        <DarkToggle toggleDark={toggleDark} darkMode={darkMode}/>
        </div>
        </div>
          <li className='p-4 border-b border-gray-600 hover:text-[#00df9a] duration-300'>
            Home
          </li>
          <li className='p-4 border-b border-gray-600 hover:text-[#00df9a] duration-300'>
            Company
          </li>
          <li className='p-4 border-b border-gray-600 hover:text-[#00df9a] duration-300'>
            Resources
          </li>
          <li className='p-4 border-b border-gray-600 hover:text-[#00df9a] duration-300'>
            About
          </li>
          <li className='p-4 border-b border-gray-600 hover:text-[#00df9a] duration-300'>Contact</li>
          <button className="bg-[#00df9a] px-3 py-2 text-black rounded-xl ml-2 mt-2" onClick={handleChangeLanguage}>
      {i18n.language === 'en' ? 'عربي' : 'English'}
        </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
