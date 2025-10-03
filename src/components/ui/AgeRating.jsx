import React from 'react';

const AgeRating = ({ rating }) => (
  <span className='px-3 md:px-4 py-1.5 md:py-2 border border-gray-400 rounded-full text-xs md:text-sm font-medium'>
    {rating}
  </span>
);

export default AgeRating;
