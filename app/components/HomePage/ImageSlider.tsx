'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const images = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrUitsxM9od0aQvBPenYQwfbky_p8rosNUPg&shttps://exploretraveloasis.com/wp-content/uploads/2022/11/Mini-Worlds-End-Sri-Lanka-Knuckles-Riverston-5.jpeghttps://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/11/22123004/galle-fort.jpeghttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2DdMatyQuBeAKvXJrmyvZ614zxB25MhfQuQ&s',
  'https://www.srilankatailormade.com/blog/wp-content/uploads/2023/07/960x0.webp',
  'https://c.myholidays.com/blog/blog/content/images/2021/04/Ella.webp'
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-[100vw] mx-auto">
      <div className="relative h-[85vh] w-full">
        <Image
          src={images[currentIndex]}
          alt="Slider Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <button
        className="w-[3vw] h-[18vh] absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-white p-2 hover:bg-white hover:text-[#20c997] "
        onClick={handlePrevClick}
      >
        &lt;
      </button>
      <button
        className="w-[3vw] h-[18vh] absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-white p-2 hover:bg-white hover:text-[#20c997] "
        onClick={handleNextClick}
      >
        &gt;
      </button>
    </div>
  );
};

export default ImageSlider;
