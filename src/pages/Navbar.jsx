import React from 'react';

import SideKiriNav from '../components/ui/SideKiriNav';
import Profile from '../components/ui/Profile';
const Navbar = () => {
  const item = {
    image: '/logo.png',
    imagemobile: '/movie-open.png',
    alt: 'Profile',
  };
  return (
    <div>
      <nav className='w-full bg-[#181A1C] text-white px-6 md:px-16 py-6 flex justify-between items-center fixed top-0 z-50'>
        <SideKiriNav
          image={item.image}
          imagemobile={item.imagemobile}
          alt={item.alt}
        />
        <Profile url='/' />
      </nav>
    </div>
  );
};

export default Navbar;
