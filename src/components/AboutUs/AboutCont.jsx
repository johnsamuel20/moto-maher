import React from 'react';
// import Laptop from '../../assets/laptop.jpg';
// import motorcycle from '../../assets/motorcycle.jpg';
import success from '../../assets/success.jpg';

const AboutCont = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[550px] mx-auto my-4' src={success} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>ABOUT OUR COMPONY</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>A Success Story and a Continuing Journey </h1>
          <p style ={{fontFamily: "'Roboto Slab', serif"}}>
          In line with the strategic planning of the new republic in the use of
          clean energy <br />
          Al Maher Group of Companies is moving in the same rational direction
          as the state by working to provide light personal transportation that
          runs on gas and electricity <br />
          We dream of a 100% Egyptian product in Egypt and the rest of the
          African continent
          </p>
          {/* <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button> */}
        </div>
      </div>
    </div>
  );
};

export default AboutCont;
