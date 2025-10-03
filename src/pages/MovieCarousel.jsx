import ArrowSlide from '../components/ui/ArrowSlide';
import Badge from '../components/ui/Badge';

const MovieCarousel = ({ title, movies }) => {
  return (
    <div className='px-6 md:px-16 py-8 space-y-12'>
      <div>
        <h2 className='text-xl sm:text-2xl md:text-3xl font-bold mb-6'>
          {title}
        </h2>
        <div className='relative group'>
          <ArrowSlide isRight={false} />
          <div className='flex overflow-x-auto space-x-4 no-scrollbar scroll-smooth py-2'>
            {movies.map((movies, index) => (
              <div
                key={index}
                className='relative flex-shrink-0 w-32 md:w-80 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer group/item shadow-lg'
              >
                <img
                  src={movies.image}
                  alt={movies.title}
                  className='w-full h-48 md:h-96 object-cover'
                />
                <Badge type={movies.badgeType} />
                <div className='absolute inset-0 bg-gradient-to-t to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300'></div>
              </div>
            ))}
          </div>
          <ArrowSlide isRight={true} />
        </div>
      </div>
    </div>
  );
};

export default MovieCarousel;
