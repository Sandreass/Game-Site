import React, { useState } from 'react';

import zorro from '/public/zorro.jpg';
import robin from '/public/robin.jpg';
import jimbei from '/public/jimbei.jpg';

const Slider = () => {
  // Используем переменные, а не строки
  const images = [jimbei, zorro, robin];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-96 bg-gray-200">
      <button onClick={prevSlide} className="absolute left-0">Prev</button>
      <img src={images[currentIndex]} alt="slide" className="w-full h-full object-cover" />
      <button onClick={nextSlide} className="absolute right-0">Next</button>
    </div>
  );
};

export default Slider;