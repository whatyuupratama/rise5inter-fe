import React from 'react';

const LinkColumn = ({ links }) => (
  <div className='flex flex-col space-y-3'>
    {links.map((link, index) => (
      <a
        key={index}
        href='#'
        className='text-gray-400 hover:text-white transition-colors text-sm'
      >
        {link}
      </a>
    ))}
  </div>
);

export default LinkColumn;
