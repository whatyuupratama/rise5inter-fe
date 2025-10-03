import Navbar from './Navbar';
import HeroSection from './Section';
import ContinueWatching from './ContinueWatching';
import MovieCarousel from './MovieCarousel';
import Footer from './Footer';

import { topRatingMovies, trendingMovies, newReleases } from '../api/data';
const Beranda = () => {
  return (
    <div className='bg-[#141414] text-white'>
      <Navbar />
      <main>
        <HeroSection />
        <ContinueWatching title='Continue Watching' />
        <MovieCarousel title='Top Rating' movies={topRatingMovies} />
        <MovieCarousel title='Film Trending' movies={trendingMovies} />
        <MovieCarousel title='Rilis Baru' movies={newReleases} />
        <Footer />
      </main>
    </div>
  );
};

export default Beranda;
