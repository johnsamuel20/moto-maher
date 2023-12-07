import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import greenLogo from "../assets/image.png";
import blueLogo from "../assets/blueLogo.png";
import DarkToggle from "./DarkToggle/DarkToggle";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
const Navbar = ({ t, i18n, handleChangeLanguage, darkMode, toggleDark }) => {
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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`sticky top-0 w-full ${
        scrolling
          ? darkMode
            ? "bg-black transition-all duration-500"
            : "bg-stone-200 transition-all duration-500"
          : ""
      } `}
      style={{ zIndex: "10000" }}
    >
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white ">
        <div className="flex flex-col justify-center items-center">
          {darkMode ? (
            <img src={greenLogo} style={{ width: "100px" }} alt="" />
          ) : (
            <img src={blueLogo} style={{ width: "100px" }} alt="" />
          )}
          {/* <h1 className='text-[#00df9a] font-bold text-xs'>El Maher Trade Company</h1> */}
        </div>
        <ul className="hidden md:flex cursor-pointer">
          <ScrollLink
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className={`p-4  duration-300 ${
              darkMode ? "hover:text-[#00df9a]" : "hover:text-[#056fd9]"
            } ${
              scrolling
                ? !darkMode
                  ? "text-black transition-all duration-500 "
                  : "text-stone-200 transition-all duration-500 "
                : ""
            }`}
          >
            {t("nav.home")}
          </ScrollLink>
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className={`p-4 hover:text-[#00df9a] duration-300 ${
              darkMode ? "hover:text-[#00df9a]" : "hover:text-[#056fd9]"
            } ${
              scrolling
                ? !darkMode
                  ? "text-black transition-all duration-500"
                  : "text-stone-200 transition-all duration-500"
                : ""
            }`}
          >
            {t("nav.about")}
          </ScrollLink>
          <ScrollLink
            to="products"
            spy={true}
            smooth={true}
            duration={500}
            className={`p-4 hover:text-[#00df9a] duration-300 ${
              darkMode ? "hover:text-[#00df9a]" : "hover:text-[#056fd9]"
            } ${
              scrolling
                ? !darkMode
                  ? "text-black transition-all duration-500"
                  : "text-stone-200 transition-all duration-500"
                : ""
            }`}
          >
            {t("nav.products")}
          </ScrollLink>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className={`p-4 hover:text-[#00df9a] duration-300 ${
              darkMode ? "hover:text-[#00df9a]" : "hover:text-[#056fd9]"
            } ${
              scrolling
                ? !darkMode
                  ? "text-black transition-all duration-500"
                  : "text-stone-200 transition-all duration-500"
                : ""
            }`}
          >
            {t("nav.contact")}
          </ScrollLink>
          <button
            className={`${
              darkMode
                ? "bg-[#00df9a] transition-all duration-500 "
                : "bg-[#056fd9] transition-all duration-500 text-white"
            }  px-3 py-2 text-black rounded-xl`}
            onClick={handleChangeLanguage}
          >
            {i18n.language === "en" ? "عربي" : "English"}
          </button>
          <div
            className={`flex justify-center items-center w-12 ml-4 ${
              !darkMode ? "bg-[#056fd9]" : "bg-[#00df9a]"
            }  rounded-2xl transition-all duration-500`}
          >
            <DarkToggle toggleDark={toggleDark} darkMode={darkMode} />
          </div>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? (
            <AiOutlineClose
              size={20}
              className={`${
                scrolling
                  ? !darkMode
                    ? "text-black transition-all duration-500"
                    : "text-stone-200 transition-all duration-500"
                  : ""
              }}`}
            />
          ) : (
            <AiOutlineMenu
              size={20}
              className={`${
                scrolling
                  ? !darkMode
                    ? "text-black transition-all duration-500"
                    : "text-stone-200 transition-all duration-500"
                  : ""
              }}`}
            />
          )}
        </div>
        <ul
          className={`${
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "ease-in-out duration-500 top-0 w-[60%] h-full fixed left-[-100%] "
          } ${
            darkMode
              ? "bg-black transition-all duration-500"
              : "bg-stone-200 transition-all duration-500"
          }`}
        >
          <div className="flex">
            <div className="w-1/2 mt-3 mb-3 ml-2 ">
              {darkMode ? (
                <img src={greenLogo} style={{ width: "100px" }} alt="" />
              ) : (
                <img src={blueLogo} style={{ width: "100px" }} alt="" />
              )}
            </div>
            {/* <div className="flex justify-center items-center w-12 ml-10 ">
              <DarkToggle toggleDark={toggleDark} darkMode={darkMode} />
            </div> */}
            <div
              className={`flex justify-center items-center w-12 ml-10 mt-2 ${
                !darkMode ? "bg-[#056fd9]" : "bg-[#00df9a]"
              }  rounded-2xl transition-all duration-500`}
            >
              <DarkToggle toggleDark={toggleDark} darkMode={darkMode} />
            </div>
          </div>

          <li
            className={`p-4 border-b border-gray-600 ${
              darkMode ? "hover:text-[#00df9a]" : "hover:text-[#056fd9]"
            } duration-300 ${
              !darkMode
                ? "text-black transition-all duration-500"
                : "text-stone-200 transition-all duration-500"
            }`}
          >
            <ScrollLink
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              onClick={handleNav}
            >
              {t("nav.home")}
            </ScrollLink>
          </li>
          <li
            className={`p-4 border-b border-gray-600 ${
              darkMode ? "hover:text-[#00df9a]" : "hover:text-[#056fd9]"
            } duration-300 ${
              !darkMode
                ? "text-black transition-all duration-500"
                : "text-stone-200 transition-all duration-500"
            }`}
          >
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              onClick={handleNav}
            >
              {t("nav.about")}
            </ScrollLink>
          </li>
          <li
            className={`p-4 border-b border-gray-600 ${
              darkMode ? "hover:text-[#00df9a]" : "hover:text-[#056fd9]"
            } duration-300 ${
              !darkMode
                ? "text-black transition-all duration-500"
                : "text-stone-200 transition-all duration-500"
            }`}
          >
            <ScrollLink
              to="products"
              spy={true}
              smooth={true}
              duration={500}
              onClick={handleNav}
            >
              {t("nav.products")}
            </ScrollLink>
          </li>
          <li
            className={`p-4 border-b border-gray-600 ${
              darkMode ? "hover:text-[#00df9a]" : "hover:text-[#056fd9]"
            } duration-300 ${
              !darkMode
                ? "text-black transition-all duration-500"
                : "text-stone-200 transition-all duration-500"
            }`}
          >
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              onClick={handleNav}
            >
              {t("nav.contact")}
            </ScrollLink>
          </li>
          <button
            className={`${
              darkMode
                ? "bg-[#00df9a] transition-all duration-500 "
                : "bg-[#056fd9] transition-all duration-500 text-white"
            }  px-3 py-2 text-black rounded-xl ml-2 mt-2`}
            onClick={handleChangeLanguage}
          >
            {i18n.language === "en" ? "عربي" : "English"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
