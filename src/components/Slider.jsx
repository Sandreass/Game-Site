import React, { useState, useEffect } from 'react';

import zorro from '/public/zorro.jpg';
import robin from '/public/robin.jpg';
import jimbei from '/public/jimbei.jpg';

const Slider = () => {
  const images = [jimbei, zorro, robin];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-96 bg-gray-200">
      <button onClick={prevSlide} className="absolute left-0 p-2 bg-white bg-opacity-50 rounded-full">Prev</button>
      <img src={images[currentIndex]} alt="slide" className="w-full h-full object-cover" />
      <button onClick={nextSlide} className="absolute right-0 p-2 bg-white bg-opacity-50 rounded-full">Next</button>
    </div>
  );
};

export default Slider;
