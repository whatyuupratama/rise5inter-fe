import React from 'react';
import HeroButton from '../components/ui/HeroButton';
import AgeRating from '../components/ui/AgeRating';
import { heroData } from '../api/data';

const Section = () => {
  return (
    <section
      className='hero-section text-white relative w-full h-[50vh] md:h-[80vh] bg-cover bg-center flex items-end'
      style={{ backgroundImage: `url('${heroData.backgroundImage}')` }}
    >
      <div className='absolute inset-0 bg-gradient-to-t from-[#141414] via-black/60 to-transparent' />

      <div className='relative z-10 w-full px-6 md:px-16 pb-8 md:pb-16 lg:pb-24 mx-auto'>
        <div className='max-w-xl'>
          <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4'>
            {heroData.title}
          </h1>

          <p className='text-sm md:text-base lg:text-lg text-gray-200 mb-4 md:mb-6 line-clamp-2 md:line-clamp-none leading-relaxed'>
            {heroData.description}
          </p>
        </div>

        <div className='flex items-center justify-between gap-4'>
          <div className='flex items-center gap-2 md:gap-3 flex-wrap'>
            <HeroButton variant='primary'>
              {heroData.buttons.primary}
            </HeroButton>
            <HeroButton variant='secondary' icon={heroData.icons.info}>
              <span className='hidden sm:inline'>
                {heroData.buttons.secondary}
              </span>
              <span className='sm:hidden'>{heroData.buttons.secondary}</span>
            </HeroButton>
            <AgeRating rating={heroData.ageRating} />
          </div>
          <div className='flex items-center'>
            <img
              src={heroData.icons.volume}
              alt='volume control'
              className='w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:opacity-80 transition-opacity'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
