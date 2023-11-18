import React from 'react';
import Typed from 'react-typed';
import backGroundImage from '../assets/backGround.jpg'

const Home = () => {
  const styles = {
    width: '100%',
    height: '100vh',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 1), transparent), url(${backGroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: '78%',
  };
  
  return (
    <div className='text-white ' style={styles}>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2 text-2xl mt-12'>
        ElMaher Trade Company
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
        Unleash Your Spirit on Two Wheels.
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            We are
          </p>
          <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['Fast', 'Flexible', 'Efficient']}
            typeSpeed={60}
            backSpeed={25}
            loop
          />
        </div>
        
        <a href="#products">
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started </button>
        </a>
      </div>
    </div>
  );
};

export default Home;
