import React, { useState } from 'react';
import HoagnV250 from '../assets/2-wheel/hogan v250.png'
import VigoryVLR150 from '../assets/2-wheel/Vigory VLR 150.png'
import ZontesG1 from '../assets/2-wheel/zontes G1 155.png'
import Wing200 from '../assets/2-wheel/wing 200.png'
import BenelliVLR200 from '../assets/2-wheel/Benelli VLR 200 super sport.png'
import BenelliVLR150 from '../assets/2-wheel/benelli VLR-150.png'
import HawaR8 from '../assets/2-wheel/Hawa R8.png'
import MarinoClassic from '../assets/2-wheel/Marino-classic-150.png'
import Dayun4ProMax from '../assets/2-wheel/Dayun 4 pro max.png'
import EgyptianDayun2 from '../assets/2-wheel/Dayun 2.png'
import BoxerBajaj150 from '../assets/2-wheel/Bajaj-Boxer-Classic1.png'
import Hogan3ElNesr from '../assets/2-wheel/Hogan 3.jpg'
import SYMsymphonySR from '../assets/2-wheel/SYM SR 200cc.png'
import HoganF250 from '../assets/2-wheel/Hogan F250.png'
import BenelliTNT from '../assets/2-wheel/TNT-150.png'
import BenelliVLX200 from '../assets/2-wheel/Benelli-VLX-200.png'
import BenelliVLM200 from '../assets/2-wheel/Benelli VLM 200.png'
import HoganL250 from '../assets/2-wheel/Hogan l250.jpg'
import Hogan4150cc from '../assets/2-wheel/Hogan 4.jpg'
import Hogan4HJ from '../assets/2-wheel/Hogan 4 HJ.jpg'
import Hogan3 from '../assets/2-wheel/Hogan 3-1.jpg'
import ZontesM310 from '../assets/2-wheel/Zontes-M-310-CC.jpg'
import ZontesU1 from '../assets/2-wheel/Zontes-U1-155.png'

const productData = [
  {
    id: 1,
    image: `${HoagnV250}`,
    productName: 'Hogan V250',
    brand: 'Brand A',
    price: 149,
    originalPrice: 199,
  },
  {
    id: 2,
    image: `${VigoryVLR150}`,
    productName: 'Vigory VLR 150',
    brand: 'Brand B',
    price: 99,
    originalPrice: 129,
  },
  {
    id: 3,
    image: `${ZontesG1}`,
    productName: 'Zontes G1 155',
    brand: 'Brand B',
    price: 99,
    originalPrice: 129,
  },
  {
    id: 4,
    image: `${Wing200}`,
    productName: 'Wing 200',
    brand: 'Brand B',
    price: 99,
    originalPrice: 129,
  },
  {
    id: 5,
    image: `${BenelliVLR200}`,
    productName: 'Benelli VLR 200 Super Sport',
    brand: 'Brand B',
    price: 99,
    originalPrice: 129,
  },
  {
    id: 6,
    image: `${BenelliVLR150}`,
    productName: 'Benelli VLR 150',
    brand: 'Brand B',
    price: 99,
    originalPrice: 129,
  },
  {
    id: 7,
    image: `${HawaR8}`,
    productName: 'Hawa R8',
    brand: 'Brand B',
    price: 99,
    originalPrice: 129,
  },
  {
    id: 8,
    image: `${MarinoClassic}`,
    productName: 'Marino Classic',
    brand: 'Brand B',
    price: 99,
    originalPrice: 129,
  },
  {
    id: 9,
    image: `${Dayun4ProMax}`,
    productName: 'Dayun 4 Pro Max',
    brand: 'Brand B',
    price: 99,
    originalPrice: 129,
  },
  {
    id: 10,
    image: `${EgyptianDayun2}`,
    productName: 'Egyptian Dayun 2 150 cc',
    brand: 'Brand B',
    price: 99,
    originalPrice: 129,
  },
  {
    id: 11,
    image: `${BoxerBajaj150}`,
    productName: 'Boxer Bajaj Hindi 150',
    brand: 'Brand B',
    price: 99,
    originalPrice: 129,
  },
  {
    id: 12,
    image: `${Hogan3ElNesr}`,
    productName: 'Hogan 3 ElNesr',
    brand: 'Brand B',
    price: 99,
    originalPrice: 129,
  },
  {
    id: 13,
    image: `${SYMsymphonySR}`,
    productName: 'SYM symphony SR 200cc',
    brand: 'Brand B',
    price: 99,
    originalPrice: 129,
  },
  {
    id: 14,
    image: `${HoganF250}`,
    productName: 'Hogan F250',
    brand: 'Brand B',
    price: 99,
    originalPrice: 129,
  },
  {
    id: 15,
    image: `${BenelliTNT}`,
    productName: 'Benelli TNT 150cc',
    brand: 'Brand B',
    price: 99,
    originalPrice: 129,
  },
  {
    id: 16,
    image: `${BenelliVLX200}`,
    productName: 'Benelli VLX 200cc',
    brand: 'Brand B',
    price: 99,
    originalPrice: 129,
  },
  {
    id: 17,
    image: `${BenelliVLM200}`,
    productName: 'Benelli VLM 200',
    brand: 'Brand B',
    price: 99,
    originalPrice: 129,
  },
  {
    id: 18,
    image: `${HoganL250}`,
    productName: 'Hogan L250',
    brand: 'Brand B',
    price: 99,
    originalPrice: 129,
  },
  {
    id: 19,
    image: `${Hogan4150cc}`,
    productName: 'Hogan 4 150cc (Old Eagle)',
    brand: 'Brand B',
    price: 99,
    originalPrice: 129,
  },
  {
    id: 20,
    image: `${Hogan4HJ}`,
    productName: 'Hogan 4 HJ 150cc',
    brand: 'Brand B',
    price: 99,
    originalPrice: 129,
  },
  {
    id: 21,
    image: `${Hogan3}`,
    productName: 'Hogan 3',
    brand: 'Brand B',
    price: 99,
    originalPrice: 129,
  },
  {
    id: 22,
    image: `${ZontesM310}`,
    productName: 'Zontes M310 CC',
    brand: 'Brand B',
    price: 99,
    originalPrice: 129,
  },
  {
    id: 23,
    image: `${ZontesU1}`,
    productName: 'Zontes U1 155cc',
    brand: 'Brand B',
    price: 99,
    originalPrice: 129,
  },
];

