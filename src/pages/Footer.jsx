import React from 'react';
import LinkColumn from '../components/ui/LinkColumn';
import ChevronIcon from '../components/ui/ChevronIcon';
import { genreLinks, helpLinks } from '../api/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='border-t-2 border-t-gray-800 text-white py-16 px-6 md:px-16'>
      <div className='mx-auto'>
        <div className='hidden lg:flex justify-between items-start'>
          <div className='flex flex-col'>
            <img src='/logo.png' alt='Chill Logo' className='mb-8 w-full h-8' />
            <p className='text-gray-400 text-sm'>
              ©{currentYear} Chill All Rights Reserved.
            </p>
          </div>
          <div className='flex-1 mx-16'>
            <h3 className='text-white font-medium text-lg mb-6'>Genre</h3>
            <div className='flex justify-between max-w-4xl'>
              {genreLinks.map((columnLinks, index) => (
                <LinkColumn key={index} links={columnLinks} />
              ))}
            </div>
          </div>
          <div className='flex flex-col'>
            <h3 className='text-white font-medium text-lg mb-6'>Bantuan</h3>
            <LinkColumn links={helpLinks} />
          </div>
        </div>
        <div className='lg:hidden space-y-8'>
          <div>
            <img src='/logo.png' alt='Chill Logo' className='mb-4 h-8' />
            <p className='text-gray-400 text-sm'>
              ©{currentYear} Chill All Rights Reserved.
            </p>
          </div>
          <div>
            <div className='flex items-center justify-between py-3'>
              <h3 className='text-white font-medium text-lg'>Genre</h3>
              <ChevronIcon />
            </div>
            <div className='flex items-center justify-between py-3'>
              <h3 className='text-white font-medium text-lg'>Bantuan</h3>
              <ChevronIcon />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
