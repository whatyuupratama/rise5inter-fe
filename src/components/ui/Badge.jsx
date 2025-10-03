import React from 'react';

const Badge = ({ type = 0 }) => {
  if (type === 0) return null;
  if (type === 1) {
    return (
      <div className='absolute top-3 left-3 bg-[#0F1E93] text-white text-xs font-semibold py-1.5 px-3 rounded-xl shadow-md'>
        Episode Baru
      </div>
    );
  }
  if (type === 2) {
    return (
      <div className='absolute top-0 right-3 bg-red-600 text-white text-xs px-2 py-2 rounded-tr-md rounded-bl-md flex flex-col items-center shadow-md min-w-[45px]'>
        <span className='text-sm'>Top</span>
        <span className='text-sm'>10</span>
      </div>
    );
  }
  return null;
};

export default Badge;