const Products = ({darkMode}) => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const ProductCard = ({ data }) => {

    const { image, productName, brand, price, originalPrice, id } = data;

    const openPopup = (e) => {
        e.preventDefault()
      setSelectedProduct(data);
      setPopupVisible(true);
    };
    return (
      <div key={id} id='products' className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <img
            src={image}
            alt={productName}
            className="h-72 w-72 object-cover rounded-t-xl"
          />
          <div className="px-4 py-3 w-72">
            <span className="text-gray-400 mr-3 uppercase text-xs">{brand}</span>
            <p className="text-lg font-bold text-black truncate block capitalize">
              {productName}
            </p>
            <div className="flex items-center">
              <p className="text-lg font-semibold text-black cursor-auto my-3">
                ${price}
              </p>
              <del>
                <p className="text-sm text-gray-600 cursor-auto ml-2">${originalPrice}</p>
              </del>
              <div className="ml-auto">
                <button
                  onClick={openPopup}
                  className={`${darkMode ? "bg-[#00df9a] hover:bg-green-300" : "bg-[#056fd9] hover:bg-blue-500 text-white"} rounded-lg px-4 py-2 font-medium  duration-300`}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
      </div>
    );
  };

  const Popup = ({darkMode}) => {
    const [closing, setClosing] = useState(false);
  
    const handleClose = () => {
      setClosing(true);
      // Add a delay to allow the animation to complete before setting popupVisible to false
      setTimeout(() => {
        setPopupVisible(false);
        setClosing(false);
      }, 300); // Adjust the duration to match your CSS transition duration
    };
  
    if (!popupVisible || !selectedProduct) return null;
  
    const popupClassName = `fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 transition-opacity duration-300  ${
      closing ? 'opacity-0' : 'opacity-100'
    }` ;
  
    return (
      <div className={popupClassName} style={{ zIndex : '10000'}}>
        <div className="flex flex-col sm:flex-row bg-white p-8 rounded-md w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
          <div className="mb-4 sm:mr-4 sm:mb-0">
            <img src={selectedProduct.image} className="w-9/12 max-w-md mx-auto" alt="" />
          </div>
          <div className="w-full max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4">{selectedProduct.productName}</h2>
            <p className="mb-4">
              Specs: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet rem illum
              molestiae ipsam? Repudiandae repellendus sint quam corrupti quibusdam vel, dolores
              tempora eveniet odio assumenda. Eveniet quas cum nobis dolor! Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Officiis eos, quidem cumque ipsa voluptas minima
              aliquam inventore et, commodi amet vero pariatur blanditiis beatae modi animi officia.
              Error, expedita earum. lorem
            </p>
            <div className="ml-auto float-right">
              <button
                className={`${darkMode ? "bg-[#00df9a] hover:bg-green-300" : "bg-[#056fd9] hover:bg-blue-500 text-white"} rounded-lg px-4 py-2 font-medium   duration-300`}
                onClick={handleClose}
              >
                Go back
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  

  return (
    <div className={`${!darkMode ? 'bg-white' : ''} transition-all duration-500 ease-linear`}>
      <div >
      <div className="text-center p-10">
        <h1 className={`font-bold text-4xl mb-4 ${darkMode ? 'text-white' : ''}`}>Two-Wheel Products</h1>
      </div>
      <section className=" w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 ">
        {productData.map((card, index) => (
          <ProductCard key={index} data={card} />
        ))}
      </section>
      </div>

      <Popup darkMode={darkMode}/>
    </div>
  );
};

export default Products;
