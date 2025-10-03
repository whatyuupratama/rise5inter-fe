import ArrowSlide from '../components/ui/ArrowSlide';
import { continueWatching } from '../api/data';
const ContinueWatching = ({ title }) => {
  return (
    <div className='px-6 md:px-16 pt-12 overflow-hidden'>
      <h2 className='text-xl sm:text-2xl md:text-3xl font-bold mb-6'>
        {title}
      </h2>
      <div className='relative group'>
        <ArrowSlide isRight={false} />
        <div className='flex gap-3'>
          {continueWatching.map((item, index) => (
            <div
              key={index}
              className='relative rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform cursor-pointer flex-1 min-w-[calc(100%-0rem)] md:min-w-[calc(25%-1.125rem)]'
            >
              <img
                src={item.image}
                alt={item.title}
                className='w-full h-50 object-cover rounded-xl'
              />
              <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 rounded-b-xl flex items-center justify-between'>
                <h3 className='text-lg font-semibold text-white'>
                  {item.title}
                </h3>
                <span className='text-gray-200 text-sm flex gap-1 items-center'>
                  <img src='/star.png' alt='star' className='w-5 h-5' />
                  <span>{item.star}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
        <ArrowSlide isRight={true} />
      </div>
    </div>
  );
};

export default ContinueWatching;
