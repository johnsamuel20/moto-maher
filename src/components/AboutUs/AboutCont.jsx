import React from "react";
import success from "../../assets/success.jpg";
import { useTranslation } from "react-i18next";

const AboutCont = ({ t , darkMode }) => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const textDirectionClass = isArabic ? "text-right" : "text-left";
  const imageOrderClass = isArabic ? "order-1" : "order-0";

  return (
    <div className={`w-full py-16 px-4 ${textDirectionClass}`}>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className={`w-[550px] mx-auto my-4 ${imageOrderClass}`} src={success} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">{t("about.title")}</p>
          <h1 className={`${darkMode ? 'text-white' : ''} md:text-4xl sm:text-3xl text-2xl font-bold py-2`}>
            {t("about.subtitle")}
          </h1>
          <p
            style={
              isArabic
                ? { fontFamily: "'Roboto Slab', serif", fontSize: "20px" }
                : { fontFamily: "'Roboto Slab'" }
            }
            className={`${darkMode ? 'text-white' : ''}`}
          >
            {t("about.line1")} <br />
            {t("about.line2")} <br />
            {t("about.line3")}
          </p>
          {/* <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button> */}
        </div>
      </div>
    </div>
  );
};

export default AboutCont;
