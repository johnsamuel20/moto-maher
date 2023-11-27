import React, { useEffect, useRef } from "react";
import "./AboutUs.css";
import AboutVideo from "../../assets/About-video.mp4";
import Crew1 from "../../assets/im7.jpeg";
import Crew2 from "../../assets/im8.jpeg";
import Crew3 from "../../assets/im9.jpeg";
// import Crew4 from "../../assets/im10.jpeg";
import Ma7al1 from "../../assets/im1.jpeg";
import Ma7al2 from "../../assets/im2.jpeg";
// import Ma7al3 from "../../assets/im3.jpeg";
// import Ma7al4 from "../../assets/im4.jpeg";
import Ma7al5 from "../../assets/im5.jpeg";
import AboutUsCont from "./AboutCont";
// import Ma7al6 from "../../assets/im6.jpeg";

const AboutUs = ({t,darkMode}) => {
  const slidesContainerRef = useRef(null);

  useEffect(() => {
    const slidesContainer = slidesContainerRef.current;
    if (!slidesContainer) return;

    const slideWidth = slidesContainer.querySelector(".slide").clientWidth;
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    const handleNextClick = () => {
      const maxScrollLeft =
        slidesContainer.scrollWidth - slidesContainer.clientWidth;

      if (slidesContainer.scrollLeft + slideWidth >= maxScrollLeft) {
        // Reset scroll position to the beginning when reaching the end
        slidesContainer.scrollLeft = 0;
      } else {
        slidesContainer.scrollLeft += slideWidth;
      }
    };

    const handlePrevClick = () => {
      const maxScrollLeft =
        slidesContainer.scrollWidth - slidesContainer.clientWidth;

      if (slidesContainer.scrollLeft - slideWidth <= 0) {
        // Set scroll position to the end when reaching the beginning
        slidesContainer.scrollLeft = maxScrollLeft;
      } else {
        slidesContainer.scrollLeft -= slideWidth;
      }
    };

    // const autoSlideInterval = setInterval(() => {
    //   handleNextClick();
    // }, 4000);

    nextButton.addEventListener("click", handleNextClick);
    prevButton.addEventListener("click", handlePrevClick);

    // Cleanup event listeners and interval to avoid memory leaks
    return () => {
      // clearInterval(autoSlideInterval);
      nextButton.removeEventListener("click", handleNextClick);
      prevButton.removeEventListener("click", handlePrevClick);
    };
  }, [slidesContainerRef]);
  return (
    <div
      id="app"
      className=" max-w-screen-lg mx-auto px-4 md:px-8 py-12 transition-all duration-500 ease-linear min-w-full "
      style={!darkMode ? { backgroundColor: "white" } : {}}
    >
      <div className="text-center p-10">
        <h1 className={`font-bold text-4xl mb-4 ${darkMode ? 'text-white' : ''} `}>About Us</h1>
      </div>
      <div className="relative">
        <div
          ref={slidesContainerRef}
          className="slides-container h-96 flex snap-x snap-mandatory overflow-hidden overflow-x-auto space-x-2 rounded scroll-smooth before:w-[45vw] before:shrink-0 after:w-[45vw] after:shrink-0 md:before:w-0 md:after:w-0"
        >
          <div className="slide  h-full   flex-shrink-0 snap-center rounded overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={Crew1}
              alt="mountain_image"
            />
          </div>
          <div className="slide h-full flex-shrink-0 snap-center rounded overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={Crew2}
              alt="mountain_image"
            />
          </div>
          <div className="slide h-full flex-shrink-0 snap-center rounded overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={Crew3}
              alt="mountain_image"
            />
          </div>
          <div className="slide  h-full flex-shrink-0 snap-center rounded overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={Ma7al2}
              alt="mountain_image"
            />
          </div>
          <div className="slide  h-full flex-shrink-0 snap-center rounded overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={Ma7al1}
              alt="mountain_image"
            />
          </div>
          <div className="slide  h-full flex-shrink-0 snap-center rounded overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={Ma7al5}
              alt="mountain_image"
            />
          </div>
        </div>
        <div className="absolute top-0 -left-4 h-full items-center hidden md:flex">
          <button
            className="prev px-2 py-2 rounded-full bg-neutral-100 text-neutral-900 group"
            aria-label="prev"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 group-active:-translate-x-2 transition-all duration-200 ease-linear"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        </div>
        <div className="absolute top-0 -right-4 h-full items-center hidden md:flex">
          <button
            className="next px-2 py-2 rounded-full bg-neutral-100 text-neutral-900 group"
            aria-label="next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 group-active:translate-x-2 transition-all duration-200 ease-linear"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <div>
        <AboutUsCont t={t} darkMode={darkMode}/>
      </div>
      <div className="mt-10 flex justify-center items-center ">
        <video className="rounded-xl" src={AboutVideo} controls loop></video>
      </div>
    </div>
  );
};

export default AboutUs;
