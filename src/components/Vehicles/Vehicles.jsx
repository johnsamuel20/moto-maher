import React from "react";
import { Link } from "react-router-dom";
import Toktok from "../../assets/toktok.jpg";
import Bike from "../../assets/bike.jpg";
import ElectricBike from "../../assets/electric bike.jpg";
import "./Vehicles.css";

const Vehicles = ({ darkMode, t }) => {
  return (
    <>
      <section
        className={`section-1 ${
          !darkMode ? "bg-white" : ""
        } transition-all duration-500 ease-linear`}
      >
        <div className="text-center p-10">
          <h1
            className={`font-bold text-4xl mb-4 ${
              darkMode ? "text-white" : ""
            }`}
          >
            Our Products
          </h1>
        </div>
        <div className="row flex flex-wrap justify-center">
          <div>
            <h1 className={`${darkMode ? "text-white" : ""} font-bold text-2xl`}>Two-Wheel Vehicles</h1>
            <figure className="figure">
              <img src={Bike} alt="" />
              <figcaption>
                <h3>{t("vehicles.title")}</h3>
              </figcaption>
              <Link to="/two-wheel" />
            </figure>
          </div>
          <div>
            <h1 className={`${darkMode ? "text-white" : ""} font-bold text-2xl`}>Three-Wheel Vehicles</h1>
            <figure className="figure">
              <img src={Toktok} alt="" />
              <figcaption>
                <h3>{t("vehicles.title")}</h3>
              </figcaption>
              <Link to="/three-wheel" />
            </figure>
          </div>
          <div>
            <h1 className={`${darkMode ? "text-white" : ""} font-bold text-2xl`}>Electric Bikes</h1>
            <figure className="figure">
              <img src={ElectricBike} alt="" />
              <figcaption>
                <h3>{t("vehicles.title")}</h3>
              </figcaption>
              <Link to="/electric-bike" />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
};

export default Vehicles;
