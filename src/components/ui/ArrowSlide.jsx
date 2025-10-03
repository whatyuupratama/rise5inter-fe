import React from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import { FaArrowRight } from 'react-icons/fa6';

const ArrowSlide = ({ isRight = true, className = '' }) => {
  return (
    <div>
      <button
        className={`absolute ${
          isRight ? 'right-0 translate-x-4' : 'let-0 -translate-4'
        } top-1/2 -translate-y-1/2 z-30 bg-gray-800 hover:bg-opacity-90 rounded-full p-4 -translate-x-4 transition-all duration-300 shadow-lg ${className}`}
      >
        <span>{isRight ? <FaArrowRight /> : <FaArrowLeft />}</span>
      </button>
    </div>
  );
};

export default ArrowSlide;
