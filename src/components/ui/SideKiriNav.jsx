import React from 'react';

export default function SideKiriNav({ image, imagemobile, alt }) {
  const text = [
    {
      title: 'Series',
    },
    {
      title: 'Film',
    },
    {
      title: 'Daftar Saya',
    },
  ];
  return (
    <div className='flex items-center gap-4'>
      <img src={image} alt={alt} className='h-5 md:h-6 hidden sm:block' />
      <img src={imagemobile} alt='movie' className='h-5 w-5 sm:hidden' />

      <div className='flex gap-2 md:gap-6 text-xs md:text-sm font-medium'>
        {text.map((item, index) => (
          <a href='#' key={index} className='hover:text-gray-300 px-1 md:px-0'>
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
}
