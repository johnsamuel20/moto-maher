import React, { useState } from 'react';
import Prod from '../assets/product1.jpeg';

const productData = [
  {
    id: 1,
    image: `${Prod}`,
    productName: 'Product 1',
    brand: 'Brand A',
    price: 149,
    originalPrice: 199,
  },
  {
    id: 2,
    image: `${Prod}`,
    productName: 'Product 2',
    brand: 'Brand B',
    price: 99,
    originalPrice: 129,
  },
  {
    id: 3,
    image: `${Prod}`,
    productName: 'Product 3',
    brand: 'Brand B',
    price: 99,
    originalPrice: 129,
  },
  {
    id: 4,
    image: `${Prod}`,
    productName: 'Product 4',
    brand: 'Brand B',
    price: 99,
    originalPrice: 129,
  },
  {
    id: 5,
    image: `${Prod}`,
    productName: 'Product 5',
    brand: 'Brand B',
    price: 99,
    originalPrice: 129,
  },
  {
    id: 5,
    image: `${Prod}`,
    productName: 'Product 6',
    brand: 'Brand B',
    price: 99,
    originalPrice: 129,
  },
  // Add more products as needed
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
                  className="rounded-lg px-4 py-2 font-medium bg-[#00df9a] hover:bg-green-300 duration-300"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
      </div>
    );
  };

  const Popup = () => {
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
                className="rounded-lg px-4 py-2 font-medium bg-[#00df9a] hover:bg-green-300 duration-300"
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
    <>
      <div className={`${!darkMode ? 'bg-white' : ''}`}>
      <div className="text-center p-10">
        <h1 className={`font-bold text-4xl mb-4 ${darkMode ? 'text-white' : ''}`}>Our Products</h1>
      </div>
      <section className=" w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {productData.map((card, index) => (
          <ProductCard key={index} data={card} />
        ))}
      </section>
      </div>

      <Popup />
    </>
  );
};

export default Products;
