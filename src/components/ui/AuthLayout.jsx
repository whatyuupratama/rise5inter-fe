import React from 'react';

export default function AuthLayout({ logo, backgroundImage = true, children }) {
  return (
    <div
      style={
        backgroundImage
          ? { backgroundImage: `url('/bgdf.jpg')` }
          : { backgroundImage: `url('/bglogin.jpg')` }
      }
      className='w-screen h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center'
    >
      <div className='w-full max-w-md md:max-w-lg lg:max-w-xl bg-[#181A1CD6] p-4 md:p-6 lg:p-9 rounded-xl shadow-xl text-white'>
        <div className='flex justify-center mb-4'>{logo}</div>
        {children}
      </div>
    </div>
  );
}
