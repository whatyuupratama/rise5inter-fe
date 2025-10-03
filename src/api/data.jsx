import { FaUser, FaCrown, FaSignOutAlt } from 'react-icons/fa';

export const continueWatching = [
  {
    title: 'All Of Us Are Dead',
    image: '/gambar1.png',
    star: '4.2 / 5,',
  },
  {
    title: 'Dont Look Up',
    image: '/gambar2.png',
    star: ' 4.2 / 5,',
  },
  {
    title: 'Duty After School',
    image: '/gambar3.png',
    star: ' 4.2 / 5,',
  },
  {
    title: 'Duty After School',
    image: '/gambar1.png',
    star: '4.2 / 5,',
  },
];
export const Item = [
  {
    title: 'Profil Saya',
    icon: <FaUser />,
  },
  {
    title: 'Ubah Premium',
    icon: <FaCrown />,
  },
  {
    title: 'Keluar',
    icon: <FaSignOutAlt />,
  },
];

export const genreLinks = [
  ['Aksi', 'Anak-anak', 'Anime', 'Britania'],
  ['Drama', 'Fantasi Ilmiah & Fantasi', 'Kejahatan', 'KDrama'],
  ['Komedi', 'Petualangan', 'Perang', 'Romantis'],
  ['Sains & Alam', 'Thriller'],
];

export const helpLinks = [
  'FAQ',
  'Kontak Kami',
  'Privasi',
  'Syarat & Ketentuan',
];

export const heroData = {
  title: 'Duty After School',
  description:
    'Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.',
  backgroundImage: '/kontenhero.png',
  ageRating: '18+',
  buttons: {
    primary: 'Mulai',
    secondary: 'Selengkapnya',
  },
  icons: {
    info: '/information-outline.png',
    volume: '/volume-off.png',
  },
};
export const moviesData = [
  {
    id: 1,
    title: 'Suzume',
    image: '/content1.png',
    badgeType: 1,
  },
  {
    id: 2,
    title: 'Jurassic World Dominion',
    image: '/content2.png',
    badgeType: 0,
  },
  {
    id: 3,
    title: 'Sonic the Hedgehog 2',
    image: '/conten3.png',
    badgeType: 0,
  },
  {
    id: 4,
    title: 'All of Us Are Dead',
    image: '/conten3.png',
    badgeType: 2,
  },
  {
    id: 5,
    title: 'Big Hero 6',
    image: '/content2.png',
    badgeType: 1,
  },
  {
    id: 6,
    title: 'Big Hero 6',
    image: '/content2.png',
    badgeType: 2,
  },
  {
    id: 7,
    title: 'Suzume',
    image: '/content1.png',
    badgeType: 0,
  },
  {
    id: 8,
    title: 'Jurassic World Dominion',
    image: '/content2.png',
    badgeType: 2,
  },
  {
    id: 9,
    title: 'Sonic the Hedgehog 2',
    image: '/conten3.png',
    badgeType: 2,
  },
  {
    id: 10,
    title: 'All of Us Are Dead',
    image: '/conten3.png',
    badgeType: 2,
  },
  {
    id: 11,
    title: 'Big Hero 6',
    image: '/content2.png',
    badgeType: 2,
  },
  {
    id: 12,
    title: 'Big Hero 6',
    image: '/content2.png',
    badgeType: 2,
  },
  {
    id: 13,
    title: 'Big Hero 6',
    image: '/content2.png',
    badgeType: 2,
  },
];

export const topRatingMovies = moviesData.slice(0, 5);
export const trendingMovies = moviesData.slice(7, 12);
export const newReleases = moviesData.slice(3, 8);
