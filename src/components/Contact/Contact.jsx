import React from "react";
import Map from "../Map";
import { useTranslation } from "react-i18next";
import "./Contact.css";

const Contact = ({darkMode , t}) => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  return (
    <div className={` contact-1 py-4 md:py-12 ${!darkMode ? 'bg-white' : ''} transition-all duration-500 ease-linear`} id="contact">
      <div className=" mx-auto px-4">
        <div className="xl:flex -mx-4 ">
          <div className="xl:w-10/12 xl:mx-auto px-4">
            <div className={`xl:w-3/4 mb-4 ${isArabic ? "text-right ml-auto" : ""}`}>
              <h1 className={`text-3xl text-medium mb-4 ${darkMode ? 'text-white' : ''}`}>
              {t("footer.title")}
              </h1>
              <p className={`text-xl mb-2  ${darkMode ? 'text-white' : ''}`}>
              {t("footer.please")}
              </p>
              <p className={`text-xl mb-2  ${darkMode ? 'text-white' : ''}`}>
              {t("footer.call")}{" "}
                <a
                  href="tel:+12314561231"
                  className={`${darkMode ? "text-[#00df9a] hover:border-[#00df9a]" : "text-[#056fd9] hover:border-[#056fd9] "}  border-b border-transparent  transition-colors duration-300`}
                >
                  {t("footer.number")}
                </a>
              </p>
            </div>
            <div className={`md:flex md:-mx-4 mt-4 md:mt-10 ${isArabic ? "flex-row-reverse" : ""} `}>
              <div className="md:w-2/3 md:px-4">
                <form className="contact-form">
                  <div className="sm:flex sm:flex-wrap -mx-3">
                    <div className="sm:w-1/2 px-3 mb-6">
                      <input
                        required
                        type="text"
                        placeholder={t("footer.fullName")}
                        className={`border-2 rounded px-3 py-1 w-full ${darkMode ? "focus:border-[#00df9a]" : "focus:border-[#056fd9]"}  input`}
                      />
                    </div>
                    <div className="sm:w-1/2 px-3 mb-6">
                      <input
                        type="text"
                        placeholder={t("footer.company")}
                        className={`border-2 rounded px-3 py-1 w-full ${darkMode ? "focus:border-[#00df9a]" : "focus:border-[#056fd9]"}  input`}
                      />
                    </div>
                    <div className="sm:w-1/2 px-3 mb-6">
                      <input
                        required
                        type="email"
                        placeholder={t("footer.email")}
                        className={`border-2 rounded px-3 py-1 w-full ${darkMode ? "focus:border-[#00df9a]" : "focus:border-[#056fd9]"}  input`}
                      />
                    </div>
                    <div className="sm:w-1/2 px-3 mb-6">
                      <input
                        type="text"
                        placeholder={t("footer.phone")}
                        className={`border-2 rounded px-3 py-1 w-full ${darkMode ? "focus:border-[#00df9a]" : "focus:border-[#056fd9]"}  input`}
                      />
                    </div>
                    <div className="sm:w-full px-3">
                      <textarea
                        required
                        name="message"
                        id="message"
                        cols={30}
                        rows={4}
                        placeholder={t("footer.message")}
                        className={`border-2 rounded px-3 py-1 w-full ${darkMode ? "focus:border-[#00df9a]" : "focus:border-[#056fd9]"}  input`}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className={` mt-4 md:mt-12 ${isArabic ? "text-left ml-auto" : "text-right"}`}>
                    <button className={`border-2 ${darkMode ? "border-[#00df9a] text-[#00df9a] hover:bg-[#00df9a]" : "border-[#056fd9] text-[#056fd9] hover:bg-[#056fd9] hover:text-white"}  rounded px-6 py-2  hover:text-black transition-colors duration-300`}>
                    {t("footer.send")}
                    </button>
                  </div>
                </form>
              </div>
              <div className="md:w-1/3 mt-10 md:mt-0 flex justify-center">
                <Map/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
