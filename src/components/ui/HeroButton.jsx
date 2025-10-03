import React from 'react';

const HeroButton = ({
  children,
  variant = 'primary',
  icon = null,
  onClick,
  className = '',
}) => {
  const baseClasses =
    'px-4 md:px-6 py-2 md:py-3 rounded-full font-medium text-sm md:text-base transition-colors duration-200';

  const variants = {
    primary: 'bg-[#0F1E93] hover:bg-blue-700',
    secondary: 'bg-gray-700/70 hover:bg-gray-600 flex items-center gap-2',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {icon && <img src={icon} alt='icon' className='w-4 h-4 md:w-5 md:h-5' />}
      {children}
    </button>
  );
};

export default HeroButton;
