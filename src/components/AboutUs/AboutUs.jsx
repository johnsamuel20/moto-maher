import React ,{useEffect , useRef} from 'react'
import './AboutUs.css'
import Video from '../Video'

const AboutUs = () => {
    const slidesContainerRef = useRef(null);

  useEffect(() => {
    const slidesContainer = slidesContainerRef.current;
    if (!slidesContainer) return;

    const slideWidth = slidesContainer.querySelector('.slide').clientWidth;
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    const handleNextClick = () => {
      const maxScrollLeft = slidesContainer.scrollWidth - slidesContainer.clientWidth;

      if (slidesContainer.scrollLeft + slideWidth >= maxScrollLeft) {
        // Reset scroll position to the beginning when reaching the end
        slidesContainer.scrollLeft = 0;
      } else {
        slidesContainer.scrollLeft += slideWidth;
      }
    };

    const handlePrevClick = () => {
      const maxScrollLeft = slidesContainer.scrollWidth - slidesContainer.clientWidth;

      if (slidesContainer.scrollLeft - slideWidth <= 0) {
        // Set scroll position to the end when reaching the beginning
        slidesContainer.scrollLeft = maxScrollLeft;
      } else {
        slidesContainer.scrollLeft -= slideWidth;
      }
    };

    const autoSlideInterval = setInterval(() => {
      handleNextClick();
    }, 4000);

    nextButton.addEventListener('click', handleNextClick);
    prevButton.addEventListener('click', handlePrevClick);

    // Cleanup event listeners and interval to avoid memory leaks
    return () => {
      clearInterval(autoSlideInterval);
      nextButton.removeEventListener('click', handleNextClick);
      prevButton.removeEventListener('click', handlePrevClick);
    };
  }, [slidesContainerRef]);
  return (
<div
  id="app"
  className="bg-zinc-200 max-w-screen-lg mx-auto px-4 md:px-8 py-12 transition-all duration-500 ease-linear min-w-full "
>
<div className="text-center p-10">
        <h1 className="font-bold text-4xl mb-4 text-black">About Us</h1>
      </div>
  <div className="relative">
    <div ref={slidesContainerRef} className="slides-container h-96 flex snap-x snap-mandatory overflow-hidden overflow-x-auto space-x-2 rounded scroll-smooth before:w-[45vw] before:shrink-0 after:w-[45vw] after:shrink-0 md:before:w-0 md:after:w-0">
      <div className="slide  h-full   flex-shrink-0 snap-center rounded overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1600"
          alt="mountain_image"
        />
      </div>
      <div className="slide h-full flex-shrink-0 snap-center rounded overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/6263568/pexels-photo-6263568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="mountain_image"
        />
      </div>
      <div className="slide h-full flex-shrink-0 snap-center rounded overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/3026364/pexels-photo-3026364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="mountain_image"
        />
      </div>
      <div className="slide  h-full flex-shrink-0 snap-center rounded overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/10343729/pexels-photo-10343729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="mountain_image"
        />
      </div>
      <div className="slide  h-full flex-shrink-0 snap-center rounded overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/13860053/pexels-photo-13860053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="mountain_image"
        />
      </div>
      <div className="slide  h-full flex-shrink-0 snap-center rounded overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/8576739/pexels-photo-8576739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="mountain_image"
        />
      </div>
      <div className="slide  h-full flex-shrink-0 snap-center rounded overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/1743367/pexels-photo-1743367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="mountain_image"
        />
      </div>
      <div className="slide  h-full flex-shrink-0 snap-center rounded overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/5920021/pexels-photo-5920021.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="mountain_image"
        />
      </div>
      <div className="slide  h-full flex-shrink-0 snap-center rounded overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/12805075/pexels-photo-12805075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="mountain_image"
        />
      </div>
      <div className="slide  h-full flex-shrink-0 snap-center rounded overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/547115/pexels-photo-547115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
  <div className='mt-10 md:text-4xl sm:text-3xl '>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat ducimus, voluptatum eligendi inventore velit rerum veniam quis, adipisci autem ipsam voluptas in! Molestias minus quo tempora soluta, modi at laborum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vel unde sunt voluptate, velit eaque? Ratione, a quasi tenetur sapiente minima iure molestiae odio, explicabo saepe excepturi dignissimos! Ex, placeat? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores nesciunt cupiditate accusamus itaque omnis provident laudantium molestias repellendus iure, non laboriosam at saepe impedit temporibus necessitatibus aspernatur sint eos veritatis.</p>
  </div>
  <div className='mt-10 flex justify-center items-center' >
    <Video/>
  </div>
</div>


  )
}

export default AboutUs
