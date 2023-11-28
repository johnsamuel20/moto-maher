import React from "react";
import Typed from "react-typed";
import backGroundImage from "../assets/backGround.jpg";
import { useTranslation } from "react-i18next";

const Home = ({ t ,darkMode }) => {
  const { i18n } = useTranslation();
  const styles = {
    width: "100%",
    height: "100vh",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 1), transparent), url(${backGroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "78%",
  };
  const isArabic = i18n.language === 'ar';

  return (
    <div className="text-white " style={styles}>
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className={`${darkMode ? "text-[#00df9a]" : "text-[#056fd9]"} font-bold p-2 text-2xl mt-12 transition-all duration-500`}>
          {t("home.companyName")}
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          {t("home.unleashYourSpirit")}
        </h1>
        <div className="flex justify-center items-center " style={isArabic ? { flexDirection : "row-reverse" } : {}}>
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4 px-1">
            {t("home.weAre")} 
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={t("home.qualities", { returnObjects: true })}
            typeSpeed={60}
            backSpeed={25}
            loop
            style={isArabic ? { direction: "rtl" } : {}}
          />
        </div>

        <a href="#">
          <button className={`${darkMode ? "bg-[#00df9a] text-black" : "bg-[#056fd9] text-white"} w-[200px] rounded-md font-medium my-6 mx-auto py-3  transition-all duration-500`}>
          {t("home.getStarted")}
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;
