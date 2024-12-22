import React, { useState } from 'react';
import './Carousel.css';
const Carousel = () => {
  const images = [
    'https://image01.realme.net/general/20241212/17339677184375522816ea05448759b75ff71ccb7f35a.jpg.webp',
    'https://image01.realme.net/general/20241125/1732502822846997d10f6e07b4df484c81b3f21b49b0e.jpg.webp',
    'https://image01.realme.net/general/20241016/1729049579915e7f3d499d6754dd89a30480e54ed937d.jpg.webp',
    'https://image01.realme.net/general/20241012/1728700235469216bd1dea87245869ce9ad5fa2566b8e.jpg.webp',
    'https://image01.realme.net/general/20240912/1726123363522d887e0a8288b41908530724b2d78680a.jpg.webp',
    'https://image01.realme.net/general/20240805/1722841182262152ae3a8dee74a46acd9bdefc3f86a2a.jpg.webp',
    'https://image01.realme.net/general/20240701/17198153001163272cf964b684643bfbb6f5798bcee09.jpg.webp',
    'https://image01.realme.net/general/20240701/1719815344367018bb372b6124bcbb8e00021d90f5723.jpg.webp',
    'https://image01.realme.net/general/20240711/172067843618785eb893ced42472db337a3295f2c16f2.jpg.webp',
    'https://image01.realme.net/general/20240613/1718265926110da336294cae34031850e160f52adab67.jpg.webp',
    'https://image01.realme.net/general/20240407/1712455488312b35e8f07015747adb5b08cbf7f7b6288.jpg.webp',
    'https://image01.realme.net/general/20240403/17121292696342271d036b0cc47488f9556a1073a2946.jpg.webp',
    'https://image01.realme.net/general/20240419/1713511039600629af96a1e584e2a8e8ef3fef8dbfe20.jpg.webp',
    'https://image01.realme.net/general/20240126/1706272821840f47610938405416982cc8d6b30cbbf63.jpg.webp',
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <div
        className="carousel-images"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img src={image} alt={`Slide ${index + 1}`} key={index} className="carousel-image" />
        ))}
      </div>
      {/* Arrow Buttons */}
      <button className="carousel-btn prev" onClick={handlePrev}>
        &#9664;
      </button>
      <button className="carousel-btn next" onClick={handleNext}>
        &#9654;
      </button>

      {/* Dots */}
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
