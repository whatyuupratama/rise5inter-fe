import React from 'react';
import { FaRegEyeSlash } from 'react-icons/fa';

export default function InputAuth({
  showeye = false,
  label,
  type = 'text',
  placeholder,
}) {
  return (
    <div>
      <label className='block text-sm mb-1'>{label}</label>
      <div className='relative'>
        <input
          type={type}
          className='w-full px-4 py-3 rounded-full border border-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
          placeholder={placeholder}
        />

        {showeye && (
          <span className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer'>
            <FaRegEyeSlash />
          </span>
        )}
      </div>
    </div>
  );
}
