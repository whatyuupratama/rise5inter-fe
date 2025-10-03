import React from 'react';

const ContentAuth = ({ mode = 'login' }) => {
  // mode: 'login' | 'daftar'
  const isLogin = mode === 'login';
  return (
    <>
      <div
        className={`flex justify-${
          isLogin ? 'between' : 'start'
        } text-sm text-gray-300 mb-2`}
      >
        {isLogin ? (
          <>
            <a href='/Register' className='hover:underline'>
              Belum punya akun? <span className='text-blue-400'>Daftar</span>
            </a>
            <a href='#' className='hover:underline'>
              Lupa kata sandi?
            </a>
          </>
        ) : (
          <a href='/' className='hover:underline'>
            Sudah punya akun?<span className='text-blue-400'> Masuk</span>
          </a>
        )}
      </div>
      <a
        href={isLogin ? '/Beranda' : '/'}
        className='w-full py-3 bg-gray-600 hover:bg-gray-700 rounded-full font-semibold transition duration-200 block text-center'
      >
        {isLogin ? 'Masuk' : 'Daftar'}
      </a>
      <div className='flex items-center justify-center'>
        <span className='px-2 text-gray-400 text-sm'>Atau</span>
      </div>
      <a
        href={isLogin ? '/Register' : '/'}
        className='w-full py-3 border border-gray-500 rounded-full flex items-center justify-center gap-2 hover:bg-gray-800 transition'
      >
        <img src='/icongoogle.png' alt='Google' className='h-5 w-5' />
        Masuk dengan Google
      </a>
    </>
  );
};

export default ContentAuth;
