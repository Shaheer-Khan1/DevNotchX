import React, { useState, useEffect } from 'react';
import './Brands.css';

const Brands = () => {
  const brandImages = [
    { src: 'brand1.jpg', alt: 'Brand 1' },
    { src: 'brand2.jpg', alt: 'Brand 2' },
    { src: 'brand3.jpg', alt: 'Brand 3' },
    { src: 'brand4.jpg', alt: 'Brand 4' },
    { src: 'brand5.jpg', alt: 'Brand 5' },
    { src: 'brand6.jpg', alt: 'Brand 6' },
    { src: 'brand7.jpg', alt: 'Brand 7' },
    { src: 'brand8.jpg', alt: 'Brand 8' },
    { src: 'brand9.jpg', alt: 'Brand 9' },
    { src: 'brand10.jpg', alt: 'Brand 10' },
    { src: 'brand11.jpg', alt: 'Brand 11' },
    { src: 'brand12.jpg', alt: 'Brand 12' },
  ];

  const [visibleBrands, setVisibleBrands] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      cycleBrands();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const cycleBrands = () => {
    const startIndex = index % brandImages.length;
    const brandsToShow = [
      brandImages[startIndex % brandImages.length],
      brandImages[(startIndex + 1) % brandImages.length],
      brandImages[(startIndex + 2) % brandImages.length],
      brandImages[(startIndex + 3) % brandImages.length],
      brandImages[(startIndex + 4) % brandImages.length],
      brandImages[(startIndex + 5) % brandImages.length],
      brandImages[(startIndex + 6) % brandImages.length],
      brandImages[(startIndex + 7) % brandImages.length],
      brandImages[(startIndex + 8) % brandImages.length],
    ];
    setVisibleBrands(brandsToShow);
    setIndex(index + 1);
  };

  return (
    <>
      <div className='title'>
        <h2>Trusted by Leading Brands Worldwide</h2>
      </div>
      <div className="brands-container">
        <div className="brands">
          {visibleBrands.map((brand, index) => (
            <div className="brand" key={index}>
              <img src={brand.src} alt={brand.alt} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Brands;
