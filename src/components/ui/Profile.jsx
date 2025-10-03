import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { Item } from '../../api/data';

export default function Profile() {
  return (
    <div className='relative group'>
      <button className='flex items-center gap-2'>
        <img src='/figur.png' alt='Profile' className='h-8 w-8 rounded-full' />
        <span className='material-icons text-white group-hover:rotate-180 transition-transform duration-200'>
          <IoIosArrowDown />
        </span>
      </button>

      <div className='absolute right-0 top-full mt-2 w-64 bg-[#181A1C] rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-700'>
        {Item.map((item, id) => (
          <div
            key={id}
            className='p-4 border-b border-gray-700 cursor-pointer'
            onClick={() => {
              if (item.title === 'Keluar') {
                window.location.href = '/';
              }
            }}
          >
            <div className='flex items-center gap-3'>
              <span className=' text-white text-xl'>{item.icon}</span>
              <span className=' font-medium text-lg'>{item.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
