import React from 'react';

const Cardfilm = () => {
  return (
    <div>
      {' '}
      <div className='relative flex-shrink-0 w-32 md:w-80 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer group/item shadow-lg'>
        <img
          src='/content1.png'
          alt='Suzume'
          className='w-full h-48 md:h-96 object-cover'
        />
        <div className='absolute top-3 left-3 bg-[#0F1E93] text-white text-xs font-semibold py-1.5 px-3 rounded-xl shadow-md'>
          Episode Baru
        </div>
        <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300'></div>
      </div>
    </div>
  );
};

export default Cardfilm;
